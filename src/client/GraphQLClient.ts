// Note: This client uses the built-in fetch API available in Node.js 18+.
// For older runtimes, install a fetch polyfill.

import { GraphQLOperationError, GraphQLErrorEntry } from './GraphQLOperationError';
import { queries as bundledQueries } from '../generated/queries';
import { mutations as bundledMutations } from '../generated/mutations';

/**
 * Represents a GraphQL operation (query or mutation).
 *
 * As of 0.4.0, fragment inlining is performed at build time, so operation
 * strings reaching `execute()` already contain every fragment they reference.
 * `skipFragmentResolution` is retained on the interface for API compatibility
 * with 0.3.x callers but is no longer load-bearing — it is silently ignored.
 */
export interface GraphQLOperation {
  operationName?: string;
  query: string;
  variables?: Record<string, any>;
  /** @deprecated As of 0.4.0 there is no runtime fragment resolution; this flag is ignored. */
  skipFragmentResolution?: boolean;
}

/**
 * GraphQL response structure
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
  /** @deprecated As of 0.4.0, runtime fragment resolution is removed; ignored. */
  customFragmentsPath?: string;
  /** @deprecated As of 0.4.0, runtime custom query loading is removed; ignored. */
  customQueriesPath?: string;
  /** @deprecated As of 0.4.0, runtime custom mutation loading is removed; ignored. */
  customMutationsPath?: string;
  /** @deprecated As of 0.4.0, runtime custom overrides are removed; ignored. */
  allowCustomOverride?: boolean;
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
   * Mutation names that should be sent with `orderEditorApiKey` instead of
   * `apiKey` in direct mode. Defaults to a built-in list of order-editor
   * mutations. Override to add custom mutations without an SDK upgrade.
   *
   * @deprecated Proxy mode (the recommended path) makes this irrelevant.
   */
  orderEditorMutations?: string[];
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
 * - Bundled operations: queries/mutations/fragments are inlined at build time.
 * - Secure proxy mode to keep API keys server-side.
 * - API key routing for order-editor mutations in direct mode.
 * - Configurable access token provider for SSR / custom storage.
 * - TypeScript support with full type safety.
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
    this.warnOnDeprecatedConfig();

    this.debugLog('=== Initialization ===');

    // Bundled queries/mutations from the generated bundles (fragments pre-inlined).
    this.loadBundledQueries();
    this.loadBundledMutations();
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

  private warnOnDeprecatedConfig(): void {
    const deprecated: string[] = [];
    if (this.config.customFragmentsPath) deprecated.push('customFragmentsPath');
    if (this.config.customQueriesPath) deprecated.push('customQueriesPath');
    if (this.config.customMutationsPath) deprecated.push('customMutationsPath');
    if (this.config.allowCustomOverride !== undefined) deprecated.push('allowCustomOverride');
    if (deprecated.length > 0) {
      // eslint-disable-next-line no-console
      console.warn(
        `[propeller-sdk-v2] The following config options are deprecated and ignored as of 0.4.0 (fragment inlining now happens at build time): ${deprecated.join(', ')}.`
      );
    }
  }

  private debugLog(...args: any[]): void {
    if (this.config.debug) {
      // eslint-disable-next-line no-console
      console.log('[GraphQL Client]', ...args);
    }
  }

  private loadBundledQueries(): void {
    for (const [name, content] of Object.entries(bundledQueries as Record<string, string>)) {
      if (typeof content === 'string') {
        this.queries.set(name, content);
      }
    }
  }

  private loadBundledMutations(): void {
    for (const [name, content] of Object.entries(bundledMutations as Record<string, string>)) {
      if (typeof content === 'string') {
        this.mutations.set(name, content);
      }
    }
  }

  /**
   * Register a GraphQL fragment by name. As of 0.4.0, fragments are inlined
   * at build time; this method keeps the registration for any caller that
   * looks fragments up via `getFragment`, but does not affect operation
   * resolution.
   */
  registerFragment(name: string, definition: string): void {
    this.fragmentOverrides.set(name, definition);
  }

  /**
   * Register a custom query string under a name. Overrides the bundled
   * version if one exists.
   */
  registerQuery(name: string, definition: string): void {
    this.queries.set(name, definition);
  }

  /**
   * Register a custom mutation string under a name. Overrides the bundled
   * version if one exists.
   */
  registerMutation(name: string, definition: string): void {
    this.mutations.set(name, definition);
  }

  /**
   * Get a registered fragment by name. Returns undefined for fragments that
   * were inlined at build time but never registered separately.
   */
  getFragment(name: string): string | undefined {
    return this.fragmentOverrides.get(name);
  }

  /**
   * Get a registered query by name.
   */
  getQuery(name: string): string | undefined {
    return this.queries.get(name);
  }

  /**
   * Get a registered mutation by name.
   */
  getMutation(name: string): string | undefined {
    return this.mutations.get(name);
  }

  /**
   * Get all registered fragment override names.
   */
  getFragmentNames(): string[] {
    return Array.from(this.fragmentOverrides.keys());
  }

  /**
   * Get all registered query names.
   */
  getQueryNames(): string[] {
    return Array.from(this.queries.keys());
  }

  /**
   * Get all registered mutation names.
   */
  getMutationNames(): string[] {
    return Array.from(this.mutations.keys());
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
   * `query()` / `mutate()` helpers and `BaseService.executeQuery/Mutation`
   * throw `GraphQLOperationError` when `errors` is non-empty.
   */
  async execute<T = any>(operation: GraphQLOperation): Promise<GraphQLResponse<T>> {
    const { query, variables = {}, operationName } = operation;
    const actualOperationName = operationName || this.extractOperationName(query);
    const headers = await this.buildHeaders(actualOperationName);

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
      throw new GraphQLOperationError(result.errors, operationName, variables);
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
      throw new GraphQLOperationError(result.errors, operationName, variables);
    }
    return result.data!;
  }

  /**
   * Execute a registered query by name.
   */
  async queryByName<T = any>(
    queryName: string,
    variables?: Record<string, any>
  ): Promise<T> {
    const queryDefinition = this.queries.get(queryName);
    if (!queryDefinition) {
      throw new Error(
        `Query "${queryName}" not found. Available queries: ${Array.from(this.queries.keys()).join(', ')}`
      );
    }
    return this.query<T>(queryDefinition, variables, queryName);
  }

  /**
   * Execute a registered mutation by name.
   */
  async mutateByName<T = any>(
    mutationName: string,
    variables?: Record<string, any>
  ): Promise<T> {
    const mutationDefinition = this.mutations.get(mutationName);
    if (!mutationDefinition) {
      throw new Error(
        `Mutation "${mutationName}" not found. Available mutations: ${Array.from(this.mutations.keys()).join(', ')}`
      );
    }
    return this.mutate<T>(mutationDefinition, variables, mutationName);
  }

  /**
   * Reload bundled queries and mutations (no-op for fragments, which are now
   * inlined at build time). Retained for API compatibility.
   */
  reloadOperations(): void {
    this.queries.clear();
    this.mutations.clear();
    this.loadBundledQueries();
    this.loadBundledMutations();
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

  /**
   * Get current security mode.
   */
  getSecurityMode(): 'proxy' | 'direct' {
    return this.config.securityMode || 'proxy';
  }

  /**
   * Check if client is in secure proxy mode.
   */
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
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(DEFAULT_TOKEN_STORAGE_KEY, token);
    }
  }

  /**
   * Clear access token (logout).
   */
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

  /**
   * Check if user is authenticated (token resolver returned a value).
   */
  async isAuthenticated(): Promise<boolean> {
    return !!(await this.getAccessToken());
  }
}

