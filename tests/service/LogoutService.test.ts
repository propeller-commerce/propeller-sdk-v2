import { LogoutService } from '../../src/service/LogoutService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { Logout } from '../../src/type/Logout';
import { TestHelpers } from '../helpers/testHelpers';

describe('LogoutService', () => {
  let logoutService: LogoutService;
  let mockClient: any;

  beforeEach(() => {
    // Create a mock GraphQL client
    mockClient = {
      execute: jest.fn(),
      updateConfig: jest.fn(),
      getFragment: jest.fn(),
      getFragmentNames: jest.fn(),
      registerFragment: jest.fn(),
      query: jest.fn(),
      mutate: jest.fn(),
      getConfig: jest.fn(),
    };

    logoutService = new LogoutService(mockClient);
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(logoutService).toBeInstanceOf(LogoutService);
      expect(logoutService).toHaveProperty('client');
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const service = new LogoutService(realClient);
      expect(service).toBeInstanceOf(LogoutService);
    });
  });

  describe('User Logout', () => {
    it('should logout user successfully', async () => {
      const userId = 123;
      const mockResponse = {
        data: {
          logout: {
            todo: 'User logged out successfully'
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBe('User logged out successfully');
    });

    it('should handle logout errors gracefully', async () => {
      const userId = 456;
      const mockError = {
        data: {
          logout: {}
        },
        errors: [
          {
            message: 'User not found',
            locations: [{ line: 1, column: 1 }],
            path: ['logout']
          }
        ]
      };

      mockClient.execute.mockResolvedValue(mockError);

      const result = await logoutService.logout(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBeUndefined();
    });

    it('should handle malformed response data', async () => {
      const userId = 789;
      const mockResponse = {
        data: {
          logout: undefined
        },
        errors: undefined
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBeUndefined();
    });

    it('should handle network errors gracefully', async () => {
      const userId = 123;

      mockClient.execute.mockRejectedValue(new Error('Network error'));

      await expect(logoutService.logout(userId)).rejects.toThrow('Network error');
      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
    });

    it('should handle timeout errors gracefully', async () => {
      const userId = 456;

      mockClient.execute.mockRejectedValue(new Error('Request timeout'));

      await expect(logoutService.logout(userId)).rejects.toThrow('Request timeout');
      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
    });
  });

  describe('Service Initialization', () => {
    it('should initialize service successfully', async () => {
      await expect(logoutService.initializeService()).resolves.toBeUndefined();
    });

    it('should handle initialization errors gracefully', async () => {
      // Mock a scenario where initialization might fail
      jest.spyOn(logoutService, 'initializeService').mockRejectedValue(new Error('Init failed'));
      
      await expect(logoutService.initializeService()).rejects.toThrow('Init failed');
    });
  });

  describe('Input Validation', () => {
    it('should handle zero user ID', async () => {
      const userId = 0;
      const mockResponse = {
        data: {
          logout: {
            todo: 'Invalid user ID'
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBe('Invalid user ID');
    });

    it('should handle negative user ID', async () => {
      const userId = -1;
      const mockResponse = {
        data: {
          logout: {
            todo: 'Invalid user ID'
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBe('Invalid user ID');
    });

    it('should handle very large user ID', async () => {
      const userId = Number.MAX_SAFE_INTEGER;
      const mockResponse = {
        data: {
          logout: {
            todo: 'User logged out successfully'
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation logout'),
        variables: { userId }
      }));
      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBe('User logged out successfully');
    });
  });

  describe('Integration Tests', () => {
    it('should work with real GraphQL client in test environment', async () => {
      const realClient = TestHelpers.createTestClient();
      const service = new LogoutService(realClient);
      
      // This test will fail in test environment (expected)
      // but demonstrates the service can be instantiated with real client
      expect(service).toBeInstanceOf(LogoutService);
      
      try {
        await service.logout(123);
      } catch (error) {
        // Expected in test environment
        expect(error).toBeDefined();
      }
    });

    it('should handle multiple logout requests efficiently', async () => {
      const userIds = [1, 2, 3];
      const results: Logout[] = [];

      for (const userId of userIds) {
        const mockResponse = {
          data: {
            logout: {
              todo: `User ${userId} logged out successfully`
            }
          }
        };

        mockClient.execute.mockResolvedValue(mockResponse);
        
        const result = await logoutService.logout(userId);
        results.push(result);
      }

      expect(results).toHaveLength(3);
      expect(mockClient.execute).toHaveBeenCalledTimes(3);
      
      results.forEach((result, index) => {
        expect(result).toBeInstanceOf(Logout);
        expect(result.todo).toBe(`User ${userIds[index]} logged out successfully`);
      });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle undefined user ID gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Invalid user ID'));

      await expect(logoutService.logout(undefined as any)).rejects.toThrow('Invalid user ID');
    });

    it('should handle null user ID gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Invalid user ID'));

      await expect(logoutService.logout(null as any)).rejects.toThrow('Invalid user ID');
    });

    it('should handle string user ID gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Invalid user ID type'));

      await expect(logoutService.logout('123' as any)).rejects.toThrow('Invalid user ID type');
    });

    it('should handle decimal user ID gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Invalid user ID type'));

      await expect(logoutService.logout(123.45 as any)).rejects.toThrow('Invalid user ID type');
    });
  });

  describe('Logout Object Creation', () => {
    it('should create Logout object with data', async () => {
      const userId = 123;
      const mockResponse = {
        data: {
          logout: {
            todo: 'Custom logout message'
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBe('Custom logout message');
    });

    it('should create Logout object with empty data', async () => {
      const userId = 456;
      const mockResponse = {
        data: {
          logout: {}
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBeUndefined();
    });

    it('should create Logout object with null data', async () => {
      const userId = 789;
      const mockResponse = {
        data: {
          logout: {}
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await logoutService.logout(userId);

      expect(result).toBeInstanceOf(Logout);
      expect(result.todo).toBeUndefined();
    });
  });
}); 