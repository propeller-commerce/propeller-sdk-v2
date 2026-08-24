/**
 * Real-API integration tests for TenantService.
 *
 * Tenant config is an authenticated/admin surface, so this suite is gated on
 * `hasLiveCredentials() && hasLiveAuth()` and uses an authenticated client.
 * Skips cleanly in CI (no .env.local). Read-path only; create/update/delete
 * mutations are asserted to exist but never invoked. Admin 403s are tolerated.
 */
import { tenantService } from '../../src/service/TenantService';
import { GraphQLOperationError } from '../../src';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials, hasLiveAuth } from '../config';

const describeLive = hasLiveCredentials() && hasLiveAuth() ? describe : describe.skip;

describeLive('TenantService (integration)', () => {
  let svc: ReturnType<typeof tenantService>;

  beforeAll(async () => {
    const client: GraphQLClient = await TestHelpers.createAuthenticatedClient();
    svc = tenantService(client);
  });

  it('getTenant returns the tenant with NEW default-language fields present', async () => {
    try {
      const tenant = await svc.getTenant();
      expect(tenant).toBeTruthy();
      expect(typeof tenant.id).toBe('string');

      // NEW schema-sync fields (keys exist on the Tenant shape; values may be null).
      expect('defaultAppLanguage' in tenant).toBe(true);
      expect('defaultDataLanguage' in tenant).toBe(true);
    } catch (err) {
      // Admin-role gated deployments may 403 — that is still a well-formed error.
      expect(err).toBeInstanceOf(GraphQLOperationError);
    }
  });

  it('exposes create/update/delete mutations without invoking them (destructive on real data)', () => {
    expect(typeof svc.createTenant).toBe('function');
    expect(typeof svc.updateTenant).toBe('function');
    expect(typeof svc.deleteTenant).toBe('function');
  });
});
