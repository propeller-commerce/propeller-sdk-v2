// Note: This client uses the built-in fetch API available in Node.js 18+
// For older versions, you may need to install a fetch polyfill

// Note: We handle fragment resolution manually to ensure proper fragment references

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
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: Array<string | number>;
  }>;
  extensions?: Record<string, any>;
}

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
}

/**
 * A secure GraphQL client for the Propeller eCommerce Platform
 * 
 * Features:
 * - Automatic fragment resolution
 * - Secure proxy mode to protect API keys
 * - API key management for different operation types (direct mode only)
 * - Support for both queries and mutations
 * - Error handling and response validation
 * - TypeScript support with full type safety
 * 
 * SECURITY: Use 'proxy' mode in production to keep API keys server-side
 */
export class GraphQLClient {
  private config: GraphQLClientConfig;
  private fragments: Map<string, string> = new Map();
  
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
      ...config
    };
    this.loadFragments();
  }

  /**
   * Load all fragments from the generated fragments
   * @private
   */
  private loadFragments(): void {
    try {
      // Import fragments dynamically to avoid circular dependencies
      const fragmentsModule = require('../generated/fragments');
      
      // Register all fragments (skip the 'fragments' and 'default' exports)
      Object.keys(fragmentsModule).forEach(fragmentName => {
        if (fragmentName !== 'fragments' && fragmentName !== 'default') {
          const fragmentContent = fragmentsModule[fragmentName];
          if (typeof fragmentContent === 'string') {
            this.fragments.set(fragmentName, fragmentContent);
          }
        }
      });
    } catch (error) {
      console.warn('Could not load fragments:', error);
    }
  }

  /**
   * Register a GraphQL fragment manually
   * @param name - Fragment name
   * @param definition - Fragment definition
   */
  registerFragment(name: string, definition: string): void {
    this.fragments.set(name, definition);
  }

  /**
   * Resolve fragments in a GraphQL query string
   * @private
   * @param query - GraphQL query string
   * @returns Query with resolved fragments
   */
  private resolveFragments(query: string): string {
    // Collect all required fragments recursively
    const requiredFragments = this.collectRequiredFragments(query);
    
    // Build the complete query with all required fragments
    const fragmentDefinitions = Array.from(requiredFragments)
      .map(fragmentName => this.fragments.get(fragmentName))
      .filter(Boolean)
      .join('\n\n');
    
    // Return the complete query with fragment definitions at the top
    // This ensures fragments are available but not inlined
    return fragmentDefinitions ? 
      `${fragmentDefinitions}\n\n${query}` : 
      query;
  }

  /**
   * Recursively collect all required fragments for a query
   * @private
   * @param query - GraphQL query string
   * @param visited - Set of already visited fragments to prevent infinite recursion
   * @returns Set of required fragment names
   */
  private collectRequiredFragments(query: string, visited: Set<string> = new Set()): Set<string> {
    const requiredFragments = new Set<string>();
    
    // Find all fragment spreads (...FragmentName) - allow spaces around fragment names
    const fragmentSpreads = query.match(/\.\.\.\s*(\w+)/g);
    
    if (fragmentSpreads) {
      for (const spread of fragmentSpreads) {
        const fragmentName = spread.replace(/\.\.\.\s*/, '').trim();
        
        if (!visited.has(fragmentName) && this.fragments.has(fragmentName)) {
          visited.add(fragmentName);
          requiredFragments.add(fragmentName);
          
          // Recursively collect fragments used by this fragment
          const fragmentDef = this.fragments.get(fragmentName)!;
          const nestedFragments = this.collectRequiredFragments(fragmentDef, visited);
          nestedFragments.forEach(name => requiredFragments.add(name));
        }
      }
    }
    
    return requiredFragments;
  }

  /**
   * Determine which API key to use based on the operation (direct mode only)
   * @private
   * @param operationName - Name of the GraphQL operation
   * @returns Appropriate API key
   */
  private getApiKey(operationName?: string): string | undefined {
    if (this.config.securityMode === 'proxy') {
      // In proxy mode, API keys are handled server-side
      return undefined;
    }
    
    if (operationName && GraphQLClient.ORDER_EDITOR_MUTATIONS.has(operationName)) {
      return this.config.orderEditorApiKey;
    }
    return this.config.apiKey;
  }

  /**
   * Build request headers for a GraphQL operation
   * @private
   * @param operationName - Name of the GraphQL operation
   * @returns Headers object
   */
  private buildHeaders(operationName?: string): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...this.config.headers
    };

    if (this.config.securityMode === 'proxy') {
      // In proxy mode, only send client identification if provided
      if (this.config.clientId) {
        headers['X-Client-ID'] = this.config.clientId;
      }
      
      // Automatically include Authorization header from localStorage if available
      if (typeof window !== 'undefined' && window.localStorage) {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
          headers['Authorization'] = `Bearer ${accessToken}`;
        }
      }
    } else {
      // Direct mode - include API key (INSECURE - only for development/testing)
      const apiKey = this.getApiKey(operationName);
      if (apiKey) {
        headers['apikey'] = `${apiKey}`;
      }
    }

    return headers;
  }

  /**
   * Get the appropriate endpoint for the current security mode
   * @private
   * @returns Endpoint URL to use
   */
  private getEndpoint(): string {
    if (this.config.securityMode === 'proxy') {
      return this.config.proxyEndpoint || this.config.endpoint;
    }
    return this.config.endpoint;
  }

  /**
   * Extract operation name from a GraphQL query
   * @private
   * @param query - GraphQL query string
   * @returns Operation name if found
   */
  private extractOperationName(query: string): string | undefined {
    const match = query.match(/(?:query|mutation)\s+(\w+)/);
    return match ? match[1] : undefined;
  }

  /**
   * Execute a GraphQL operation
   * @param operation - GraphQL operation to execute
   * @returns Promise resolving to the GraphQL response
   */
  async execute<T = any>(operation: GraphQLOperation): Promise<GraphQLResponse<T>> {
    const { query, variables = {}, operationName, skipFragmentResolution = false } = operation;
    
    // Resolve fragments in the query only if not skipped
    const resolvedQuery = skipFragmentResolution ? query : this.resolveFragments(query);
    
    // Extract operation name if not provided
    const actualOperationName = operationName || this.extractOperationName(resolvedQuery);
    
    // Build headers with appropriate API key
    const headers = this.buildHeaders(actualOperationName);
    
    // Prepare request body
    const body = JSON.stringify({
      query: resolvedQuery,
      variables,
      operationName: actualOperationName
    });

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(this.getEndpoint(), {
        method: 'POST',
        headers,
        body,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: GraphQLResponse<T> = await response.json();
      
      // Validate response
      if (result.errors && result.errors.length > 0) {
        console.warn('GraphQL errors:', result.errors);
      }

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
   * Execute a GraphQL query
   * @param query - GraphQL query string
   * @param variables - Query variables
   * @param operationName - Optional operation name
   * @returns Promise resolving to the query result data
   */
  async query<T = any>(
    query: string,
    variables?: Record<string, any>,
    operationName?: string
  ): Promise<T> {
    const result = await this.execute<T>({
      query,
      variables,
      operationName
    });

    if (result.errors && result.errors.length > 0) {
      throw new Error(`GraphQL query failed: ${result.errors.map(e => e.message).join(', ')}`);
    }

    return result.data!;
  }

  /**
   * Execute a GraphQL mutation
   * @param mutation - GraphQL mutation string
   * @param variables - Mutation variables
   * @param operationName - Optional operation name
   * @returns Promise resolving to the mutation result data
   */
  async mutate<T = any>(
    mutation: string,
    variables?: Record<string, any>,
    operationName?: string
  ): Promise<T> {
    const result = await this.execute<T>({
      query: mutation,
      variables,
      operationName
    });

    if (result.errors && result.errors.length > 0) {
      throw new Error(`GraphQL mutation failed: ${result.errors.map(e => e.message).join(', ')}`);
    }

    return result.data!;
  }

  /**
   * Update client configuration
   * @param newConfig - Partial configuration to update
   */
  updateConfig(newConfig: Partial<GraphQLClientConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Get current client configuration
   * @returns Current configuration (without sensitive data)
   */
  getConfig(): Omit<GraphQLClientConfig, 'apiKey' | 'orderEditorApiKey'> {
    const { apiKey, orderEditorApiKey, ...safeConfig } = this.config;
    return safeConfig;
  }

  /**
   * Get current security mode
   * @returns Current security mode
   */
  getSecurityMode(): 'proxy' | 'direct' {
    return this.config.securityMode || 'proxy';
  }

  /**
   * Check if client is in secure proxy mode
   * @returns True if using secure proxy mode
   */
  isSecureMode(): boolean {
    return this.config.securityMode === 'proxy';
  }

  /**
   * Set access token for authentication
   * @param token - Access token from login
   */
  setAccessToken(token: string): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('access_token', token);
    }
  }

  /**
   * Clear access token (logout)
   */
  clearAccessToken(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('access_token');
    }
  }

  /**
   * Get current access token
   * @returns Access token if available, undefined otherwise
   */
  getAccessToken(): string | undefined {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('access_token') || undefined;
    }
    return undefined;
  }

  /**
   * Check if user is authenticated
   * @returns True if access token exists
   */
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }
}

/**
 * Create a new GraphQL client instance
 * @param config - Client configuration
 * @returns GraphQL client instance
 */
export function createGraphQLClient(config: GraphQLClientConfig): GraphQLClient {
  return new GraphQLClient(config);
}

/**
 * Default GraphQL client instance
 * This can be configured and used throughout the application
 */
let defaultClient: GraphQLClient | null = null;

/**
 * Initialize the default GraphQL client
 * @param config - Client configuration
 */
export function initializeClient(config: GraphQLClientConfig): void {
  defaultClient = createGraphQLClient(config);
}

/**
 * Get the default GraphQL client instance
 * @returns Default client instance
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
  get(target, prop) {
    return getClient()[prop as keyof GraphQLClient];
  }
});

 