// Note: This client uses the built-in fetch API available in Node.js 18+.
// For older runtimes, install a fetch polyfill.

import { GraphQLOperationError, GraphQLErrorEntry } from './GraphQLOperationError';

/**
 * Per-operation fetch hints passed through to the underlying `fetch()` call.
 *
 * Deliberately narrow: callers can't reach `method`, `headers`, `body`, or
 * `signal` — those are SDK invariants. The two slots below cover the
 * standard `fetch()` extension surface that hosting runtimes have converged
 * on; the SDK forwards them verbatim and doesn't introspect either.
 *
 * NEVER serialised into the GraphQL request body — see `execute()`. Two
 * callers passing the same `{ query, variables, operationName }` with
 * different `fetchOptions` (e.g. different `tags`) MUST hit the same cache
 * entry. The body is the cache key; `fetchOptions` is a transport hint.
 *
 * If your host runtime uses a *different* mechanism (e.g. an
 * application-level proxy keyed by request headers, like propeller-vue's
 * `/api/graphql` LRU), set `headers` on the GraphQL client config instead
 * — `fetchOptions` is for runtimes that consume hints directly on
 * `fetch()`.
 */
export interface GraphQLFetchOptions {
  /** Standard fetch cache mode (`'force-cache' | 'no-store' | ...`). */
  cache?: RequestCache;
  /**
   * Host-framework `fetch()` extension. The de-facto slot used by
   * Next.js, Cloudflare Workers, and Nitro (when wrapping `undici`) to
   * carry data-cache hints alongside a request. The SDK passes this
   * through to `fetch()` unmodified — it has no Next.js dependency.
   *
   * Shape (loosely standardised across the runtimes above):
   *   - `revalidate`: TTL in seconds, or `false` to opt out of caching.
   *   - `tags`: surgical-invalidation keys the runtime tracks per entry.
   */
  next?: {
    revalidate?: number | false;
    tags?: readonly string[];
  };
}

/**
 * Represents a GraphQL operation (query or mutation).
 *
 * As of v0.4.0, fragment inlining is performed at build time, so operation
 * strings reaching `execute()` already contain every fragment they reference.
 */
export interface GraphQLOperation {
  operationName?: string;
  query: string;
  variables?: Record<string, any>;
  /**
   * Optional fetch hints for THIS operation (e.g. Next.js data-cache control).
   * Pass-through to the underlying `fetch()` call. NEVER included in the
   * GraphQL request body — it's a transport hint, not part of the wire payload.
   */
  fetchOptions?: GraphQLFetchOptions;
}

/**
 * GraphQL response structure.
 */
export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: GraphQLErrorEntry[];
  extensions?: Record<string, any>;
}

/**
 * Resolver for the auth access token used in proxy mode.
 * May return a string, undefined (no token), or a Promise of either.
 */
export type AccessTokenProvider = () => string | undefined | Promise<string | undefined>;

/**
 * Configuration for the GraphQL client.
 */
