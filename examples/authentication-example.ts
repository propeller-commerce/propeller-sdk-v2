/**
 * Authentication example — Propeller SDK v0.10.0
 *
 * Login via `loginService`, automatic token handling on the client, and
 * logout. v0.10.0: `createClient()` + service factories; the client's
 * `isAuthenticated()` / `getAccessToken()` are async.
 */
import {
  createClient,
  loginService,
  userService,
  type Login,
  type ViewerResult,
} from '@propeller-commerce/propeller-sdk-v2';

// Create the client once. Proxy mode keeps API keys server-side.
const client = createClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy',
  clientId: 'my-app',
  timeout: 30000,
});

const auth = loginService(client);
const users = userService(client);

/**
 * Example 1: User login. `login` takes a LoginInput ({ email, password }).
 * The returned `Login.session` carries the GCIP tokens.
 */
async function userLogin(email: string, password: string): Promise<Login> {
  console.log('Attempting login…');
  const result = await auth.login({ email, password });

  const accessToken = result.session?.accessToken;
  if (accessToken) {
    // Persist the token so subsequent requests send Authorization.
    client.setAccessToken(accessToken);
    console.log('Login successful; token stored.');
  } else {
    console.warn('Login returned no session token.');
  }
  return result;
}

/**
 * Example 2: Authenticated query. Once a token is set, the client adds the
 * Authorization header automatically. `getViewer` returns the logged-in
 * Customer/Contact.
 */
async function getAuthenticatedUserData(): Promise<ViewerResult> {
  if (!(await client.isAuthenticated())) {
    throw new Error('User not authenticated. Please login first.');
  }
  const viewer = await users.getViewer({});
  console.log('Viewer:', viewer);
  return viewer;
}

/**
 * Example 3: Logout — clear the stored access token.
 */
function userLogout(): void {
  client.clearAccessToken();
  console.log('Logged out; token cleared.');
}

/**
 * Example 4: Check authentication status (async in v0.10.0).
 */
async function checkAuthStatus(): Promise<{ isAuthenticated: boolean; hasToken: boolean }> {
  const isAuthenticated = await client.isAuthenticated();
  const accessToken = await client.getAccessToken();
  console.log('Authenticated:', isAuthenticated, '| has token:', !!accessToken);
  return { isAuthenticated, hasToken: !!accessToken };
}

/**
 * Example 5: Handle auth errors — clear token on 401/unauthorized so the app
 * can route back to login.
 */
function handleAuthError(error: unknown): boolean {
  const msg = error instanceof Error ? error.message : String(error);
  if (msg.includes('unauthorized') || msg.includes('401')) {
    client.clearAccessToken();
    return true; // handled
  }
  return false;
}

async function testAuthenticationFlow(): Promise<void> {
  try {
    await checkAuthStatus();
    await userLogin('test@example.com', 'password123');
    await checkAuthStatus();
    await getAuthenticatedUserData();
    userLogout();
    await checkAuthStatus();
    console.log('Authentication flow completed.');
  } catch (error) {
    if (!handleAuthError(error)) {
      console.error('Authentication flow failed:', error);
    }
  }
}

export {
  userLogin,
  userLogout,
  getAuthenticatedUserData,
  checkAuthStatus,
  handleAuthError,
  testAuthenticationFlow,
};

// Uncomment to run:
// testAuthenticationFlow();
