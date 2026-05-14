// Note: This client uses the built-in fetch API available in Node.js 18+
// For older versions, you may need to install a fetch polyfill

import { GraphQLOperationError, GraphQLErrorEntry } from './GraphQLOperationError';
import {
  resolveFragments,
  registerFragment as registerSharedFragment,
  getFragment as getSharedFragment,
  getFragmentNames as getSharedFragmentNames,
} from './fragmentResolver';

/**
 * Represents a GraphQL operation (query or mutation)
 */
export interface GraphQLOperation {
  operationName?: string;
  query: string;
  variables?: Record<string, any>;
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
 * Configuration for the GraphQL client
 */
export interface GraphQLClientConfig {
  /** API endpoint URL - can be direct external API or proxy endpoint */
  endpoint: string;
  /** Standard API key - only used in direct mode */
  apiKey?: string;
  /** Order Editor API key for specific mutations - only used in direct mode */
  orderEditorApiKey?: string;
  /** Additional headers */
  headers?: Record<string, string>;
  /** Request timeout in milliseconds */
  timeout?: number;
  /** Security mode: 'proxy' (recommended) or 'direct' (legacy, insecure) */
  securityMode?: 'proxy' | 'direct';
  /** Proxy endpoint for secure mode - if not provided, uses endpoint */
  proxyEndpoint?: string;
  /** Client identifier for proxy mode (optional) */
  clientId?: string;
  /** Custom path for GraphQL fragments (overrides default SDK fragments) */
  customFragmentsPath?: string;
  /** Custom path for GraphQL queries (overrides default SDK queries) */
  customQueriesPath?: string;
  /** Custom path for GraphQL mutations (overrides default SDK mutations) */
  customMutationsPath?: string;
  /** Enable custom GraphQL file overrides (default: true) */
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
}

const DEFAULT_TOKEN_STORAGE_KEY = 'access_token';

function defaultAccessTokenProvider(): string | undefined {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage.getItem(DEFAULT_TOKEN_STORAGE_KEY) || undefined;
  }
  return undefined;
}

/**
 * A secure GraphQL client for the Propeller eCommerce Platform
 *
 * Features:
 * - Automatic fragment resolution via shared module-scoped AST cache
 * - Secure proxy mode to protect API keys
 * - API key management for different operation types (direct mode only)
 * - Configurable access token provider for SSR / custom storage
 * - TypeScript support with full type safety
 *
 * SECURITY: Use 'proxy' mode in production to keep API keys server-side
 */
export class GraphQLClient {
  private config: GraphQLClientConfig;
  private queries: Map<string, string> = new Map();
  private mutations: Map<string, string> = new Map();

  /** Mutations that require Order Editor API key */
  private static readonly ORDER_EDITOR_MUTATIONS = new Set([
    'orderSetStatus',
    'passwordResetLink',
    'triggerQuoteSendRequest',
    'triggerOrderSendConfirm'
  ]);

  /**
   * @param config - Client configuration
   */
  constructor(config: GraphQLClientConfig) {
    this.config = {
      timeout: 30000,
      securityMode: 'proxy', // Default to secure mode
      allowCustomOverride: true,
      ...config
    };

    this.debugLog('=== Initialization ===');
    this.debugLog('Config:', {
      customQueriesPath: this.config.customQueriesPath,
      customMutationsPath: this.config.customMutationsPath,
      customFragmentsPath: this.config.customFragmentsPath,
      allowCustomOverride: this.config.allowCustomOverride,
    });

    this.loadFragments();
    this.loadQueries();
    this.loadMutations();
  }

  private debugLog(...args: any[]): void {
    if (this.config.debug) {
      console.log('[GraphQL Client]', ...args);
    }
  }

  private debugWarn(...args: any[]): void {
    if (this.config.debug) {
      console.warn('[GraphQL Client]', ...args);
    }
  }

  private debugError(...args: any[]): void {
    if (this.config.debug) {
      console.error('[GraphQL Client]', ...args);
    }
  }

