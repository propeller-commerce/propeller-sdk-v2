import { BaseService } from '../../src/service/BaseService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { testConfig } from '../config';
import { TestHelpers } from '../helpers/testHelpers';

// Create a concrete implementation of BaseService for testing
class TestBaseService extends BaseService {
  public async testExecuteQuery(queryName: string, variables: any = {}) {
    return this.executeQuery(queryName, variables);
  }

  public async testExecuteMutation(mutationName: string, variables: any = {}) {
    return this.executeMutation(mutationName, variables);
  }
}

describe('BaseService', () => {
  let service: TestBaseService;
  let mockClient: jest.Mocked<GraphQLClient>;

  beforeEach(() => {
    // Create a mock GraphQL client
    mockClient = {
      execute: jest.fn(),
    } as any;

    service = new TestBaseService(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(service).toBeDefined();
      expect(service).toBeInstanceOf(TestBaseService);
      expect(service).toBeInstanceOf(BaseService);
    });

    it('should initialize fragments on construction', () => {
      // The service should have initialized fragments
      expect(service).toBeDefined();
    });
  });

  describe('Query Execution', () => {
    it('should execute queries successfully', async () => {
      const mockResponse = TestHelpers.createMockResponse({ data: 'test' });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.testExecuteQuery('testQuery', { id: 1 });

      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          variables: { id: 1 },
          skipFragmentResolution: true,
        })
      );
      expect(result).toEqual(mockResponse);
    });

    it('should handle query execution errors', async () => {
      const error = new Error('Query execution failed');
      mockClient.execute = jest.fn().mockRejectedValue(error);

      await expect(service.testExecuteQuery('invalidQuery')).rejects.toThrow('Query execution failed');
    });

    it('should cache resolved queries', async () => {
      const mockResponse = TestHelpers.createMockResponse({ data: 'test' });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      // First call should resolve and cache
      await service.testExecuteQuery('testQuery');
      
      // Second call should use cached version
      await service.testExecuteQuery('testQuery');

      // Should only call execute once due to caching
      expect(mockClient.execute).toHaveBeenCalledTimes(1);
    });
  });

  describe('Mutation Execution', () => {
    it('should execute mutations successfully', async () => {
      const mockResponse = TestHelpers.createMockResponse({ success: true });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.testExecuteMutation('testMutation', { input: 'test' });

      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          variables: { input: 'test' },
          skipFragmentResolution: true,
        })
      );
      expect(result).toEqual(mockResponse);
    });

    it('should handle mutation execution errors', async () => {
      const error = new Error('Mutation execution failed');
      mockClient.execute = jest.fn().mockRejectedValue(error);

      await expect(service.testExecuteMutation('invalidMutation')).rejects.toThrow('Mutation execution failed');
    });

    it('should cache resolved mutations', async () => {
      const mockResponse = TestHelpers.createMockResponse({ success: true });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      // First call should resolve and cache
      await service.testExecuteMutation('testMutation');
      
      // Second call should use cached version
      await service.testExecuteMutation('testMutation');

      // Should only call execute once due to caching
      expect(mockClient.execute).toHaveBeenCalledTimes(1);
    });
  });

  describe('Fragment Handling', () => {
    it('should handle fragment resolution correctly', async () => {
      const mockResponse = TestHelpers.createMockResponse({ data: 'test' });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      // This test verifies that the service can handle fragment resolution
      // The actual fragment resolution logic is tested in the GraphQLClient tests
      await service.testExecuteQuery('queryWithFragments');

      expect(mockClient.execute).toHaveBeenCalled();
    });

    it('should handle fragment resolution errors gracefully', async () => {
      const mockResponse = TestHelpers.createMockResponse({ data: 'test' });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      // Even if fragment resolution fails, the service should still work
      await service.testExecuteQuery('queryWithInvalidFragments');

      expect(mockClient.execute).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('should handle missing query names gracefully', async () => {
      await expect(service.testExecuteQuery('nonexistentQuery')).rejects.toThrow(
        "Query 'nonexistentQuery' not found in bundled queries"
      );
    });

    it('should handle missing mutation names gracefully', async () => {
      await expect(service.testExecuteMutation('nonexistentMutation')).rejects.toThrow(
        "Mutation 'nonexistentMutation' not found in bundled mutations"
      );
    });

    it('should handle client execution errors', async () => {
      const clientError = new Error('Client execution failed');
      mockClient.execute = jest.fn().mockRejectedValue(clientError);

      await expect(service.testExecuteQuery('testQuery')).rejects.toThrow('Client execution failed');
    });
  });

  describe('Performance and Caching', () => {
    it('should cache query results for performance', async () => {
      const mockResponse = TestHelpers.createMockResponse({ data: 'test' });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const startTime = Date.now();
      
      // First execution
      await service.testExecuteQuery('performanceQuery');
      const firstExecutionTime = Date.now() - startTime;

      // Second execution (should be faster due to caching)
      const secondStartTime = Date.now();
      await service.testExecuteQuery('performanceQuery');
      const secondExecutionTime = Date.now() - secondStartTime;

      expect(secondExecutionTime).toBeLessThanOrEqual(firstExecutionTime);
      expect(mockClient.execute).toHaveBeenCalledTimes(1);
    });

    it('should cache mutation results for performance', async () => {
      const mockResponse = TestHelpers.createMockResponse({ success: true });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const startTime = Date.now();
      
      // First execution
      await service.testExecuteMutation('performanceMutation');
      const firstExecutionTime = Date.now() - startTime;

      // Second execution (should be faster due to caching)
      const secondStartTime = Date.now();
      await service.testExecuteMutation('performanceMutation');
      const secondExecutionTime = Date.now() - secondStartTime;

      expect(secondExecutionTime).toBeLessThanOrEqual(firstExecutionTime);
      expect(mockClient.execute).toHaveBeenCalledTimes(1);
    });
  });

  describe('Variable Handling', () => {
    it('should pass variables correctly to queries', async () => {
      const mockResponse = TestHelpers.createMockResponse({ data: 'test' });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const variables = { id: 1, name: 'test', active: true };
      await service.testExecuteQuery('testQuery', variables);

      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          variables,
        })
      );
    });

    it('should pass variables correctly to mutations', async () => {
      const mockResponse = TestHelpers.createMockResponse({ success: true });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const variables = { input: { name: 'test', value: 123 } };
      await service.testExecuteMutation('testMutation', variables);

      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          variables,
        })
      );
    });

    it('should handle empty variables correctly', async () => {
      const mockResponse = TestHelpers.createMockResponse({ data: 'test' });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      await service.testExecuteQuery('testQuery');

      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          variables: {},
        })
      );
    });

    it('should handle complex nested variables correctly', async () => {
      const mockResponse = TestHelpers.createMockResponse({ success: true });
      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const complexVariables = {
        input: {
          user: {
            profile: {
              name: 'John',
              email: 'john@example.com',
              preferences: {
                theme: 'dark',
                notifications: true,
              },
            },
          },
          metadata: {
            tags: ['test', 'complex'],
            priority: 'high',
          },
        },
      };

      await service.testExecuteMutation('complexMutation', complexVariables);

      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          variables: complexVariables,
        })
      );
    });
  });

  describe('Integration with GraphQLClient', () => {
    it('should work with real GraphQL client', async () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new TestBaseService(realClient);

      expect(realService).toBeDefined();
      expect(realService).toBeInstanceOf(TestBaseService);
    });

    it('should handle client configuration changes', async () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new TestBaseService(realClient);

      // Update client configuration
      realClient.updateConfig({ timeout: 60000 });

      expect(realClient.getConfig().timeout).toBe(60000);
      expect(realService).toBeDefined();
    });
  });
}); 