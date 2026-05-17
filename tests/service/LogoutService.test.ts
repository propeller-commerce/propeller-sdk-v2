import { GraphQLClient } from '../../src/client/GraphQLClient';
import { GraphQLOperationError } from '../../src/client/GraphQLOperationError';
import { LogoutService } from '../../src/service/LogoutService';
import type { Logout } from '../../src/type/Logout';

const okResponse = (data: any) =>
  new Response(JSON.stringify({ data }), { status: 200 });

const gqlErrorResponse = (errors: { message: string }[]) =>
  new Response(JSON.stringify({ data: null, errors }), { status: 200 });

describe('LogoutService', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch' as any);
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it('logout() sends the bundled mutation and returns the payload typed as Logout', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({ logout: { todo: 'ok' } }));
    const client = new GraphQLClient({
      endpoint: 'https://x.test/gql',
      securityMode: 'direct',
      apiKey: 'k',
    });
    const svc = new LogoutService(client);

    const result: Logout = await svc.logout();

    // v0.10.0: returned value is a plain object satisfying the Logout
    // interface (no longer a class instance). The `logout` mutation declares
    // no GraphQL variables, so the method takes no arguments and sends `{}`.
    expect(result).toEqual({ todo: 'ok' });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.operationName).toBe('logout');
    expect(body.variables).toEqual({});
  });

  it('throws GraphQLOperationError when the server returns errors', async () => {
    fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'session not found' }]));
    const client = new GraphQLClient({
      endpoint: 'https://x.test/gql',
      securityMode: 'direct',
      apiKey: 'k',
    });
    const svc = new LogoutService(client);

    await expect(svc.logout()).rejects.toBeInstanceOf(GraphQLOperationError);
  });
});
