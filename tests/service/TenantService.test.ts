import { GraphQLClient } from '../../src/client/GraphQLClient';
import { GraphQLOperationError } from '../../src/client/GraphQLOperationError';
import { TenantService } from '../../src/service/TenantService';
import type { Tenant } from '../../src/type/Tenant';

const okResponse = (data: any) =>
  new Response(JSON.stringify({ data }), { status: 200 });

const gqlErrorResponse = (errors: { message: string }[]) =>
  new Response(JSON.stringify({ data: null, errors }), { status: 200 });

// Replaces the former LogoutService test: `logout` was removed in the
// deprecated-surface cleanup, so the zero-variable service contract is now
// guarded through `tenant`, which likewise declares no GraphQL variables.
describe('TenantService', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(global, 'fetch' as any);
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it('getTenant() sends the bundled query and returns the payload typed as Tenant', async () => {
    fetchSpy.mockResolvedValueOnce(okResponse({ tenant: { id: 't-1' } }));
    const client = new GraphQLClient({
      endpoint: 'https://x.test/gql',
      securityMode: 'direct',
      apiKey: 'k',
    });
    const svc = new TenantService(client);

    const result: Tenant = await svc.getTenant();

    // Returned value is a plain object satisfying the Tenant interface. The
    // `tenant` query declares no GraphQL variables, so the method takes no
    // arguments and sends `{}`.
    expect(result).toEqual({ id: 't-1' });
    const body = JSON.parse(fetchSpy.mock.calls[0][1].body as string);
    expect(body.operationName).toBe('tenant');
    expect(body.variables).toEqual({});
  });

  it('throws GraphQLOperationError when the server returns errors', async () => {
    fetchSpy.mockResolvedValueOnce(gqlErrorResponse([{ message: 'tenant not found' }]));
    const client = new GraphQLClient({
      endpoint: 'https://x.test/gql',
      securityMode: 'direct',
      apiKey: 'k',
    });
    const svc = new TenantService(client);

    await expect(svc.getTenant()).rejects.toBeInstanceOf(GraphQLOperationError);
  });
});