  /**
   * Load GraphQL files from a directory
   */
  private loadGraphQLDirectory(dirPath: string): Map<string, string> {
    const files = new Map<string, string>();
    if (typeof window !== 'undefined') {
      this.debugLog(`Skipping directory load (browser environment): ${dirPath}`);
      return files;
    }
    try {
      if (typeof require !== 'undefined' && typeof require.resolve !== 'undefined') {
        const fs = require('fs');
        const path = require('path');
        const resolvedPath = path.isAbsolute(dirPath)
          ? dirPath
          : path.resolve(process.cwd(), dirPath);
        this.debugLog(`Attempting to load from: ${resolvedPath}`);
        if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
          const fileList = fs.readdirSync(resolvedPath);
          fileList.forEach((file: string) => {
            if (file.endsWith('.graphql') || file.endsWith('.gql')) {
              const filePath = path.join(resolvedPath, file);
              const content = fs.readFileSync(filePath, 'utf-8');
              const name = file.replace(/\.(graphql|gql)$/, '');
              files.set(name, content);
              this.debugLog(`Loaded: ${name} from ${file}`);
            }
          });
          this.debugLog(`Total loaded: ${files.size} files`);
        } else {
          this.debugLog(`Directory not found or not accessible: ${resolvedPath}`);
        }
      }
    } catch (error) {
      this.debugError(`Error loading directory ${dirPath}:`, error);
    }
    return files;
  }

  /**
   * Load all fragments from custom path (if provided) and default SDK path
   */
  private loadFragments(): void {
    this.debugLog('=== Loading Fragments ===');

    if (this.config.allowCustomOverride && this.config.customFragmentsPath) {
      this.debugLog(`Loading custom fragments from: ${this.config.customFragmentsPath}`);
      const customFragments = this.loadGraphQLDirectory(this.config.customFragmentsPath);
      customFragments.forEach((content, name) => {
        registerSharedFragment(name, content);
      });
      this.debugLog(`Loaded ${customFragments.size} custom fragments`);
    }
    // Default fragments are loaded on first use by the shared resolver.
  }

  /**
   * Load all queries from custom path (if provided) and default SDK path
   */
  private loadQueries(): void {
    if (this.config.allowCustomOverride && this.config.customQueriesPath) {
      this.debugLog(`Loading custom queries from: ${this.config.customQueriesPath}`);
      const customQueries = this.loadGraphQLDirectory(this.config.customQueriesPath);
      customQueries.forEach((content, name) => {
        this.debugLog(`Loaded custom query: ${name}`);
        this.queries.set(name, content);
      });
    }

    try {
      const queriesModule = require('../generated/queries');
      Object.keys(queriesModule).forEach(queryName => {
        if (queryName !== 'queries' && queryName !== 'default') {
          const queryContent = queriesModule[queryName];
          if (typeof queryContent === 'string' && !this.queries.has(queryName)) {
            this.queries.set(queryName, queryContent);
          }
        }
      });
    } catch {
      // Default queries might not exist yet - that's okay
    }
  }

  /**
   * Load all mutations from custom path (if provided) and default SDK path
   */
  private loadMutations(): void {
    if (this.config.allowCustomOverride && this.config.customMutationsPath) {
      const customMutations = this.loadGraphQLDirectory(this.config.customMutationsPath);
      customMutations.forEach((content, name) => {
        this.mutations.set(name, content);
      });
    }

    try {
      const mutationsModule = require('../generated/mutations');
      Object.keys(mutationsModule).forEach(mutationName => {
        if (mutationName !== 'mutations' && mutationName !== 'default') {
          const mutationContent = mutationsModule[mutationName];
          if (typeof mutationContent === 'string' && !this.mutations.has(mutationName)) {
            this.mutations.set(mutationName, mutationContent);
          }
        }
      });
    } catch {
      // Default mutations might not exist yet - that's okay
    }
  }

  /**
   * Register a GraphQL fragment manually
   */
  registerFragment(name: string, definition: string): void {
    registerSharedFragment(name, definition);
  }

  /**
   * Register a GraphQL query manually
   */
  registerQuery(name: string, definition: string): void {
    this.queries.set(name, definition);
  }

  /**
   * Register a GraphQL mutation manually
   */
  registerMutation(name: string, definition: string): void {
    this.mutations.set(name, definition);
  }

  /**
   * Get a registered fragment by name (returns the raw fragment string if available)
   */
  getFragment(name: string): string | undefined {
    return getSharedFragment(name);
  }

  /**
   * Get a registered query by name
   */
  getQuery(name: string): string | undefined {
    return this.queries.get(name);
  }

  /**
   * Get a registered mutation by name
   */
  getMutation(name: string): string | undefined {
    return this.mutations.get(name);
  }

  /**
   * Get all registered fragment names
   */
  getFragmentNames(): string[] {
    return getSharedFragmentNames();
  }

  /**
   * Get all registered query names
   */
  getQueryNames(): string[] {
    return Array.from(this.queries.keys());
  }

  /**
   * Get all registered mutation names
   */
  getMutationNames(): string[] {
    return Array.from(this.mutations.keys());
  }

  /**
   * Determine which API key to use based on the operation (direct mode only)
   */
  private getApiKey(operationName?: string): string | undefined {
    if (this.config.securityMode === 'proxy') {
      return undefined;
    }
    if (operationName && GraphQLClient.ORDER_EDITOR_MUTATIONS.has(operationName)) {
      return this.config.orderEditorApiKey;
    }
    return this.config.apiKey;
  }

  /**
   * Build request headers for a GraphQL operation
   */
  private async buildHeaders(operationName?: string): Promise<Record<string, string>> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...this.config.headers
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
   * Get the appropriate endpoint for the current security mode
   */
  private getEndpoint(): string {
    if (this.config.securityMode === 'proxy') {
      return this.config.proxyEndpoint || this.config.endpoint;
    }
    return this.config.endpoint;
  }

  /**
   * Extract operation name from a GraphQL query
   */
  private extractOperationName(query: string): string | undefined {
    const match = query.match(/(?:query|mutation)\s+(\w+)/);
    return match ? match[1] : undefined;
  }

  /**
   * Execute a GraphQL operation.
   *
   * Returns the raw `GraphQLResponse` (with `data` and/or `errors`). This is
   * the low-level entry point; it does not throw on GraphQL errors so that
   * callers who want to inspect partial responses can do so. The higher-level
   * `query()` / `mutate()` helpers and `BaseService.executeQuery/Mutation`
   * throw `GraphQLOperationError` when `errors` is non-empty.
   */
  async execute<T = any>(operation: GraphQLOperation): Promise<GraphQLResponse<T>> {
    const { query, variables = {}, operationName, skipFragmentResolution = false } = operation;

    const resolvedQuery = skipFragmentResolution ? query : resolveFragments(query);
    const actualOperationName = operationName || this.extractOperationName(resolvedQuery);
    const headers = await this.buildHeaders(actualOperationName);

    const body = JSON.stringify({
      query: resolvedQuery,
      variables,
      operationName: actualOperationName,
    });

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(this.getEndpoint(), {
        method: 'POST',
        headers,
        body,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: GraphQLResponse<T> = await response.json();
      return result;
    } catch (error) {
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
   * Execute a registered query by name
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
   * Execute a registered mutation by name
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
   * Reload all GraphQL operations from configured paths
   */
  reloadOperations(): void {
    this.queries.clear();
    this.mutations.clear();
    this.loadFragments();
    this.loadQueries();
    this.loadMutations();
  }

  /**
   * Update client configuration
   */
  updateConfig(newConfig: Partial<GraphQLClientConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current client configuration (without sensitive data)
   */
  getConfig(): Omit<GraphQLClientConfig, 'apiKey' | 'orderEditorApiKey'> {
    const { apiKey, orderEditorApiKey, ...safeConfig } = this.config;
    return safeConfig;
  }

  /**
   * Get current security mode
   */
  getSecurityMode(): 'proxy' | 'direct' {
    return this.config.securityMode || 'proxy';
  }

  /**
   * Check if client is in secure proxy mode
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
   * Clear access token (logout)
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
   * Check if user is authenticated (token resolver returned a value)
   */
  async isAuthenticated(): Promise<boolean> {
    return !!(await this.getAccessToken());
  }
}

/**
 * Create a new GraphQL client instance
 */
export function createGraphQLClient(config: GraphQLClientConfig): GraphQLClient {
  return new GraphQLClient(config);
}

let defaultClient: GraphQLClient | null = null;

/**
 * Initialize the default GraphQL client
 */
export function initializeClient(config: GraphQLClientConfig): void {
  defaultClient = createGraphQLClient(config);
}

/**
 * Get the default GraphQL client instance
 * @throws Error if client hasn't been initialized
 */
export function getClient(): GraphQLClient {
  if (!defaultClient) {
    throw new Error('GraphQL client not initialized. Call initializeClient() first.');
  }
  return defaultClient;
}

/**
 * Singleton GraphQL client instance
 * @deprecated Use getClient() instead
 */
export const client = new Proxy({} as GraphQLClient, {
  get(_target, prop) {
    return getClient()[prop as keyof GraphQLClient];
  },
});
