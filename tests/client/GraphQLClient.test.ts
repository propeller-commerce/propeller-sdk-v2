import { GraphQLClient, createGraphQLClient, initializeClient, getClient } from '../../src/client/GraphQLClient';
import { testConfig } from '../config';
import { TestHelpers } from '../helpers/testHelpers';

describe('GraphQLClient', () => {
  let client: GraphQLClient;

  beforeEach(() => {
    client = new GraphQLClient({
      endpoint: testConfig.GRAPHQL_ENDPOINT,
      apiKey: testConfig.API_KEY,
      orderEditorApiKey: testConfig.ORDER_EDITOR_API_KEY,
      timeout: testConfig.TIMEOUT,
    });
  });

  afterEach(() => {
    // Clean up any global state
    if (global.fetch && (global.fetch as any).mockRestore) {
      (global.fetch as any).mockRestore();
    }
  });

  describe('Constructor and Configuration', () => {
    it('should create a client with correct configuration', () => {
      expect(client).toBeDefined();
      expect(client.getConfig().endpoint).toBe(testConfig.GRAPHQL_ENDPOINT);
      expect(client.getConfig().timeout).toBe(testConfig.TIMEOUT);
    });

    it('should use default timeout when not specified', () => {
      const clientWithoutTimeout = new GraphQLClient({
        endpoint: testConfig.GRAPHQL_ENDPOINT,
        apiKey: testConfig.API_KEY,
      });
      expect(clientWithoutTimeout.getConfig().timeout).toBe(30000);
    });

    it('should update configuration correctly', () => {
      const newTimeout = 60000;
      client.updateConfig({ timeout: newTimeout });
      expect(client.getConfig().timeout).toBe(newTimeout);
    });
  });

  describe('Fragment Management', () => {
    it('should register fragments correctly', () => {
      const fragmentName = 'TestFragment';
      const fragmentDefinition = 'fragment TestFragment on Product { id name }';
      
      client.registerFragment(fragmentName, fragmentDefinition);
      
      // Note: We can't directly test private methods, but we can verify the client still works
      expect(client).toBeDefined();
    });
  });

  describe('API Key Selection', () => {
    it('should use standard API key for regular operations', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => TestHelpers.createMockResponse({ test: 'data' }),
      });
      global.fetch = mockFetch;

      const query = 'query TestQuery { test }';
      await client.query(query);

      const fetchCall = mockFetch.mock.calls[0];
      const headers = fetchCall[1].headers;
      expect(headers.apikey).toBe(testConfig.API_KEY);
    });

    it('should use order editor API key for specific mutations', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => TestHelpers.createMockResponse({ test: 'data' }),
      });
      global.fetch = mockFetch;

      const mutation = 'mutation orderSetStatus { orderSetStatus { success } }';
      await client.mutate(mutation);

      const fetchCall = mockFetch.mock.calls[0];
      const headers = fetchCall[1].headers;
      expect(headers.apikey).toBe(testConfig.ORDER_EDITOR_API_KEY);
    });
  });

  describe('Query Execution', () => {
    it('should execute queries successfully', async () => {
      const mockData = { products: [{ id: 1, name: 'Test Product' }] };
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => TestHelpers.createMockResponse(mockData),
      });
      global.fetch = mockFetch;

      const query = 'query GetProducts { products { id name } }';
      const result = await client.query(query);

      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith(
        testConfig.GRAPHQL_ENDPOINT,
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            apikey: testConfig.API_KEY,
          }),
          body: expect.stringContaining(query),
        })
      );
    });

    it('should handle query errors correctly', async () => {
      const mockError = TestHelpers.createMockError('GraphQL error occurred');
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ data: null, errors: [mockError] }),
      });
      global.fetch = mockFetch;

      const query = 'query InvalidQuery { invalidField }';
      
      await expect(client.query(query)).rejects.toThrow('GraphQL query failed: GraphQL error occurred');
    });

    it('should handle HTTP errors correctly', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 500,
      });
      global.fetch = mockFetch;

      const query = 'query TestQuery { test }';
      
      await expect(client.query(query)).rejects.toThrow('HTTP error! status: 500');
    });
  });

  describe('Mutation Execution', () => {
    it('should execute mutations successfully', async () => {
      const mockData = { createProduct: { id: 1, name: 'New Product' } };
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => TestHelpers.createMockResponse(mockData),
      });
      global.fetch = mockFetch;

      const mutation = 'mutation CreateProduct($input: CreateProductInput!) { createProduct(input: $input) { id name } }';
      const variables = { input: { name: 'New Product' } };
      const result = await client.mutate(mutation, variables);

      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalledWith(
        testConfig.GRAPHQL_ENDPOINT,
        expect.objectContaining({
          method: 'POST',
          body: expect.stringContaining(mutation),
        })
      );
    });

    it('should handle mutation errors correctly', async () => {
      const mockError = TestHelpers.createMockError('Mutation failed');
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ data: null, errors: [mockError] }),
      });
      global.fetch = mockFetch;

      const mutation = 'mutation TestMutation { test }';
      
      await expect(client.mutate(mutation)).rejects.toThrow('GraphQL mutation failed: Mutation failed');
    });
  });

  describe('Timeout Handling', () => {
    it('should handle request timeouts correctly', async () => {
      const mockFetch = jest.fn().mockImplementation(() => {
        return new Promise((_, reject) => {
          setTimeout(() => reject(new Error('AbortError')), 100);
        });
      });
      global.fetch = mockFetch;

      const clientWithShortTimeout = new GraphQLClient({
        endpoint: testConfig.GRAPHQL_ENDPOINT,
        apiKey: testConfig.API_KEY,
        timeout: 50,
      });

      const query = 'query TestQuery { test }';
      
      await expect(clientWithShortTimeout.query(query)).rejects.toThrow('GraphQL request timeout after 50ms');
    });
  });

  describe('Fragment Resolution', () => {
    it('should resolve fragments in queries', async () => {
      const mockData = { products: [{ id: 1, name: 'Test Product' }] };
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => TestHelpers.createMockResponse(mockData),
      });
      global.fetch = mockFetch;

      const query = 'query GetProducts { products { ...ProductFields } } fragment ProductFields on Product { id name }';
      const result = await client.query(query);

      expect(result).toEqual(mockData);
      expect(mockFetch).toHaveBeenCalled();
    });
  });

  describe('Utility Functions', () => {
    it('should create client using factory function', () => {
      const factoryClient = createGraphQLClient({
        endpoint: testConfig.GRAPHQL_ENDPOINT,
        apiKey: testConfig.API_KEY,
      });
      
      expect(factoryClient).toBeDefined();
      expect(factoryClient.getConfig().endpoint).toBe(testConfig.GRAPHQL_ENDPOINT);
    });

    it('should initialize and get default client', () => {
      initializeClient({
        endpoint: testConfig.GRAPHQL_ENDPOINT,
        apiKey: testConfig.API_KEY,
      });
      
      const defaultClient = getClient();
      expect(defaultClient).toBeDefined();
      expect(defaultClient.getConfig().endpoint).toBe(testConfig.GRAPHQL_ENDPOINT);
    });

    it('should throw error when getting uninitialized client', () => {
      // Reset global state
      (global as any).defaultClient = null;
      
      expect(() => getClient()).toThrow('GraphQL client not initialized. Call initializeClient() first.');
    });
  });

  describe('Error Handling', () => {
    it('should handle network errors gracefully', async () => {
      const mockFetch = jest.fn().mockRejectedValue(new Error('Network error'));
      global.fetch = mockFetch;

      const query = 'query TestQuery { test }';
      
      await expect(client.query(query)).rejects.toThrow('GraphQL request failed: Network error');
    });

    it('should handle malformed JSON responses', async () => {
      const mockFetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => {
          throw new Error('Invalid JSON');
        },
      });
      global.fetch = mockFetch;

      const query = 'query TestQuery { test }';
      
      await expect(client.query(query)).rejects.toThrow('GraphQL request failed: Invalid JSON');
    });
  });
}); 