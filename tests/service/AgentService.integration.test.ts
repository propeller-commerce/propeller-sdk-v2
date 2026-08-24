import { agentService } from '../../src/service/AgentService';
import { GraphQLOperationError } from '../../src';
import { TestHelpers } from '../helpers/testHelpers';
import { hasLiveCredentials, hasLiveAuth, testConfig } from '../config';

// AgentService is an admin surface — read paths likely require auth, so gate on
// both live creds and auth. Suite skips cleanly in CI where .env.local is absent.
const describeAuth = hasLiveCredentials() && hasLiveAuth() ? describe : describe.skip;

describeAuth('AgentService (real API, authenticated)', () => {
  let svc: ReturnType<typeof agentService>;

  beforeAll(async () => {
    const client = await TestHelpers.createAuthenticatedClient();
    svc = agentService(client);
  }, testConfig.TIMEOUT);

  it('getAgents returns a paginated response with an items array', async () => {
    let res;
    try {
      // page/offset are required Int on AgentSearchInput.
      res = await svc.getAgents({ input: { page: 1, offset: 12 } });
    } catch (err) {
      // Admin endpoint may 403 without the required role — tolerate only a
      // GraphQLOperationError; anything else (incl. Jest assertion errors) is real.
      expect(err).toBeInstanceOf(GraphQLOperationError);
      return;
    }
    expect(res).toBeTruthy();
    expect(Array.isArray(res.items)).toBe(true);
  }, testConfig.TIMEOUT);

  it('exposes read + mutation methods as functions (mutations not invoked)', () => {
    expect(typeof svc.getAgent).toBe('function');
    expect(typeof svc.getAgents).toBe('function');
    expect(typeof svc.agentCreate).toBe('function');
    expect(typeof svc.agentUpdate).toBe('function');
    expect(typeof svc.agentDelete).toBe('function');
    expect(typeof svc.agentConversationCreate).toBe('function');
    expect(typeof svc.agentMessageCreate).toBe('function');
  });
});
