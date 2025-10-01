# Propeller V2 Test Suite

This directory contains comprehensive tests for the Propeller V2 GraphQL client package. The tests cover all major services, their methods, and various edge cases to ensure reliability and correctness.

## Test Structure

```
tests/
├── README.md                 # This file
├── config.ts                 # Test configuration and test data
├── setup.ts                  # Jest setup and global test utilities
├── helpers/
│   └── testHelpers.ts       # Common test utilities and helpers
├── client/
│   └── GraphQLClient.test.ts # Tests for the GraphQL client
├── service/
│   ├── BaseService.test.ts   # Tests for the base service class
│   ├── ProductService.test.ts # Tests for product management
│   ├── AddressService.test.ts # Tests for address management
│   ├── CartService.test.ts   # Tests for cart operations
│   ├── OrderService.test.ts  # Tests for order management
│   └── UserService.test.ts   # Tests for user management
```

## Running Tests

### Prerequisites

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project:
   ```bash
   npm run build
   ```

### Test Commands

- **Run all tests:**
  ```bash
  npm test
  ```

- **Run tests in watch mode:**
  ```bash
  npm run test:watch
  ```

- **Run tests with coverage:**
  ```bash
  npm run test:coverage
  ```

- **Run tests in CI mode:**
  ```bash
  npm run test:ci
  ```

## Test Configuration

The tests use the following configuration from `config.ts`:

- **GraphQL Endpoint:** `https://api.staging.helice.cloud/v2/graphql`
- **API Keys:** Test API keys for both standard and order editor operations
- **Test Data IDs:** Predefined IDs for testing various scenarios
- **Test Data:** Sample product, address, user, cart, and order data

## Test Coverage

### GraphQLClient Tests
- ✅ Constructor and configuration
- ✅ Fragment management
- ✅ API key selection for different operations
- ✅ Query and mutation execution
- ✅ Error handling and timeout management
- ✅ Fragment resolution
- ✅ Utility functions

### BaseService Tests
- ✅ Constructor and initialization
- ✅ Query and mutation execution
- ✅ Fragment handling
- ✅ Error handling
- ✅ Performance and caching
- ✅ Variable handling
- ✅ Integration with GraphQLClient

### Service Tests
Each service is thoroughly tested for:

- ✅ **Constructor and Initialization**
- ✅ **CRUD Operations** (Create, Read, Update, Delete)
- ✅ **Search and Filtering**
- ✅ **Error Handling**
- ✅ **Edge Cases**
- ✅ **Integration Scenarios**

#### ProductService
- Product creation, retrieval, updates, and deletion
- Product search and filtering
- Product status management
- Product media management
- Product attributes and pricing

#### AddressService
- Company and customer address management
- Address validation and suggestions
- Address type handling
- International address support

#### CartService
- Cart creation and management
- Cart item operations
- Cart status management
- Cart calculations and discounts
- Cart merging and splitting

#### OrderService
- Order creation and management
- Order status transitions
- Order item management
- Order calculations and discounts
- Order search and filtering

#### UserService
- User authentication and registration
- User profile management
- Password reset functionality
- User address management
- Contact and customer handling

## Test Utilities

### TestHelpers Class
Provides common utilities for:
- Creating test GraphQL clients
- Generating mock responses and errors
- Creating test data with overrides
- Validating service methods and responses
- Waiting for async operations

### Mock Data
Comprehensive test data including:
- Sample products with various attributes
- Test addresses for different countries
- User profiles with different roles
- Cart and order scenarios
- Error conditions and edge cases

## Testing Patterns

### Mocking Strategy
- **GraphQL Client:** Mocked to test service logic without network calls
- **Responses:** Mocked using realistic data structures
- **Errors:** Tested with various error conditions
- **Network Issues:** Simulated network failures and timeouts

### Assertion Patterns
- **Service Initialization:** Verify proper instantiation
- **Method Existence:** Check that all expected methods are available
- **Response Validation:** Verify correct data structures and types
- **Error Handling:** Ensure proper error propagation
- **Integration:** Test with real GraphQL client instances

### Test Organization
- **Describe Blocks:** Group related functionality
- **BeforeEach/AfterEach:** Setup and cleanup for each test
- **Mock Management:** Proper mock creation and restoration
- **Async Testing:** Proper handling of promises and async operations

## Best Practices

1. **Isolation:** Each test is independent and doesn't affect others
2. **Mocking:** Use mocks to avoid external dependencies
3. **Coverage:** Aim for comprehensive coverage of all service methods
4. **Real Data:** Use realistic test data that matches production scenarios
5. **Error Cases:** Test both success and failure scenarios
6. **Performance:** Test caching and performance optimizations
7. **Integration:** Include integration tests with real clients

## Troubleshooting

### Common Issues

1. **Type Errors:** Ensure all imported types exist in the source
2. **Mock Failures:** Check that mocks are properly configured
3. **Async Issues:** Use proper async/await patterns
4. **Import Errors:** Verify correct import paths

### Debug Mode

Run tests with verbose output:
```bash
npm test -- --verbose
```

### Coverage Reports

After running coverage tests, view the HTML report:
```bash
open coverage/lcov-report/index.html
```

## Contributing

When adding new tests:

1. Follow the existing test structure and patterns
2. Use the TestHelpers utilities for common operations
3. Include both success and error scenarios
4. Test edge cases and boundary conditions
5. Ensure proper cleanup in afterEach blocks
6. Add comprehensive JSDoc comments

## Support

For issues with the test suite:
1. Check the test configuration in `config.ts`
2. Verify all dependencies are installed
3. Ensure the project builds successfully
4. Check Jest configuration in `jest.config.js` 