/**
 * Create a new GraphQL client instance.
 */
export function createGraphQLClient(config: GraphQLClientConfig): GraphQLClient {
  return new GraphQLClient(config);
}

let defaultClient: GraphQLClient | null = null;

/**
 * Initialize the default GraphQL client.
 */
export function initializeClient(config: GraphQLClientConfig): void {
  defaultClient = createGraphQLClient(config);
}

/**
 * Get the default GraphQL client instance.
 * @throws Error if client hasn't been initialized
 */
export function getClient(): GraphQLClient {
  if (!defaultClient) {
    throw new Error('GraphQL client not initialized. Call initializeClient() first.');
  }
  return defaultClient;
}

/**
 * Singleton GraphQL client instance.
 *
 * Implemented as a Proxy over `getClient()` so that property *and* method
 * access route through the live client. Methods accessed via this Proxy are
 * bound to the underlying client to preserve `this` context.
 *
 * @deprecated Use `getClient()` instead — `client` is retained only for
 * backwards compatibility with code written against 0.x.
 */
export const client: GraphQLClient = new Proxy({} as GraphQLClient, {
  get(_target, prop) {
    const target = getClient();
    const value = (target as any)[prop];
    return typeof value === 'function' ? value.bind(target) : value;
  },
}) as GraphQLClient;
