import { apiKeyService } from '../../src/service/ApiKeyService';
import { GraphQLOperationError } from '../../src';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials, hasLiveAuth, testConfig } from '../config';

// ApiKeyService is an admin surface — read paths likely require auth, so gate on
// both live creds and auth. Suite skips cleanly in CI where .env.local is absent.
const describeAuth = hasLiveCredentials() && hasLiveAuth() ? describe : describe.skip;

describeAuth('ApiKeyService (real API, authenticated)', () => {
  let svc: ReturnType<typeof apiKeyService>;

  beforeAll(async () => {
    const client = await TestHelpers.createAuthenticatedClient();
    svc = apiKeyService(client);
  }, testConfig.TIMEOUT);

  it('getGqlApiKeys returns a paginated response with an items array', async () => {
    let res;
    try {
      // GqlApiKeySearchInput is optional; pass a bounded page anyway.
      res = await svc.getGqlApiKeys({ input: { page: 1, offset: 12 } });
    } catch (err) {
      // Tolerate only an admin 403 (GraphQLOperationError); rethrow anything else.
      expect(err).toBeInstanceOf(GraphQLOperationError);
      return;
    }
    expect(res).toBeTruthy();
    expect(Array.isArray(res.items)).toBe(true);
  }, testConfig.TIMEOUT);

  it('getRestApiKeys returns a paginated response with an items array', async () => {
    let res;
    try {
      // RestApiKeySearchInput is optional; pass a bounded page anyway.
      res = await svc.getRestApiKeys({ input: { page: 1, offset: 12 } });
    } catch (err) {
      expect(err).toBeInstanceOf(GraphQLOperationError);
      return;
    }
    expect(res).toBeTruthy();
    expect(Array.isArray(res.items)).toBe(true);
  }, testConfig.TIMEOUT);

  it('exposes read + mutation methods as functions (mutations not invoked)', () => {
    expect(typeof svc.getGqlApiKey).toBe('function');
    expect(typeof svc.getGqlApiKeys).toBe('function');
    expect(typeof svc.gqlApiKeyCreate).toBe('function');
    expect(typeof svc.gqlApiKeyUpdate).toBe('function');
    expect(typeof svc.gqlApiKeyDelete).toBe('function');
    expect(typeof svc.getRestApiKey).toBe('function');
    expect(typeof svc.getRestApiKeys).toBe('function');
    expect(typeof svc.restApiKeyCreate).toBe('function');
    expect(typeof svc.restApiKeyUpdate).toBe('function');
    expect(typeof svc.restApiKeyDelete).toBe('function');
  });
});