export interface GraphQLClientConfig {
  /** API endpoint URL — direct external API or proxy endpoint. */
  endpoint: string;
  /** Standard API key — only used in direct mode. */
  apiKey?: string;
  /** Order Editor API key — only used in direct mode for mutations in `orderEditorMutations`. */
  orderEditorApiKey?: string;
  /** Additional headers attached to every request. */
  headers?: Record<string, string>;
  /** Request timeout in milliseconds (default 30000). */
  timeout?: number;
  /** Security mode: 'proxy' (recommended) or 'direct' (legacy, exposes API keys client-side). */
  securityMode?: 'proxy' | 'direct';
  /** Proxy endpoint for secure mode — falls back to `endpoint` if not provided. */
  proxyEndpoint?: string;
  /** Client identifier for proxy mode (sent as `X-Client-ID`). */
  clientId?: string;
  /** Enable debug logging (default: false). Gates all internal console output. */
  debug?: boolean;
  /**
   * Resolver for the auth access token used in proxy mode. Called on every
   * request. Defaults to reading `localStorage['access_token']` in the
   * browser, undefined elsewhere. Supply a custom resolver to integrate with
   * SSR (Next.js cookies, getServerSession), in-memory token stores, or
   * refresh flows.
   */
  getAccessToken?: AccessTokenProvider;
  /**
   * Default language tag (ISO 639-1, e.g. 'NL', 'EN'). When set, services and
   * helpers that take an optional `language` parameter fall back to this value.
   * Pass an explicit `language` to override per call.
   */
  defaultLanguage?: string;
  /**
   * Mutation names that should be sent with `orderEditorApiKey` instead of
   * `apiKey` in direct mode. Defaults to a built-in list of order-editor
   * mutations. Override to add custom mutations without an SDK upgrade.
   */
  orderEditorMutations?: string[];
  /**
   * When the server returns a *partial* GraphQL response (data present
   * alongside `errors` — the normal GraphQL contract), `runOperation` and the
   * service methods built on it return the data and, by default, only surface
   * the errors via the debug log. Set this to `true` to instead throw a
   * `GraphQLOperationError` on any partial-error response, so server-reported
   * problems can't be silently rendered. Defaults to `false` (backward
   * compatible). The low-level `client.execute()` never throws regardless.
   */
  throwOnPartialErrors?: boolean;
}

const DEFAULT_TOKEN_STORAGE_KEY = 'access_token';

const DEFAULT_ORDER_EDITOR_MUTATIONS: ReadonlyArray<string> = [
  'orderSetStatus',
  'passwordResetLink',
  'triggerQuoteSendRequest',
  'triggerOrderSendConfirm',
];

function defaultAccessTokenProvider(): string | undefined {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage.getItem(DEFAULT_TOKEN_STORAGE_KEY) || undefined;
  }
  return undefined;
}

/**
 * A GraphQL client for the Propeller eCommerce Platform.
 *
 * Features:
 *   - Per-operation imports — services bring their own GraphQL documents.
 *   - Secure proxy mode to keep API keys server-side.
 *   - API key routing for order-editor mutations in direct mode.
 *   - Configurable access token provider for SSR / custom storage.
 *   - TypeScript support with full type safety.
 *
 * SECURITY: Use 'proxy' mode in production to keep API keys server-side.
 */
export class GraphQLClient {
  private config: GraphQLClientConfig;
  private queries: Map<string, string> = new Map();
  private mutations: Map<string, string> = new Map();
  private fragmentOverrides: Map<string, string> = new Map();
  private orderEditorMutationSet: Set<string>;

  /**
   * @param config - Client configuration
   */
  constructor(config: GraphQLClientConfig) {
    this.config = {
      timeout: 30000,
      securityMode: 'proxy',
      ...config,
    };

    this.orderEditorMutationSet = new Set(
      this.config.orderEditorMutations ?? DEFAULT_ORDER_EDITOR_MUTATIONS
    );

    this.warnOnInconsistentConfig();
    this.debugLog('=== Initialization ===');
  }

  private warnOnInconsistentConfig(): void {
    if (this.config.securityMode === 'proxy') {
      if (this.config.apiKey || this.config.orderEditorApiKey) {
        // eslint-disable-next-line no-console
        console.warn(
          '[propeller-sdk-v2] securityMode is "proxy" but `apiKey` or `orderEditorApiKey` was supplied. ' +
            'These keys are ignored in proxy mode — keep them server-side, in your proxy function.'
        );
      }
    } else if (this.config.securityMode === 'direct') {
      if (!this.config.apiKey) {
        // eslint-disable-next-line no-console
        console.warn(
          '[propeller-sdk-v2] securityMode is "direct" but no `apiKey` was supplied. ' +
            'Requests will be sent without an API key header.'
        );
      }
    }
  }

  private debugLog(...args: any[]): void {
    if (this.config.debug) {
      // eslint-disable-next-line no-console
      console.log('[GraphQL Client]', ...args);
    }
  }

  /**
   * Register a GraphQL fragment by name. Fragments are inlined at build time
   * into service operations; this registration is used by ad-hoc callers who
   * compose documents themselves via `execute()`.
   */
  registerFragment(name: string, definition: string): void {
    this.fragmentOverrides.set(name, definition);
  }

