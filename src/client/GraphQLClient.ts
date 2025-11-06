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
  /** Custom path for GraphQL fragments (overrides default SDK fragments) */
  customFragmentsPath?: string;
  /** Custom path for GraphQL queries (overrides default SDK queries) */
  customQueriesPath?: string;
  /** Custom path for GraphQL mutations (overrides default SDK mutations) */
  customMutationsPath?: string;
  /** Enable custom GraphQL file overrides (default: true) */
  allowCustomOverride?: boolean;
  /** Enable debug logging for custom GraphQL loading (default: false) */
  debug?: boolean;
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
    
    if (this.config.debug) {
      console.log('\n[GraphQL Client] === Initialization ===');
      console.log('[GraphQL Client] Config:', {
        customQueriesPath: this.config.customQueriesPath,
        customMutationsPath: this.config.customMutationsPath,
        customFragmentsPath: this.config.customFragmentsPath,
        allowCustomOverride: this.config.allowCustomOverride
      });
    }
    
    this.loadFragments();
    this.loadQueries();
    this.loadMutations();
  }

  /**
   * Load a GraphQL file from the filesystem
   * @private
   * @param filePath - Path to the GraphQL file
   * @returns GraphQL file content or null if not found
   */
  private loadGraphQLFile(filePath: string): string | null {
    // Skip filesystem operations in browser environment
    if (typeof window !== 'undefined') {
      return null;
    }
    
    try {
      // Check if we're in Node.js environment
      if (typeof require !== 'undefined' && typeof require.resolve !== 'undefined') {
        const fs = require('fs');
        const path = require('path');
        
        // Try to resolve the path
        const resolvedPath = path.isAbsolute(filePath) 
          ? filePath 
          : path.resolve(process.cwd(), filePath);
        
        if (fs.existsSync(resolvedPath)) {
          return fs.readFileSync(resolvedPath, 'utf-8');
        }
      }
    } catch (error) {
      // Silently fail - this is expected for custom paths that don't exist
    }
    return null;
  }

  /**
   * Load GraphQL files from a directory
   * @private
   * @param dirPath - Directory path
   * @returns Map of filename (without extension) to content
   */
  private loadGraphQLDirectory(dirPath: string): Map<string, string> {
    const files = new Map<string, string>();
    
    // Skip filesystem operations in browser environment
    if (typeof window !== 'undefined') {
      if (this.config.debug) {
        console.log(`[GraphQL Client] ⚠ Skipping directory load (browser environment): ${dirPath}`);
      }
      return files;
    }
    
    try {
      if (typeof require !== 'undefined' && typeof require.resolve !== 'undefined') {
        const fs = require('fs');
        const path = require('path');
        
        const resolvedPath = path.isAbsolute(dirPath)
          ? dirPath
          : path.resolve(process.cwd(), dirPath);
        
        if (this.config.debug) {
          console.log(`[GraphQL Client] Attempting to load from: ${resolvedPath}`);
          console.log(`[GraphQL Client] process.cwd(): ${process.cwd()}`);
          console.log(`[GraphQL Client] Path exists: ${fs.existsSync(resolvedPath)}`);
        }
        
        if (fs.existsSync(resolvedPath) && fs.statSync(resolvedPath).isDirectory()) {
          const fileList = fs.readdirSync(resolvedPath);
          
          if (this.config.debug) {
            console.log(`[GraphQL Client] Files found:`, fileList);
          }
          
          fileList.forEach((file: string) => {
            if (file.endsWith('.graphql') || file.endsWith('.gql')) {
              const filePath = path.join(resolvedPath, file);
              const content = fs.readFileSync(filePath, 'utf-8');
              const name = file.replace(/\.(graphql|gql)$/, '');
              files.set(name, content);
              
              if (this.config.debug) {
                console.log(`[GraphQL Client] ✓ Loaded: ${name} from ${file}`);
              }
            }
          });
          
          if (this.config.debug) {
            console.log(`[GraphQL Client] Total loaded: ${files.size} files`);
          }
        } else if (this.config.debug) {
          console.log(`[GraphQL Client] ⚠ Directory not found or not accessible: ${resolvedPath}`);
        }
      }
    } catch (error) {
      if (this.config.debug) {
        console.error(`[GraphQL Client] ❌ Error loading directory ${dirPath}:`, error);
      }
    }
    
    return files;
  }

  /**
   * Load all fragments from custom path (if provided) and default SDK path
   * @private
   */
  private loadFragments(): void {
    if (this.config.debug) {
      console.log('\n[GraphQL Client] === Loading Fragments ===');
    }
    
    // Load from custom path first (if enabled and provided)
    if (this.config.allowCustomOverride && this.config.customFragmentsPath) {
      if (this.config.debug) {
        console.log(`[GraphQL Client] Loading custom fragments from: ${this.config.customFragmentsPath}`);
      }
      
      const customFragments = this.loadGraphQLDirectory(this.config.customFragmentsPath);
      customFragments.forEach((content, name) => {
        this.fragments.set(name, content);
      });
      
      if (this.config.debug) {
        console.log(`[GraphQL Client] Loaded ${customFragments.size} custom fragments`);
      }
    }

    // Load default fragments from SDK (these won't override custom ones due to Map behavior)
    try {
      // Import fragments dynamically to avoid circular dependencies
      const fragmentsModule = require('../generated/fragments');
      
      let defaultCount = 0;
      
      // Register all fragments (skip the 'fragments' and 'default' exports)
      Object.keys(fragmentsModule).forEach(fragmentName => {
        if (fragmentName !== 'fragments' && fragmentName !== 'default') {
          const fragmentContent = fragmentsModule[fragmentName];
          if (typeof fragmentContent === 'string' && !this.fragments.has(fragmentName)) {
            // Only add if not already loaded from custom path
            this.fragments.set(fragmentName, fragmentContent);
            defaultCount++;
          }
        }
      });
      
      if (this.config.debug) {
        console.log(`[GraphQL Client] Loaded ${defaultCount} default SDK fragments`);
      }
    } catch (error) {
      if (this.config.debug) {
        console.warn('[GraphQL Client] Could not load default fragments:', error);
      }
    }
    
    if (this.config.debug) {
      console.log(`[GraphQL Client] Total fragments registered: ${this.fragments.size}`);
    }
  }

  /**
   * Load all queries from custom path (if provided) and default SDK path
   * @private
   */
  private loadQueries(): void {
    // Load from custom path first (if enabled and provided)
    if (this.config.allowCustomOverride && this.config.customQueriesPath) {
      console.log('\u2605 \u2192 Loading custom queries from:', this.config.customQueriesPath);
      const customQueries = this.loadGraphQLDirectory(this.config.customQueriesPath);
      customQueries.forEach((content, name) => {
        console.log('\u2605 \u2192 Loaded custom query:', name);
        this.queries.set(name, content);
      });
    }

    // Load default queries from SDK
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
    } catch (error) {
      // Default queries might not exist yet - that's okay
    }
  }

  /**
   * Load all mutations from custom path (if provided) and default SDK path
   * @private
   */
  private loadMutations(): void {
    // Load from custom path first (if enabled and provided)
    if (this.config.allowCustomOverride && this.config.customMutationsPath) {
      const customMutations = this.loadGraphQLDirectory(this.config.customMutationsPath);
      customMutations.forEach((content, name) => {
        this.mutations.set(name, content);
      });
    }

    // Load default mutations from SDK
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
    } catch (error) {
      // Default mutations might not exist yet - that's okay
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
   * Register a GraphQL query manually
   * @param name - Query name
   * @param definition - Query definition
   */
  registerQuery(name: string, definition: string): void {
    this.queries.set(name, definition);
  }

  /**
   * Register a GraphQL mutation manually
   * @param name - Mutation name
   * @param definition - Mutation definition
   */
  registerMutation(name: string, definition: string): void {
    this.mutations.set(name, definition);
  }

  /**
   * Get a registered fragment by name
   * @param name - Fragment name
   * @returns Fragment definition or undefined if not found
   */
  getFragment(name: string): string | undefined {
    return this.fragments.get(name);
  }

  /**
   * Get a registered query by name
   * @param name - Query name
   * @returns Query definition or undefined if not found
   */
  getQuery(name: string): string | undefined {
    return this.queries.get(name);
  }

  /**
   * Get a registered mutation by name
   * @param name - Mutation name
   * @returns Mutation definition or undefined if not found
   */
  getMutation(name: string): string | undefined {
    return this.mutations.get(name);
  }

  /**
   * Get all registered fragment names
   * @returns Array of fragment names
   */
  getFragmentNames(): string[] {
    return Array.from(this.fragments.keys());
  }

  /**
   * Get all registered query names
   * @returns Array of query names
   */
  getQueryNames(): string[] {
    return Array.from(this.queries.keys());
  }

  /**
   * Get all registered mutation names
   * @returns Array of mutation names
   */
  getMutationNames(): string[] {
    return Array.from(this.mutations.keys());
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
   * Execute a registered query by name
   * @param queryName - Name of the registered query
   * @param variables - Query variables
   * @returns Promise resolving to the query result data
   * @throws Error if query is not registered
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
   * @param mutationName - Name of the registered mutation
   * @param variables - Mutation variables
   * @returns Promise resolving to the mutation result data
   * @throws Error if mutation is not registered
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
   * Reload all GraphQL operations (queries, mutations, fragments) from configured paths
   * Useful when custom GraphQL files are updated at runtime
   */
  reloadOperations(): void {
    this.fragments.clear();
    this.queries.clear();
    this.mutations.clear();
    
    this.loadFragments();
    this.loadQueries();
    this.loadMutations();
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

 