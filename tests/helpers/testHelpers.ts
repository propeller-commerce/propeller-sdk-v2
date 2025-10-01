import { GraphQLClient } from '../../src/client/GraphQLClient';
import { testConfig } from '../config';

/**
 * Test helper utilities for Propeller V2 services
 */
export class TestHelpers {
  /**
   * Create a test GraphQL client with test configuration
   */
  static createTestClient(): GraphQLClient {
    return new GraphQLClient({
      endpoint: testConfig.GRAPHQL_ENDPOINT,
      apiKey: testConfig.API_KEY,
      orderEditorApiKey: testConfig.ORDER_EDITOR_API_KEY,
      timeout: testConfig.TIMEOUT,
    });
  }

  /**
   * Create a mock GraphQL response
   */
  static createMockResponse<T>(data: T) {
    return {
      data,
      errors: undefined,
      extensions: undefined,
    };
  }

  /**
   * Create a mock GraphQL error
   */
  static createMockError(message: string, path?: string[]) {
    return {
      message,
      locations: [{ line: 1, column: 1 }],
      path,
    };
  }

  /**
   * Wait for a specified number of milliseconds
   */
  static wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Generate a unique test ID
   */
  static generateTestId(): string {
    return `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Create test product data
   */
  static createTestProductData(overrides: Partial<typeof testConfig.TEST_PRODUCT> = {}) {
    return {
      ...testConfig.TEST_PRODUCT,
      ...overrides,
      sku: overrides.sku || `TEST-${this.generateTestId()}`,
    };
  }

  /**
   * Create test address data
   */
  static createTestAddressData(overrides: Partial<typeof testConfig.TEST_ADDRESS> = {}) {
    return {
      ...testConfig.TEST_ADDRESS,
      ...overrides,
    };
  }

  /**
   * Create test user data
   */
  static createTestUserData(overrides: Partial<typeof testConfig.TEST_USER> = {}) {
    return {
      ...testConfig.TEST_USER,
      ...overrides,
      email: overrides.email || `test-${this.generateTestId()}@example.com`,
    };
  }

  /**
   * Create test cart data
   */
  static createTestCartData(overrides: Partial<typeof testConfig.TEST_CART_ITEM> = {}) {
    return {
      ...testConfig.TEST_CART_ITEM,
      ...overrides,
    };
  }

  /**
   * Create test order data
   */
  static createTestOrderData(overrides: Partial<typeof testConfig.TEST_ORDER> = {}) {
    return {
      ...testConfig.TEST_ORDER,
      ...overrides,
    };
  }

  /**
   * Validate that a service method exists and is callable
   */
  static validateServiceMethod(service: any, methodName: string): boolean {
    return service && typeof service[methodName] === 'function';
  }

  /**
   * Validate that a GraphQL response has the expected structure
   */
  static validateGraphQLResponse(response: any): boolean {
    return response && 
           response.hasOwnProperty('data') && 
           response.hasOwnProperty('errors') && 
           response.hasOwnProperty('extensions');
  }

  /**
   * Validate that a GraphQL response has no errors
   */
  static validateNoGraphQLErrors(response: any): boolean {
    return this.validateGraphQLResponse(response) && !response.errors;
  }

  /**
   * Validate that a GraphQL response has data
   */
  static validateGraphQLData(response: any): boolean {
    return this.validateGraphQLResponse(response) && response.data && response.data !== null;
  }
} 