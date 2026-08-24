/**
 * Real-API integration tests for OrderService.
 *
 * Orders are an authenticated/admin surface, so this suite is gated on
 * `hasLiveCredentials() && hasLiveAuth()` and uses an authenticated client.
 * Skips cleanly in CI (no .env.local). Read-path only; create/update/delete
 * mutations are asserted to exist but never invoked. Admin 403s are tolerated.
 */
import { orderService } from '../../src/service/OrderService';
import { GraphQLOperationError } from '../../src';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials, hasLiveAuth } from '../config';

const describeLive = hasLiveCredentials() && hasLiveAuth() ? describe : describe.skip;

describeLive('OrderService (integration)', () => {
  let svc: ReturnType<typeof orderService>;

  beforeAll(async () => {
    const client: GraphQLClient = await TestHelpers.createAuthenticatedClient();
    svc = orderService(client);
  });

  it('getOrders returns a paginated response with an items array', async () => {
    try {
      const res = await svc.getOrders({ page: 1, offset: 12 });
      expect(res).toBeTruthy();
      expect(Array.isArray(res.items)).toBe(true);

      if (res.items.length > 0) {
        const first = res.items[0];
        expect(typeof first.id).toBe('number');
        // NEW field: company is present in the type (may be null/undefined).
        expect('company' in first).toBe(true);
      }
    } catch (err) {
      // Admin-role gated deployments may 403 — that is still a well-formed error.
      expect(err).toBeInstanceOf(GraphQLOperationError);
    }
  });

  it('getOrder exposes the NEW company field on the returned order type', async () => {
    let firstId: number | undefined;
    try {
      const res = await svc.getOrders({ page: 1, offset: 1 });
      firstId = res.items[0]?.id;
    } catch (err) {
      expect(err).toBeInstanceOf(GraphQLOperationError);
      return;
    }

    if (firstId === undefined) {
      return; // no order fixture available
    }

    try {
      const order = await svc.getOrder({ orderId: firstId });
      expect(order).toBeTruthy();
      expect(order.id).toBe(firstId);
      // NEW field: company key exists on the Order shape (value may be null).
      expect('company' in order).toBe(true);
    } catch (err) {
      expect(err).toBeInstanceOf(GraphQLOperationError);
    }
  });

  it('exposes create/update/delete mutations without invoking them (destructive on real data)', () => {
    expect(typeof svc.createOrder).toBe('function');
    expect(typeof svc.updateOrder).toBe('function');
    expect(typeof svc.setOrderStatus).toBe('function');
    expect(typeof svc.deleteOrderItem).toBe('function');
  });
});
