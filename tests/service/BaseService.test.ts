import { GraphQLClient } from '../../src/client/GraphQLClient';
import { GraphQLOperationError } from '../../src/client/GraphQLOperationError';
import { BaseService } from '../../src/service/BaseService';

class TestService extends BaseService {
  doQuery(name: string, variables: any) {
    return this.executeQuery(name, variables);
  }
  doMutation(name: string, variables: any) {
    return this.executeMutation(name, variables);
  }
}

const okResponse = (data: any) =>
  new Response(JSON.stringify({ data }), { status: 200 });

const gqlErrorResponse = (errors: { message: string }[]) =>
  new Response(JSON.stringify({ data: null, errors }), { status: 200 });

describe('BaseService', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch' as any);
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it('looks up bundled query by name and passes it to client.execute', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({ viewer: { id: 1 } }));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });
    const svc = new TestService(client);

    const result = await svc.doQuery('viewer', {});

    expect(result.data).toEqual({ viewer: { id: 1 } });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.operationName).toBe('viewer');
    expect(body.query).toContain('query viewer');
  });

  it('throws Error when query name is not bundled', async () => {
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });
    const svc = new TestService(client);
    await expect(svc.doQuery('totallyMadeUpQuery', {})).rejects.toThrow(/not found in bundled queries/);
  });

  it('throws Error when mutation name is not bundled', async () => {
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });
    const svc = new TestService(client);
    await expect(svc.doMutation('totallyMadeUpMutation', {})).rejects.toThrow(/not found in bundled mutations/);
  });

  it('throws GraphQLOperationError when server returns errors on a query', async () => {
    fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'oops' }]));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });
    const svc = new TestService(client);

    await expect(svc.doQuery('viewer', {})).rejects.toBeInstanceOf(GraphQLOperationError);
  });

  it('throws GraphQLOperationError when server returns errors on a mutation', async () => {
    fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'bad mutation' }]));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });
    const svc = new TestService(client);

    // Use a real bundled mutation name to pass the name lookup.
    await expect(svc.doMutation('logout', { userId: 1 })).rejects.toBeInstanceOf(GraphQLOperationError);
  });

  it('passes variables through unchanged to the underlying request', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({}));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });
    const svc = new TestService(client);

    await svc.doQuery('viewer', { foo: 1, nested: { bar: [1, 2, 3] } });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.variables).toEqual({ foo: 1, nested: { bar: [1, 2, 3] } });
  });
});
