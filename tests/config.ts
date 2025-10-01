/**
 * Test configuration for Propeller V2 services
 */
export const testConfig = {
  // GraphQL endpoint
  GRAPHQL_ENDPOINT: 'https://api.staging.helice.cloud/v2/graphql',
  
  // API keys
  API_KEY: '8Fa6Gs0SckucGNGgWQrGRfpjNlcFxpzGcVd3ix9scnPvLfw8',
  ORDER_EDITOR_API_KEY: '8Fa6Gs0SckucGNGgWQrGRfpjNlcFxpzGcVd3ix9scnPvLfw8',
  
  // Timeout settings
  TIMEOUT: 30000,
  
  // Test data IDs
  BASE_CATEGORY_ID: 17,
  MENU_DEPTH: 3,
  ANONYMOUS_USER_ID: 14551,
  SITE_ID: 1,
  CONTACTS_ROOT_ID: 123,
  CUSTOMERS_ROOT_ID: 109,
  DEFAULT_LANGUAGE: 'NL',
  
  // Test product data
  TEST_PRODUCT: {
    name: 'Test Product',
    description: 'A test product for testing purposes',
    sku: 'TEST-PRODUCT-001',
    categoryId: 17,
    status: 'ACTIVE',
    hidden: 'N',
    orderable: 'Y',
    physical: 'Y',
  },
  
  // Test address data
  TEST_ADDRESS: {
    firstName: 'John',
    lastName: 'Doe',
    company: 'Test Company',
    address1: '123 Test Street',
    address2: 'Suite 100',
    city: 'Test City',
    state: 'Test State',
    zipCode: '12345',
    country: 'NL',
    phone: '+31-123-456-789',
    email: 'test@example.com',
  },
  
  // Test user data
  TEST_USER: {
    email: 'test@example.com',
    password: 'TestPassword123!',
    firstName: 'John',
    lastName: 'Doe',
    company: 'Test Company',
  },
  
  // Test cart data
  TEST_CART_ITEM: {
    productId: 1,
    quantity: 2,
    price: 29.99,
  },
  
  // Test order data
  TEST_ORDER: {
    customerId: 14551,
    items: [
      {
        productId: 1,
        quantity: 1,
        price: 29.99,
      }
    ],
    shippingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Test Street',
      city: 'Test City',
      state: 'Test State',
      zipCode: '12345',
      country: 'NL',
    },
    billingAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address1: '123 Test Street',
      city: 'Test City',
      state: 'Test State',
      zipCode: '12345',
      country: 'NL',
    },
  },
}; 