  /** Register a custom query string under a name for use with `queryByName`. */
  registerQuery(name: string, definition: string): void {
    this.queries.set(name, definition);
  }

  /** Register a custom mutation string under a name for use with `mutateByName`. */
  registerMutation(name: string, definition: string): void {
    this.mutations.set(name, definition);
  }

  /** Look up a registered fragment by name. */
  getFragment(name: string): string | undefined {
    return this.fragmentOverrides.get(name);
  }

  /** Look up a registered query by name. */
  getQuery(name: string): string | undefined {
    return this.queries.get(name);
  }

  /** Look up a registered mutation by name. */
  getMutation(name: string): string | undefined {
    return this.mutations.get(name);
  }

  /** Names of all registered fragments. */
  getFragmentNames(): string[] {
    return Array.from(this.fragmentOverrides.keys());
  }

  /** Names of all registered queries. */
  getQueryNames(): string[] {
    return Array.from(this.queries.keys());
  }

  /** Names of all registered mutations. */
  getMutationNames(): string[] {
    return Array.from(this.mutations.keys());
  }

  /** Configured default language tag (ISO 639-1), or undefined if not set. */
  getDefaultLanguage(): string | undefined {
    return this.config.defaultLanguage;
  }

  /**
   * Determine which API key to use based on the operation (direct mode only).
   */
  private getApiKey(operationName?: string): string | undefined {
    if (this.config.securityMode === 'proxy') {
      return undefined;
    }
    if (operationName && this.orderEditorMutationSet.has(operationName)) {
      return this.config.orderEditorApiKey;
    }
    return this.config.apiKey;
  }

