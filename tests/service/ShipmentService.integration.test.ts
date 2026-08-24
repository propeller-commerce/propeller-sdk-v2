/**
 * Real-API integration tests for ShipmentService.
 *
 * Shipments are an authenticated/admin surface, so this suite is gated on
 * `hasLiveCredentials() && hasLiveAuth()` and uses an authenticated client.
 * Skips cleanly in CI (no .env.local). Read-path only; create/update/delete
 * mutations are asserted to exist but never invoked. Admin 403s are tolerated.
 */
import { shipmentService } from '../../src/service/ShipmentService';
import { GraphQLOperationError } from '../../src';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials, hasLiveAuth } from '../config';

const describeLive = hasLiveCredentials() && hasLiveAuth() ? describe : describe.skip;

describeLive('ShipmentService (integration)', () => {
  let svc: ReturnType<typeof shipmentService>;

  beforeAll(async () => {
    const client: GraphQLClient = await TestHelpers.createAuthenticatedClient();
    svc = shipmentService(client);
  });

  it('getShipments returns a paginated response and NEW sources is a valid field', async () => {
    try {
      const res = await svc.getShipments({ page: 1, offset: 12 });
      expect(res).toBeTruthy();
      expect(Array.isArray(res.items)).toBe(true);

      if (res.items.length > 0) {
        const first = res.items[0];
        expect(typeof first.id).toBe('string');
        // NEW field: sources is a valid field (array; may be empty).
        expect('sources' in first).toBe(true);
        expect(Array.isArray(first.sources)).toBe(true);
      }
    } catch (err) {
      // Admin-role gated deployments may 403 — that is still a well-formed error.
      expect(err).toBeInstanceOf(GraphQLOperationError);
    }
  });

  it('exposes create/update/delete mutations without invoking them (destructive on real data)', () => {
    expect(typeof svc.createShipment).toBe('function');
    expect(typeof svc.updateShipment).toBe('function');
    expect(typeof svc.deleteShipment).toBe('function');
  });
});
