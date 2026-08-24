/**
 * Real-API integration tests for ClusterOptionService.
 *
 * Gated on `hasLiveCredentials()` — skips cleanly in CI (no .env.local).
 * Read-path only; mutation methods are asserted to exist but never invoked.
 */
import { clusterOptionService } from '../../src/service/ClusterOptionService';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials } from '../config';

const describeLive = hasLiveCredentials() ? describe : describe.skip;

describeLive('ClusterOptionService (integration)', () => {
  const svc = clusterOptionService(TestHelpers.createTestClient());

  it('getClusterOptions returns a paginated response envelope', async () => {
    const res = await svc.getClusterOptions({
      input: { page: 1, offset: 12, includeHidden: true },
    });

    expect(res).toBeTruthy();
    // `items` may be omitted by the live API on an empty page; assert the
    // envelope and only inspect items when present.
    expect(typeof res.itemsFound).toBe('number');
    if (Array.isArray(res.items) && res.items.length > 0) {
      expect(typeof res.items[0].uuid).toBe('string');
    }
  });

  it('exposes mutation methods without invoking them (destructive on real data)', () => {
    expect(typeof svc.clusterOptionAssignProducts).toBe('function');
    expect(typeof svc.clusterOptionRemoveProducts).toBe('function');
    expect(typeof svc.clusterOptionProductCreate).toBe('function');
    expect(typeof svc.clusterOptionProductDelete).toBe('function');
    expect(typeof svc.clusterOptionMoveAbove).toBe('function');
    expect(typeof svc.clusterOptionMoveBelow).toBe('function');
  });
});