  /**
   * Build request headers for a GraphQL operation.
   */
  private async buildHeaders(operationName?: string): Promise<Record<string, string>> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...this.config.headers,
    };

    if (this.config.securityMode === 'proxy') {
      if (this.config.clientId) {
        headers['X-Client-ID'] = this.config.clientId;
      }
      const provider = this.config.getAccessToken ?? defaultAccessTokenProvider;
      const token = await provider();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    } else {
      const apiKey = this.getApiKey(operationName);
      if (apiKey) {
        headers['apikey'] = `${apiKey}`;
      }
    }

    return headers;
  }

  /**
   * Get the appropriate endpoint for the current security mode.
   */
  private getEndpoint(): string {
    if (this.config.securityMode === 'proxy') {
      return this.config.proxyEndpoint || this.config.endpoint;
    }
    return this.config.endpoint;
  }

  /**
   * Extract an operation name from a GraphQL document.
   *
   * Strips leading `#` comments and whitespace, then matches the first
   * `query NAME` or `mutation NAME` form. Returns undefined for anonymous
   * operations like `query { ... }`.
   */
  private extractOperationName(query: string): string | undefined {
    const stripped = query.replace(/^\s*(#[^\n]*\n)+/g, '').trimStart();
    const match = stripped.match(/^(?:query|mutation)\s+(\w+)/);
    return match ? match[1] : undefined;
  }

  /**
   * Execute a GraphQL operation.
   *
   * Returns the raw `GraphQLResponse` (with `data` and/or `errors`). This is
   * the low-level entry point; it does not throw on GraphQL errors so callers
   * who want to inspect partial responses can do so. The higher-level
   * `query()` / `mutate()` helpers and the `runOperation` helper used by
   * services throw `GraphQLOperationError` when `errors` is non-empty.
   */
  async execute<T = any>(operation: GraphQLOperation): Promise<GraphQLResponse<T>> {
    const { query, variables = {}, operationName, fetchOptions } = operation;
    const actualOperationName = operationName || this.extractOperationName(query);
    const headers = await this.buildHeaders(actualOperationName);

    // The wire payload is `{query, variables, operationName}` only — DO NOT
    // merge `fetchOptions` in. Transport-level hints (cache, tags) must not
    // affect the request body, otherwise two callers passing different tags
    // for the same logical operation would produce different cache entries.
    const body = JSON.stringify({
      query,
      variables,
      operationName: actualOperationName,
    });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(this.getEndpoint(), {
        method: 'POST',
        headers,
        body,
        // Per-operation fetch hints. Extracted by named field (NOT spread) so
        // a caller can't reach `method`/`body`/`headers`/`signal`.
        cache: fetchOptions?.cache,
        // `next` is a Next.js fetch extension, not in lib.dom RequestInit. The
        // suppression is intentional — fail loud if lib.dom ever adds `next`.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error — next is a host-framework hint, not standard fetch
        next: fetchOptions?.next,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const bodyText = await response.text().catch(() => '');
        const snippet = bodyText ? `: ${bodyText.slice(0, 500)}` : '';
        throw new Error(`HTTP ${response.status} ${response.statusText}${snippet}`);
      }

      const result: GraphQLResponse<T> = await response.json();
      return result;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error(`GraphQL request timeout after ${this.config.timeout}ms`);
        }
        throw new Error(`GraphQL request failed: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute a GraphQL query, throwing on errors and returning `data` directly.
   */
  async query<T = any>(
    query: string,
    variables?: Record<string, any>,
    operationName?: string
  ): Promise<T> {
    const result = await this.execute<T>({ query, variables, operationName });
    if (result.errors && result.errors.length > 0) {
      const hasData = result.data !== undefined && result.data !== null;
      if (!hasData) {
        throw new GraphQLOperationError(result.errors, operationName, variables, query);
      }
      this.debugLog(
        `Partial response for ${operationName ?? 'operation'} — returning data alongside ${result.errors.length} error(s)`
      );
    }
    return result.data!;
  }

  /**
   * Execute a GraphQL mutation, throwing on errors and returning `data` directly.
   */
  async mutate<T = any>(
    mutation: string,
    variables?: Record<string, any>,
    operationName?: string
  ): Promise<T> {
    const result = await this.execute<T>({ query: mutation, variables, operationName });
    if (result.errors && result.errors.length > 0) {
      const hasData = result.data !== undefined && result.data !== null;
      if (!hasData) {
        throw new GraphQLOperationError(result.errors, operationName, variables, mutation);
      }
      this.debugLog(
        `Partial response for ${operationName ?? 'operation'} — returning data alongside ${result.errors.length} error(s)`
      );
    }
    return result.data!;
  }

  /**
   * Execute a registered query by name.
   * Only resolves queries registered via `registerQuery()` — bundled service
   * operations are no longer preloaded into the client and should be invoked
   * through the service factories (`productService(client).getProduct(...)`).
   */
  async queryByName<T = any>(
    queryName: string,
    variables?: Record<string, any>
  ): Promise<T> {
    const queryDefinition = this.queries.get(queryName);
    if (!queryDefinition) {
      throw new Error(
        `Query "${queryName}" not registered. ` +
          `Use \`client.registerQuery('${queryName}', \`<query string>\`)\` before calling queryByName(), ` +
          `or use the service factory instead.`
      );
    }
    return this.query<T>(queryDefinition, variables, queryName);
  }

  /**
   * Execute a registered mutation by name.
   * Only resolves mutations registered via `registerMutation()` — see `queryByName`.
   */
  async mutateByName<T = any>(
    mutationName: string,
    variables?: Record<string, any>
  ): Promise<T> {
    const mutationDefinition = this.mutations.get(mutationName);
    if (!mutationDefinition) {
      throw new Error(
        `Mutation "${mutationName}" not registered. ` +
          `Use \`client.registerMutation('${mutationName}', \`<mutation string>\`)\` before calling mutateByName(), ` +
          `or use the service factory instead.`
      );
    }
    return this.mutate<T>(mutationDefinition, variables, mutationName);
  }

  /**
   * Update client configuration.
   */
  updateConfig(newConfig: Partial<GraphQLClientConfig>): void {
    this.config = { ...this.config, ...newConfig };
    if (newConfig.orderEditorMutations) {
      this.orderEditorMutationSet = new Set(newConfig.orderEditorMutations);
    }
  }

  /**
   * Get current client configuration (without sensitive data).
   */
  getConfig(): Omit<GraphQLClientConfig, 'apiKey' | 'orderEditorApiKey'> {
    const { apiKey, orderEditorApiKey, ...safeConfig } = this.config;
    return safeConfig;
  }

  /** Get current security mode. */
  getSecurityMode(): 'proxy' | 'direct' {
    return this.config.securityMode || 'proxy';
  }

  /** True iff the client is in secure proxy mode. */
  isSecureMode(): boolean {
    return this.config.securityMode === 'proxy';
  }

  /**
   * Set access token for authentication.
   *
   * Writes to `localStorage['access_token']` in the browser. Only meaningful
   * when using the default `getAccessToken` resolver — if a custom resolver
   * is configured, this method does not affect what that resolver returns.
   */
  setAccessToken(token: string): void {
    if (this.config.getAccessToken) {
      // eslint-disable-next-line no-console
      console.warn(
        '[propeller-sdk-v2] setAccessToken() was called but a custom `getAccessToken` ' +
          'resolver is configured. This call writes localStorage["access_token"], which ' +
          'your resolver does not read — the new token will NOT be used. Update your own ' +
          'token store instead (the resolver is the source of truth).'
      );
    }
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(DEFAULT_TOKEN_STORAGE_KEY, token);
    }
  }

  /** Clear access token (logout). */
  clearAccessToken(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(DEFAULT_TOKEN_STORAGE_KEY);
    }
  }

  /**
   * Get current access token using the configured provider.
   * Returns undefined if no provider yields a token.
   */
  async getAccessToken(): Promise<string | undefined> {
    const provider = this.config.getAccessToken ?? defaultAccessTokenProvider;
    return provider();
  }

  /** True iff the access-token resolver yields a non-empty token. */
  async isAuthenticated(): Promise<boolean> {
    return !!(await this.getAccessToken());
  }
}

