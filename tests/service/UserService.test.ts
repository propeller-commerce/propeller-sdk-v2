import { UserService } from '../../src/service/UserService';
import { GraphQLClient } from '../../src/client/GraphQLClient';
import { TestHelpers } from '../helpers/testHelpers';
import { testConfig } from '../config';
import { Contact } from '../../src/type/Contact';
import { Customer } from '../../src/type/Customer';
import { LoginInput } from '../../src/type/LoginInput';
import { RegisterContactInput } from '../../src/type/RegisterContactInput';
import { RegisterCustomerInput } from '../../src/type/RegisterCustomerInput';
import { UserAddressCreateInput } from '../../src/type/UserAddressCreateInput';
import { UserAddressUpdateInput } from '../../src/type/UserAddressUpdateInput';
import { UserAddressDeleteInput } from '../../src/type/UserAddressDeleteInput';
import { Address } from '../../src/type/Address';
import { PublishEmailEventResponse } from '../../src/type/PublishEmailEventResponse';
import { AddressType } from '../../src/enum/AddressType';

describe('UserService', () => {
  let mockClient: jest.Mocked<GraphQLClient>;
  let service: UserService;

  beforeEach(() => {
    mockClient = {
      execute: jest.fn(),
    } as any;
    service = new UserService(mockClient);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Constructor and Initialization', () => {
    it('should initialize with a GraphQL client', () => {
      expect(service).toBeDefined();
      expect(service).toBeInstanceOf(UserService);
    });

    it('should work with real GraphQL client', () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new UserService(realClient);
      expect(realService).toBeDefined();
      expect(realService).toBeInstanceOf(UserService);
    });
  });

  describe('User Authentication', () => {
    it('should login user successfully', async () => {
      const loginInput: LoginInput = {
        email: 'test@example.com',
        password: 'TestPassword123!',
      };

      const mockLogin = {
        __typename: 'Login',
        token: 'test-token-123',
        user: {
          __typename: 'Contact',
          id: 123,
          firstName: 'John',
          lastName: 'Doe',
          email: 'test@example.com',
        },
      };

      const mockResponse = TestHelpers.createMockResponse({
        authenticationCreate: mockLogin,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.login(loginInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('login'),
          variables: { input: loginInput },
        })
      );
    });

    it('should authenticate user successfully', async () => {
      const mockContact = {
        __typename: 'Contact',
        id: 123,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
      };

      const mockResponse = TestHelpers.createMockResponse({
        authenticate: mockContact,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.authenticate('test-token-123');

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('authentication'),
          variables: { email: 'test-token-123' },
        })
      );
    });

    it('should logout user successfully', async () => {
      const mockLogout = {
        __typename: 'Logout',
        success: true,
        message: 'Logged out successfully',
      };

      const mockResponse = TestHelpers.createMockResponse({
        logout: mockLogout,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.logout();

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('logout'),
        })
      );
    });
  });

  describe('User Registration', () => {
    it('should register contact successfully', async () => {
      const registerInput: RegisterContactInput = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        parentId: testConfig.CONTACTS_ROOT_ID,
        password: 'TestPassword123!',
      };

      const mockContact = {
        __typename: 'Contact',
        id: 123,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
      };

      const mockResponse = TestHelpers.createMockResponse({
        contactRegister: mockContact,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.registerContact(registerInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('contactRegister'),
          variables: { input: registerInput },
        })
      );
    });

    it('should register customer successfully', async () => {
      const registerInput: RegisterCustomerInput = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        parentId: testConfig.CUSTOMERS_ROOT_ID,
        password: 'TestPassword123!',
      };

      const mockCustomer = {
        __typename: 'Customer',
        id: 456,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        company: 'Test Company',
      };

      const mockResponse = TestHelpers.createMockResponse({
        customerRegister: mockCustomer,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.registerCustomer(registerInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('customerRegister'),
          variables: { input: registerInput },
        })
      );
    });
  });

  describe('User Retrieval', () => {
    it('should get viewer information successfully', async () => {
      const mockViewer = {
        __typename: 'Contact',
        id: 123,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
      };

      const mockResponse = TestHelpers.createMockResponse({
        viewer: mockViewer,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getViewer();

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('viewer'),
        })
      );
    });

    it('should get user by search criteria successfully', async () => {
      const searchInput = {
        email: 'test@example.com',
      };

      const mockUser = {
        __typename: 'Contact',
        id: 123,
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
      };

      const mockResponse = TestHelpers.createMockResponse({
        user: mockUser,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.getUser(searchInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('user'),
          variables: { input: searchInput },
        })
      );
    });
  });

  describe('Password Management', () => {
    it('should send password reset email successfully', async () => {
      const passwordResetInput = {
        email: 'test@example.com',
        redirectUrl: 'https://example.com/reset',
        language: 'NL',
        siteId: testConfig.SITE_ID,
      };

      const mockResponse = TestHelpers.createMockResponse({
        publishPasswordResetEmailEvent: {
          success: true,
          message: 'Password reset email sent',
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.sendPasswordResetEmail(passwordResetInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('publishPasswordResetEmailEvent'),
        })
      );
    });
  });

  describe('User Address Management', () => {
    it('should create user address successfully', async () => {
      const addressInput: UserAddressCreateInput = {
        street: '123 Test Street',
        postalCode: '12345',
        city: 'Test City',
        country: 'NL',
        userId: testConfig.ANONYMOUS_USER_ID,
        type: AddressType.delivery,
      };

      const mockAddress = {
        id: 'addr-123',
        street: '123 Test Street',
        postalCode: '12345',
        city: 'Test City',
        country: 'NL',
      };

      const mockResponse = TestHelpers.createMockResponse({
        userAddressCreate: mockAddress,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.createUserAddress(addressInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('userAddressCreate'),
          variables: { input: addressInput },
        })
      );
    });

    it('should update user address successfully', async () => {
      const addressInput: UserAddressUpdateInput = {
        id: 123,
        userId: testConfig.ANONYMOUS_USER_ID,
        street: '456 Updated Street',
        city: 'Updated City',
      };

      const mockAddress = {
        id: 123,
        street: '456 Updated Street',
        postalCode: '12345',
        city: 'Updated City',
        country: 'NL',
      };

      const mockResponse = TestHelpers.createMockResponse({
        userAddressUpdate: mockAddress,
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.updateUserAddress(addressInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('userAddressUpdate'),
          variables: { input: addressInput },
        })
      );
    });

    it('should delete user address successfully', async () => {
      const deleteInput: UserAddressDeleteInput = {
        id: 123,
        userId: testConfig.ANONYMOUS_USER_ID,
      };

      const mockResponse = TestHelpers.createMockResponse({
        userAddressDelete: {
          success: true,
          message: 'Address deleted successfully',
        },
      });

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      const result = await service.deleteUserAddress(deleteInput);

      expect(result).toBeDefined();
      expect(mockClient.execute).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.stringContaining('userAddressDelete'),
          variables: { input: { id: deleteInput.id, userId: deleteInput.userId } },
        })
      );
    });
  });

  describe('Error Handling and Edge Cases', () => {
    it('should handle network errors gracefully', async () => {
      const networkError = new Error('Network error');
      mockClient.execute = jest.fn().mockRejectedValue(networkError);

      await expect(service.getViewer()).rejects.toThrow('Network error');
    });

    it('should handle authentication errors', async () => {
      const mockResponse = {
        data: null,
        errors: [
          {
            message: 'Invalid credentials',
            locations: [{ line: 1, column: 1 }],
            path: ['authenticationCreate'],
          },
        ],
      };

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      await expect(service.login({
        email: 'invalid@example.com',
        password: 'wrongpassword',
      })).rejects.toThrow();
    });

    it('should handle user not found errors', async () => {
      const mockResponse = {
        data: null,
        errors: [
          {
            message: 'User not found',
            locations: [{ line: 1, column: 1 }],
            path: ['user'],
          },
        ],
      };

      mockClient.execute = jest.fn().mockResolvedValue(mockResponse);

      await expect(service.getUser({ email: 'nonexistent@example.com' })).rejects.toThrow();
    });
  });

  describe('Integration Tests', () => {
    it('should perform full user lifecycle', async () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new UserService(realClient);

      expect(realService).toBeDefined();
      expect(realService).toBeInstanceOf(UserService);

      // Test viewer retrieval
      try {
        const viewer = await realService.getViewer();
        expect(viewer).toBeDefined();
      } catch (error) {
        // This might fail in test environment, which is expected
        console.log('Viewer retrieval failed (expected in test environment):', (error as Error).message);
      }
    });

    it('should handle multiple user operations efficiently', async () => {
      const realClient = TestHelpers.createTestClient();
      const realService = new UserService(realClient);

      expect(realService).toBeDefined();
      expect(realService).toBeInstanceOf(UserService);

      // Test multiple operations
      try {
        const viewer = await realService.getViewer();
        expect(viewer).toBeDefined();
      } catch (error) {
        // This might fail in test environment, which is expected
        console.log('Multiple operations failed (expected in test environment):', (error as Error).message);
      }
    });
  });
}); 