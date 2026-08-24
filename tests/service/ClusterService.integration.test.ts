/**
 * Real-API integration tests for ClusterService.
 *
 * Gated on `hasLiveCredentials()` — skips cleanly in CI (no .env.local).
 * Read-path only; mutation methods are asserted to exist but never invoked.
 */
import { clusterService } from '../../src/service/ClusterService';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials } from '../config';

const describeLive = hasLiveCredentials() ? describe : describe.skip;

describeLive('ClusterService (integration)', () => {
  const svc = clusterService(TestHelpers.createTestClient());

  it('getClusters returns a paginated response envelope', async () => {
    const res = await svc.getClusters({ input: { page: 1, offset: 12 } });

    expect(res).toBeTruthy();
    // The live API returns the pagination envelope; `items` may be omitted when
    // the page is empty, so assert the envelope and only inspect items if present.
    expect(typeof res.itemsFound).toBe('number');

    if (Array.isArray(res.items) && res.items.length > 0) {
      const first = res.items[0];
      expect(typeof first.uuid).toBe('string');
      expect(Array.isArray(first.names)).toBe(true);
    }
  });

  it('exposes create/update/delete/move mutations without invoking them', () => {
    expect(typeof svc.createCluster).toBe('function');
    expect(typeof svc.updateCluster).toBe('function');
    expect(typeof svc.deleteCluster).toBe('function');
    expect(typeof svc.clusterCategoryMoveAbove).toBe('function');
    expect(typeof svc.clusterCategoryMoveBelow).toBe('function');
  });
});