/**
 * Create a new GraphQL client instance. Preferred entry point in v0.10.0.
 *
 * Usage:
 *   const client = createClient({ endpoint: '/api/graphql', defaultLanguage: 'NL' });
 *   const productService = productServiceFactory(client);
 *   const product = await productService.getProduct({ productId: 1 });
 */
export function createClient(config: GraphQLClientConfig): GraphQLClient {
  return new GraphQLClient(config);
}

/**
 * Emits a one-time deprecation warning per legacy entry point, per process.
 * Keyed by function name so each distinct helper warns at most once.
 */
const _warnedLegacyInit = new Set<string>();
function warnDeprecatedInit(fnName: string, replacement: string): void {
  if (_warnedLegacyInit.has(fnName)) return;
  _warnedLegacyInit.add(fnName);
  // eslint-disable-next-line no-console
  console.warn(
    `[propeller-sdk-v2] ${fnName}() is deprecated and will be removed in a future ` +
      `release. Use ${replacement} instead.`
  );
}

/**
 * @deprecated Use `createClient()` instead. Retained for v0.x compatibility;
 * will be removed in a future release.
 */
export function createGraphQLClient(config: GraphQLClientConfig): GraphQLClient {
  warnDeprecatedInit('createGraphQLClient', 'createClient()');
  return new GraphQLClient(config);
}

let defaultClient: GraphQLClient | null = null;

/**
 * Initialize the default GraphQL client used by `getClient()`.
 *
 * @deprecated The global-singleton pattern is deprecated and will be removed
 * in a future release. Create a client with `createClient()` and pass it
 * explicitly to service factories instead.
 */
export function initializeClient(config: GraphQLClientConfig): void {
  warnDeprecatedInit('initializeClient', 'createClient() with an explicitly-passed client');
  defaultClient = createClient(config);
}

/**
 * Get the default GraphQL client instance.
 * @throws Error if client hasn't been initialized
 *
 * @deprecated The global-singleton pattern is deprecated and will be removed
 * in a future release. Create a client with `createClient()` and pass it
 * explicitly to service factories instead.
 */
export function getClient(): GraphQLClient {
  warnDeprecatedInit('getClient', 'createClient() with an explicitly-passed client');
  if (!defaultClient) {
    throw new Error('GraphQL client not initialized. Call initializeClient() or createClient() first.');
  }
  return defaultClient;
}
