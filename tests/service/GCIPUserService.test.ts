import { GCIPUserService } from '../../src/service/GCIPUserService';
import { TestHelpers } from '../helpers/testHelpers';

describe('GCIPUserService', () => {
  let service: GCIPUserService;
  let mockClient: any;

  beforeEach(() => {
    mockClient = {
      execute: jest.fn(),
      updateConfig: jest.fn(),
      addFragment: jest.fn(),
      clearFragments: jest.fn(),
      getFragments: jest.fn(),
    } as any;
    service = new GCIPUserService(mockClient);
  });

  describe('getGCIPUser', () => {
    it('should retrieve GCIP user by ID', async () => {
      const userId = 1;
      const mockUserData = {
        id: userId,
        email: 'user@example.com',
        name: 'Test User',
        verified: true,
        customClaims: {},
        disabled: false,
      };

      const mockResponse = {
        data: {
          user: mockUserData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toEqual(mockUserData);
    });

    it('should handle errors when retrieving GCIP user', async () => {
      const userId = 1;
      const mockError = new Error('Failed to fetch user');

      mockClient.execute.mockRejectedValue(mockError);

      await expect(service.getGCIPUser(userId)).rejects.toThrow('Failed to fetch user');

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
    });

    it('should handle malformed response data', async () => {
      const userId = 1;
      const mockResponse = {
        data: {
          user: null
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toBeNull();
    });

    // Input Validation Tests
    it('should handle user ID of 0', async () => {
      const userId = 0;
      const mockUserData = {
        id: userId,
        email: 'user0@example.com',
        name: 'User Zero',
        verified: false,
        customClaims: {},
        disabled: false,
      };

      const mockResponse = {
        data: {
          user: mockUserData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toEqual(mockUserData);
    });

    it('should handle negative user ID', async () => {
      const userId = -1;
      const mockResponse = {
        data: {
          user: null
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toBeNull();
    });

    it('should handle very large user ID', async () => {
      const userId = 999999999;
      const mockUserData = {
        id: userId,
        email: 'biguser@example.com',
        name: 'Big User',
        verified: true,
        customClaims: {},
        disabled: false,
      };

      const mockResponse = {
        data: {
          user: mockUserData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toEqual(mockUserData);
    });

    // Multiple Request Tests
    it('should handle multiple user requests', async () => {
      const userIds = [1, 2, 3];
      const mockUserData = [
        { id: 1, email: 'user1@example.com', name: 'User 1', verified: true, customClaims: {}, disabled: false },
        { id: 2, email: 'user2@example.com', name: 'User 2', verified: false, customClaims: {}, disabled: true },
        { id: 3, email: 'user3@example.com', name: 'User 3', verified: true, customClaims: {}, disabled: false },
      ];

      mockClient.execute
        .mockResolvedValueOnce({ data: { user: mockUserData[0] } })
        .mockResolvedValueOnce({ data: { user: mockUserData[1] } })
        .mockResolvedValueOnce({ data: { user: mockUserData[2] } });

      const results: any[] = [];
      for (const userId of userIds) {
        const result = await service.getGCIPUser(userId);
        results.push(result);
      }

      expect(mockClient.execute).toHaveBeenCalledTimes(3);
      expect(mockClient.execute).toHaveBeenNthCalledWith(1, expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: 1 } }
      }));
      expect(mockClient.execute).toHaveBeenNthCalledWith(2, expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: 2 } }
      }));
      expect(mockClient.execute).toHaveBeenNthCalledWith(3, expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: 3 } }
      }));
      expect(results).toEqual(mockUserData);
    });

    // GCIP User Data Handling Tests
    it('should handle user with custom claims', async () => {
      const userId = 1;
      const mockUserData = {
        id: userId,
        email: 'admin@example.com',
        name: 'Admin User',
        verified: true,
        customClaims: {
          role: 'admin',
          permissions: ['read', 'write', 'delete'],
          department: 'IT'
        },
        disabled: false,
      };

      const mockResponse = {
        data: {
          user: mockUserData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toEqual(mockUserData);
      expect(result.customClaims).toEqual({
        role: 'admin',
        permissions: ['read', 'write', 'delete'],
        department: 'IT'
      });
    });

    it('should handle complex custom claims', async () => {
      const userId = 1;
      const mockUserData = {
        id: userId,
        email: 'complex@example.com',
        name: 'Complex User',
        verified: true,
        customClaims: {
          nested: {
            level1: {
              level2: 'deep value'
            }
          },
          array: [1, 2, 3],
          boolean: true,
          number: 42
        },
        disabled: false,
      };

      const mockResponse = {
        data: {
          user: mockUserData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toEqual(mockUserData);
      expect(result.customClaims.nested.level1.level2).toBe('deep value');
    });

    it('should handle disabled user status', async () => {
      const userId = 1;
      const mockUserData = {
        id: userId,
        email: 'disabled@example.com',
        name: 'Disabled User',
        verified: false,
        customClaims: {},
        disabled: true,
      };

      const mockResponse = {
        data: {
          user: mockUserData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toEqual(mockUserData);
      expect(result.disabled).toBe(true);
    });

    it('should handle unverified email status', async () => {
      const userId = 1;
      const mockUserData = {
        id: userId,
        email: 'unverified@example.com',
        name: 'Unverified User',
        verified: false,
        customClaims: {},
        disabled: false,
      };

      const mockResponse = {
        data: {
          user: mockUserData
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await service.getGCIPUser(userId);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('query user'),
        variables: { input: { id: userId } }
      }));
      expect(result).toEqual(mockUserData);
      expect(result.verified).toBe(false);
    });
  });
}); 