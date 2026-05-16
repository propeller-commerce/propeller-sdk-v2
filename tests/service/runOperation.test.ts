import { GraphQLClient } from '../../src/client/GraphQLClient';
import { GraphQLOperationError } from '../../src/client/GraphQLOperationError';
import { runOperation } from '../../src/service/runOperation';

const okResponse = (data: any) =>
  new Response(JSON.stringify({ data }), { status: 200 });

const gqlErrorResponse = (errors: { message: string }[]) =>
  new Response(JSON.stringify({ data: null, errors }), { status: 200 });

const DOC = `query foo { foo }`;

describe('runOperation()', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch' as any);
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it('runs the operation and returns the raw response on success', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({ foo: 1 }));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });

    const result = await runOperation(client, DOC, 'foo', {});

    expect(result.data).toEqual({ foo: 1 });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.operationName).toBe('foo');
    expect(body.query).toBe(DOC);
  });

  it('passes variables through unchanged to the underlying request', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({}));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });

    await runOperation(client, DOC, 'foo', { foo: 1, nested: { bar: [1, 2, 3] } });

    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.variables).toEqual({ foo: 1, nested: { bar: [1, 2, 3] } });
  });

  it('throws GraphQLOperationError when the server returns errors and no data', async () => {
    fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'oops' }]));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });

    await expect(runOperation(client, DOC, 'foo', {})).rejects.toBeInstanceOf(GraphQLOperationError);
  });

  it('attaches the failing document to the thrown error', async () => {
    fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'oops' }]));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });

    await expect(runOperation(client, DOC, 'foo', { a: 1 })).rejects.toMatchObject({
      document: DOC,
      operationName: 'foo',
      variables: { a: 1 },
    });
  });

  it('returns partial data instead of throwing when data is present alongside errors', async () => {
    const partial = new Response(
      JSON.stringify({ data: { foo: 7 }, errors: [{ message: 'field bar failed' }] }),
      { status: 200 }
    );
    fetchSpy.mockResolvedValueOnce(partial);
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });

    const result = await runOperation(client, DOC, 'foo', {});

    expect(result.data).toEqual({ foo: 7 });
    expect(result.errors).toEqual([{ message: 'field bar failed' }]);
  });

  it('still throws when data is explicitly null even if the errors array is present', async () => {
    fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'hard failure' }]));
    const client = new GraphQLClient({ endpoint: 'https://x.test/gql', securityMode: 'direct', apiKey: 'k' });

    await expect(runOperation(client, DOC, 'foo', {})).rejects.toBeInstanceOf(GraphQLOperationError);
  });
});
