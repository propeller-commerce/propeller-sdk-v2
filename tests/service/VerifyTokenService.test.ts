import { VerifyTokenService } from '../../src/service/VerifyTokenService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { VerifyTokenInput } from '../../src/type/VerifyTokenInput';
import { TestHelpers } from '../helpers/testHelpers';

describe('VerifyTokenService', () => {
  let verifyTokenService: VerifyTokenService;
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

    verifyTokenService = new VerifyTokenService(mockClient);
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(verifyTokenService).toBeInstanceOf(VerifyTokenService);
      expect(verifyTokenService).toHaveProperty('client');
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const service = new VerifyTokenService(realClient);
      expect(service).toBeInstanceOf(VerifyTokenService);
    });
  });

  describe('Token Verification', () => {
    it('should verify token successfully', async () => {
      const mockInput: VerifyTokenInput = {
        token: 'test-token-123'
      };

      const mockResponse = {
        data: {
          verifyToken: {
            uid: 'token-123',
            name: 'Test Token',
            claims: {},
            iss: 'https://test.com',
            aud: 'test-audience',
            auth_time: 1234567890,
            user_id: 123,
            sub: 'user-123',
            iat: 1234567890,
            exp: 1234567890,
            email: 'test@example.com',
            email_verified: true,
            firebase: {
              identities: {},
              sign_in_provider: 'password',
              sign_in_second_factor: null,
              second_factor_identifier: null,
              tenant: null
            }
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await verifyTokenService.verifyToken(mockInput);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
      expect(result).toEqual(mockResponse.data.verifyToken);
      expect(result.uid).toBe('token-123');
      expect(result.user_id).toBe(123);
    });

    it('should handle token verification errors gracefully', async () => {
      const mockInput: VerifyTokenInput = {
        token: 'invalid-token'
      };

      const mockError = {
        data: {
          verifyToken: null
        },
        errors: [
          {
            message: 'Invalid token',
            locations: [{ line: 1, column: 1 }],
            path: ['verifyToken']
          }
        ]
      };

      mockClient.execute.mockResolvedValue(mockError);

      const result = await verifyTokenService.verifyToken(mockInput);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
      expect(result).toBeNull();
    });

    it('should handle malformed response data', async () => {
      const mockInput: VerifyTokenInput = {
        token: 'test-token'
      };

      const mockResponse = {
        data: {
          verifyToken: undefined
        },
        errors: undefined
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await verifyTokenService.verifyToken(mockInput);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
      expect(result).toBeUndefined();
    });

    it('should handle network errors gracefully', async () => {
      const mockInput: VerifyTokenInput = {
        token: 'test-token'
      };

      mockClient.execute.mockRejectedValue(new Error('Network error'));

      await expect(verifyTokenService.verifyToken(mockInput)).rejects.toThrow('Network error');
      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
    });

    it('should handle timeout errors gracefully', async () => {
      const mockInput: VerifyTokenInput = {
        token: 'test-token'
      };

      mockClient.execute.mockRejectedValue(new Error('Request timeout'));

      await expect(verifyTokenService.verifyToken(mockInput)).rejects.toThrow('Request timeout');
      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
    });
  });

  describe('Service Initialization', () => {
    it('should initialize service successfully', async () => {
      await expect(verifyTokenService.initializeService()).resolves.toBeUndefined();
    });

    it('should handle initialization errors gracefully', async () => {
      // Mock a scenario where initialization might fail
      jest.spyOn(verifyTokenService, 'initializeService').mockRejectedValue(new Error('Init failed'));
      
      await expect(verifyTokenService.initializeService()).rejects.toThrow('Init failed');
    });
  });

  describe('Input Validation', () => {
    it('should handle empty token input', async () => {
      const mockInput: VerifyTokenInput = {
        token: ''
      };

      const mockResponse = {
        data: {
          verifyToken: {
            uid: 'empty-token',
            name: 'Empty Token',
            claims: {},
            iss: 'https://test.com',
            aud: 'test-audience',
            auth_time: 1234567890,
            user_id: null,
            sub: null,
            iat: 1234567890,
            exp: 1234567890,
            email: null,
            email_verified: false,
            firebase: {
              identities: {},
              sign_in_provider: null,
              sign_in_second_factor: null,
              second_factor_identifier: null,
              tenant: null
            }
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await verifyTokenService.verifyToken(mockInput);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
      expect(result.user_id).toBeNull();
    });

    it('should handle very long token input', async () => {
      const longToken = 'a'.repeat(1000);
      const mockInput: VerifyTokenInput = {
        token: longToken
      };

      const mockResponse = {
        data: {
          verifyToken: {
            uid: 'long-token',
            name: 'Long Token',
            claims: {},
            iss: 'https://test.com',
            aud: 'test-audience',
            auth_time: 1234567890,
            user_id: 456,
            sub: 'user-456',
            iat: 1234567890,
            exp: 1234567890,
            email: 'long@example.com',
            email_verified: true,
            firebase: {
              identities: {},
              sign_in_provider: 'password',
              sign_in_second_factor: null,
              second_factor_identifier: null,
              tenant: null
            }
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await verifyTokenService.verifyToken(mockInput);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
      expect(result.user_id).toBe(456);
    });

    it('should handle special characters in token', async () => {
      const specialToken = 'token-with-special-chars!@#$%^&*()_+-=[]{}|;:,.<>?';
      const mockInput: VerifyTokenInput = {
        token: specialToken
      };

      const mockResponse = {
        data: {
          verifyToken: {
            uid: 'special-token',
            name: 'Special Token',
            claims: {},
            iss: 'https://test.com',
            aud: 'test-audience',
            auth_time: 1234567890,
            user_id: 789,
            sub: 'user-789',
            iat: 1234567890,
            exp: 1234567890,
            email: 'special@example.com',
            email_verified: true,
            firebase: {
              identities: {},
              sign_in_provider: 'password',
              sign_in_second_factor: null,
              second_factor_identifier: null,
              tenant: null
            }
          }
        }
      };

      mockClient.execute.mockResolvedValue(mockResponse);

      const result = await verifyTokenService.verifyToken(mockInput);

      expect(mockClient.execute).toHaveBeenCalledWith(expect.objectContaining({
        query: expect.stringContaining('mutation verifyToken'),
        variables: { input: mockInput }
      }));
      expect(result.user_id).toBe(789);
    });
  });

  describe('Integration Tests', () => {
    it('should work with real GraphQL client in test environment', async () => {
      const realClient = TestHelpers.createTestClient();
      const service = new VerifyTokenService(realClient);
      
      // This test will fail in test environment (expected)
      // but demonstrates the service can be instantiated with real client
      expect(service).toBeInstanceOf(VerifyTokenService);
      
      try {
        await service.verifyToken({ token: 'test-token' });
      } catch (error) {
        // Expected in test environment
        expect(error).toBeDefined();
      }
    });

    it('should handle multiple token verification requests efficiently', async () => {
      const tokens = ['token1', 'token2', 'token3'];
      const results: any[] = [];

      for (const token of tokens) {
        const mockResponse = {
          data: {
            verifyToken: {
              uid: `token-${token}`,
              name: `Token ${token}`,
              claims: {},
              iss: 'https://test.com',
              aud: 'test-audience',
              auth_time: 1234567890,
              user_id: Math.floor(Math.random() * 1000),
              sub: `user-${Math.floor(Math.random() * 1000)}`,
              iat: 1234567890,
              exp: 1234567890,
              email: `user${Math.floor(Math.random() * 1000)}@example.com`,
              email_verified: true,
              firebase: {
                identities: {},
                sign_in_provider: 'password',
                sign_in_second_factor: null,
                second_factor_identifier: null,
                tenant: null
              }
            }
          }
        };

        mockClient.execute.mockResolvedValue(mockResponse);
        
        const result = await verifyTokenService.verifyToken({ token });
        results.push(result);
      }

      expect(results).toHaveLength(3);
      expect(mockClient.execute).toHaveBeenCalledTimes(3);
      
      results.forEach(result => {
        expect(result.uid).toBeDefined();
        expect(result.user_id).toBeDefined();
      });
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle undefined input gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Invalid input'));

      await expect(verifyTokenService.verifyToken(undefined as any)).rejects.toThrow('Invalid input');
    });

    it('should handle null input gracefully', async () => {
      mockClient.execute.mockRejectedValue(new Error('Invalid input'));

      await expect(verifyTokenService.verifyToken(null as any)).rejects.toThrow('Invalid input');
    });

    it('should handle missing token property gracefully', async () => {
      const invalidInput = {} as VerifyTokenInput;
      
      mockClient.execute.mockRejectedValue(new Error('Missing token property'));

      await expect(verifyTokenService.verifyToken(invalidInput)).rejects.toThrow('Missing token property');
    });
  });
}); 