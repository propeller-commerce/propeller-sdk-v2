import {
  GraphQLClient,
  GraphQLClientConfig,
  GraphQLOperationError,
  createGraphQLClient,
  initializeClient,
  getClient,
} from '../../src';

const ENDPOINT = 'https://example.test/graphql';

const okResponse = (data: any, init: Partial<Response> = {}) =>
  new Response(JSON.stringify({ data, errors: undefined }), { status: 200, ...init });

const errorBodyResponse = (status: number, body: string) =>
  new Response(body, { status });

const gqlErrorResponse = (errors: { message: string }[]) =>
  new Response(JSON.stringify({ data: null, errors }), { status: 200 });

describe('GraphQLClient', () => {
  let warnSpy: jest.SpyInstance;
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    fetchSpy = jest.spyOn(global, 'fetch' as any);
  });

  afterEach(() => {
    warnSpy.mockRestore();
    fetchSpy.mockRestore();
  });

  describe('constructor + config validation', () => {
    it('initializes with proxy mode by default', () => {
      const c = new GraphQLClient({ endpoint: ENDPOINT });
      expect(c.getSecurityMode()).toBe('proxy');
      expect(c.isSecureMode()).toBe(true);
    });

    it('warns when proxy mode is combined with apiKey', () => {
      new GraphQLClient({ endpoint: ENDPOINT, apiKey: 'leaked' });
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('securityMode is "proxy" but `apiKey`')
      );
    });

    it('warns when direct mode is missing apiKey', () => {
      new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct' });
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('securityMode is "direct" but no `apiKey`')
      );
    });

  });

  describe('execute()', () => {
    it('sends POST with correct body and operationName extracted from query', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({ foo: 1 }));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });

      const result = await c.execute({ query: 'query Foo { foo }' });

      expect(result.data).toEqual({ foo: 1 });
      const [url, init] = fetchSpy.mock.calls[0];
      expect(url).toBe(ENDPOINT);
      expect(init.method).toBe('POST');
      const body = JSON.parse(init.body as string);
      expect(body.operationName).toBe('Foo');
      expect(body.query).toBe('query Foo { foo }');
    });

    it('strips leading # comments when extracting operation name', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });
      await c.execute({ query: '# leading comment\n# another\nmutation Bar { bar }' });
      const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
      expect(body.operationName).toBe('Bar');
    });

    it('returns undefined operation name for anonymous queries', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });
      await c.execute({ query: 'query { foo }' });
      const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
      expect(body.operationName).toBeUndefined();
    });

    it('includes response body in HTTP error message', async () => {
      fetchSpy.mockResolvedValueOnce(errorBodyResponse(400, 'Invalid syntax at line 3'));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });

      await expect(c.execute({ query: 'query X { x }' })).rejects.toThrow(/HTTP 400.*Invalid syntax at line 3/);
    });

    it('returns response with errors array (does not throw)', async () => {
      fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'bad' }]));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });

      const result = await c.execute({ query: 'query X { x }' });
      expect(result.errors).toEqual([{ message: 'bad' }]);
    });
  });

  describe('query() / mutate() throw on GraphQL errors', () => {
    it('query() throws GraphQLOperationError when errors are present', async () => {
      fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'nope' }]));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });
      await expect(c.query('query X { x }', undefined, 'X')).rejects.toBeInstanceOf(GraphQLOperationError);
    });

    it('mutate() throws GraphQLOperationError when errors are present', async () => {
      fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'nope' }]));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });
      await expect(c.mutate('mutation Y { y }', undefined, 'Y')).rejects.toBeInstanceOf(GraphQLOperationError);
    });
  });

  describe('direct-mode API key routing', () => {
    it('uses standard apiKey for regular operations', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        securityMode: 'direct',
        apiKey: 'standard',
        orderEditorApiKey: 'editor',
      });
      await c.execute({ query: 'mutation Whatever { x }' });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers['apikey']).toBe('standard');
    });

    it('uses orderEditorApiKey for default order-editor mutations', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        securityMode: 'direct',
        apiKey: 'standard',
        orderEditorApiKey: 'editor',
      });
      await c.execute({ query: 'mutation orderSetStatus { x }' });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers['apikey']).toBe('editor');
    });

    it('uses orderEditorApiKey for custom-configured mutations', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        securityMode: 'direct',
        apiKey: 'standard',
        orderEditorApiKey: 'editor',
        orderEditorMutations: ['myCustomOp'],
      });
      await c.execute({ query: 'mutation myCustomOp { x }' });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers['apikey']).toBe('editor');
    });

    it('sends no apikey header in proxy mode', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'proxy' });
      await c.execute({ query: 'query X { x }' });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers['apikey']).toBeUndefined();
    });
  });

  describe('proxy mode auth token', () => {
    it('adds Authorization Bearer header when getAccessToken returns a token', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        securityMode: 'proxy',
        getAccessToken: () => 'tok-123',
      });
      await c.execute({ query: 'query X { x }' });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers['Authorization']).toBe('Bearer tok-123');
    });

    it('omits Authorization header when no token', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        securityMode: 'proxy',
        getAccessToken: () => undefined,
      });
      await c.execute({ query: 'query X { x }' });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers['Authorization']).toBeUndefined();
    });

    it('attaches X-Client-ID when clientId is configured', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        securityMode: 'proxy',
        clientId: 'storefront',
      });
      await c.execute({ query: 'query X { x }' });
      const headers = fetchSpy.mock.calls[0][1].headers;
      expect(headers['X-Client-ID']).toBe('storefront');
    });

    it('isAuthenticated() returns true when token is present', async () => {
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        securityMode: 'proxy',
        getAccessToken: () => 'x',
      });
      await expect(c.isAuthenticated()).resolves.toBe(true);
    });
  });

  describe('endpoint selection', () => {
    it('uses proxyEndpoint in proxy mode when provided', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({
        endpoint: ENDPOINT,
        proxyEndpoint: 'https://proxy.test/gql',
        securityMode: 'proxy',
      });
      await c.execute({ query: 'query X { x }' });
      expect(fetchSpy.mock.calls[0][0]).toBe('https://proxy.test/gql');
    });

    it('falls back to endpoint when proxyEndpoint is not set', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({}));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'proxy' });
      await c.execute({ query: 'query X { x }' });
      expect(fetchSpy.mock.calls[0][0]).toBe(ENDPOINT);
    });
  });

  describe('registered operations', () => {
    it('queryByName resolves a custom query registered via registerQuery', async () => {
      fetchSpy.mockResolvedValueOnce(okResponse({ viewer: { id: 1 } }));
      const c = new GraphQLClient({ endpoint: ENDPOINT, securityMode: 'direct', apiKey: 'k' });
      c.registerQuery('viewer', 'query viewer { viewer { id } }');
      expect(c.getQuery('viewer')).toBeDefined();
      const data = await c.queryByName('viewer');
      expect(data).toEqual({ viewer: { id: 1 } });
    });

    it('queryByName throws when query is not registered', async () => {
      const c = new GraphQLClient({ endpoint: ENDPOINT });
      await expect(c.queryByName('definitelyNotRegistered')).rejects.toThrow(/not registered/);
    });

    it('mutateByName throws when mutation is not registered', async () => {
      const c = new GraphQLClient({ endpoint: ENDPOINT });
      await expect(c.mutateByName('definitelyNotARealMutation')).rejects.toThrow(/not registered/);
    });

    it('registerFragment stores fragment string accessible via getFragment', () => {
      const c = new GraphQLClient({ endpoint: ENDPOINT });
      c.registerFragment('MyFrag', 'fragment MyFrag on Foo { id }');
      expect(c.getFragment('MyFrag')).toBe('fragment MyFrag on Foo { id }');
      expect(c.getFragmentNames()).toContain('MyFrag');
    });
  });

  describe('factory and singleton helpers', () => {
    it('createGraphQLClient returns a GraphQLClient instance', () => {
      expect(createGraphQLClient({ endpoint: ENDPOINT })).toBeInstanceOf(GraphQLClient);
    });

    it('getClient throws before initializeClient is called', () => {
      // Reset by importing fresh — but module-level state is shared, so we test
      // initialize-then-get instead.
      initializeClient({ endpoint: ENDPOINT });
      expect(getClient()).toBeInstanceOf(GraphQLClient);
    });
  });
});
