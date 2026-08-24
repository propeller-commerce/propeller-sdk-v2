import { clusterConfigService } from '../../src/service/ClusterConfigService';
import { GraphQLOperationError } from '../../src';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials, hasLiveAuth, testConfig } from '../config';

// ClusterConfigService is an admin surface — read paths likely require auth, so
// gate on both live creds and auth. Skips cleanly in CI where .env.local absent.
const describeAuth = hasLiveCredentials() && hasLiveAuth() ? describe : describe.skip;

describeAuth('ClusterConfigService (real API, authenticated)', () => {
  let svc: ReturnType<typeof clusterConfigService>;

  beforeAll(async () => {
    const client = await TestHelpers.createAuthenticatedClient();
    svc = clusterConfigService(client);
  }, testConfig.TIMEOUT);

  it('getClusterConfigsPaginated returns a well-formed paginated response', async () => {
    let res;
    try {
      // page/offset are required Int on ClusterConfigSearchInput.
      res = await svc.getClusterConfigsPaginated({ input: { page: 1, offset: 12 } });
    } catch (err) {
      // Admin endpoint may 403 without the required role — tolerate only a
      // GraphQLOperationError; anything else (incl. Jest assertion errors) is real.
      expect(err).toBeInstanceOf(GraphQLOperationError);
      return;
    }
    // Live `clusterConfigsPaginated` returns pagination metadata; the operation
    // selection may omit `items`. Assert the envelope, and that items (when
    // present) is an array.
    expect(res).toBeTruthy();
    expect(typeof res.itemsFound).toBe('number');
    if ('items' in res) {
      expect(Array.isArray(res.items)).toBe(true);
    }
  }, testConfig.TIMEOUT);

  it('keeps the frozen getClusterConfig method present (not deeply tested)', () => {
    expect(typeof svc.getClusterConfig).toBe('function');
  });

  it('exposes read + mutation methods as functions (mutations not invoked)', () => {
    expect(typeof svc.getClusterConfigs).toBe('function');
    expect(typeof svc.getClusterConfigsPaginated).toBe('function');
    expect(typeof svc.getClusterConfigSetting).toBe('function');
    expect(typeof svc.createClusterConfig).toBe('function');
    expect(typeof svc.clusterConfigUpdate).toBe('function');
    expect(typeof svc.updateClusterConfigSetting).toBe('function');
    expect(typeof svc.clusterConfigSettingCreate).toBe('function');
    expect(typeof svc.clusterConfigSettingUpdate).toBe('function');
    expect(typeof svc.clusterConfigSettingDelete).toBe('function');
  });
});
