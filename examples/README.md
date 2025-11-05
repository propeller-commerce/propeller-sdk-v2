# Custom GraphQL Operations - Examples

This directory contains examples demonstrating how to use custom GraphQL operations with the Propeller SDK.

## Directory Structure

```
examples/
├── README.md                          # This file
├── custom-graphql-example.ts          # TypeScript examples
└── graphql/                           # Sample GraphQL files
    ├── fragments/
    │   ├── ProductFields.graphql      # Basic product fragment
    │   └── DetailedProductFields.graphql  # Extended product fragment
    ├── queries/
    │   ├── getProducts.graphql        # List products
    │   ├── getProductsWithDetails.graphql  # Products with full details
    │   └── searchProducts.graphql     # Product search
    └── mutations/
        ├── createOrder.graphql        # Create new order
        └── updateProduct.graphql      # Update product
```

## Quick Start

### 1. Install the SDK

```bash
npm install @propeller/sdk
```

### 2. Create Your GraphQL Directory Structure

In your project root, create:

```bash
mkdir -p graphql/fragments graphql/queries graphql/mutations
```

### 3. Add Custom GraphQL Files

Copy the sample files from `examples/graphql/` or create your own:

```bash
# Copy sample files (if using this repo)
cp -r examples/graphql/* ./graphql/
```

Or create your own `graphql/queries/getProducts.graphql`:

```graphql
query GetProducts($limit: Int) {
  products(limit: $limit) {
    id
    name
    price
  }
}
```

### 4. Initialize the Client

```typescript
import { initializeClient } from '@propeller/sdk';

initializeClient({
  endpoint: 'https://api.propeller.com/graphql',
  securityMode: 'proxy',
  customFragmentsPath: './graphql/fragments',
  customQueriesPath: './graphql/queries',
  customMutationsPath: './graphql/mutations'
});
```

### 5. Execute Operations

```typescript
import { getClient } from '@propeller/sdk';

const client = getClient();

// Execute by name
const products = await client.queryByName('getProducts', { limit: 10 });
console.log(products);
```

## Running the Examples

### Prerequisites

```bash
npm install
npm install chokidar --save-dev  # Optional, for hot reload example
```

### Run All Examples

```bash
# Compile TypeScript
npx tsc examples/custom-graphql-example.ts --outDir ./dist

# Run
node dist/examples/custom-graphql-example.js
```

### Run Individual Examples

Import and run specific examples:

```typescript
import { example2_QueryByName } from './examples/custom-graphql-example';

// Run specific example
await example2_QueryByName();
```

## Example Overview

### Example 1: Basic Configuration
Shows how to initialize the client with custom GraphQL paths.

### Example 2: Query by Name
Execute a registered query using its filename as the operation name.

### Example 3: Mutation by Name
Execute a registered mutation by name.

### Example 4: Using Fragments
Demonstrates automatic fragment resolution in queries.

### Example 5: Manual Registration
Register operations at runtime without files.

### Example 6: Inspect Operations
List all available queries, mutations, and fragments.

### Example 7: Reload Operations
Hot-reload operations when files change.

### Example 8: Environment-Specific Configuration
Configure different paths for different environments.

### Example 9: Error Handling
Handle missing operations and GraphQL errors gracefully.

### Example 10: Type-Safe Queries
Use TypeScript interfaces for type-safe results.

### Example 11: Combined Approach
Mix custom registered queries with inline queries.

### Example 12: Hot Reload in Development
Watch GraphQL files and auto-reload on changes.

## Sample GraphQL Files

### Fragments

#### `ProductFields.graphql`
Basic product information fragment.

```graphql
fragment ProductFields on Product {
  id
  name
  sku
  price
}
```

#### `DetailedProductFields.graphql`
Extended product fragment with inventory and categories.

```graphql
fragment DetailedProductFields on Product {
  ...ProductFields
  inventory { quantity status }
  category { id name }
}
```

### Queries

#### `getProducts.graphql`
Retrieve a list of products.

```graphql
query GetProducts($limit: Int, $offset: Int) {
  products(limit: $limit, offset: $offset) {
    ...ProductFields
  }
}
```

#### `searchProducts.graphql`
Search for products by keyword.

```graphql
query SearchProducts($query: String!, $limit: Int) {
  searchProducts(query: $query, limit: $limit) {
    ...ProductFields
  }
}
```

### Mutations

#### `createOrder.graphql`
Create a new order.

```graphql
mutation CreateOrder($input: OrderInput!) {
  createOrder(input: $input) {
    id
    orderNumber
    status
  }
}
```

## Testing Your Custom Operations

### Test Individual Operations

```typescript
import { getClient } from '@propeller/sdk';

async function testQuery() {
  const client = getClient();
  
  // List available operations
  console.log('Available queries:', client.getQueryNames());
  
  // Test a query
  try {
    const result = await client.queryByName('getProducts', { limit: 5 });
    console.log('Success:', result);
  } catch (error) {
    console.error('Failed:', error.message);
  }
}

testQuery();
```

### Validate GraphQL Syntax

You can use GraphQL CLI tools to validate your `.graphql` files:

```bash
npm install -g graphql-cli
graphql validate --schema schema.json --query graphql/**/*.graphql
```

## Best Practices

1. **Organize by Feature**: Group related queries/mutations in subdirectories
2. **Use Descriptive Names**: Name files clearly (e.g., `getProductById.graphql`)
3. **Document Operations**: Add comments explaining parameters and usage
4. **Reuse Fragments**: Create reusable fragments for common field sets
5. **Version Control**: Commit your `.graphql` files to version control
6. **Environment-Specific**: Use different directories for dev/staging/prod if needed

## Troubleshooting

### "Query not found" Error

1. Check that the file exists in your `customQueriesPath`
2. Verify the file has a `.graphql` or `.gql` extension
3. Ensure the filename matches the operation name you're calling

```typescript
// If you have: ./graphql/queries/getProducts.graphql
// Call it as:
await client.queryByName('getProducts');  // ✅
await client.queryByName('GetProducts');  // ❌ Case-sensitive
```

### Fragments Not Resolving

1. Check that fragments are in the `customFragmentsPath`
2. Verify fragment names match the spread syntax
3. List loaded fragments: `client.getFragmentNames()`

### Path Issues

```typescript
// Use absolute paths if relative paths don't work
import path from 'path';

const customPath = path.resolve(__dirname, 'graphql/queries');
initializeClient({
  endpoint: '...',
  customQueriesPath: customPath
});
```

## Additional Resources

- [Full Documentation](../CUSTOM_GRAPHQL.md)
- [GraphQL Client API Reference](../src/client/GraphQLClient.ts)
- [Main SDK Documentation](../README.md)

## Contributing

To add more examples:

1. Create a new example function in `custom-graphql-example.ts`
2. Add corresponding GraphQL files in `examples/graphql/`
3. Document the example in this README
4. Submit a pull request

## Support

For questions or issues:
- Open an issue on GitHub
- Check the [main documentation](../CUSTOM_GRAPHQL.md)
- Review the [API reference](../src/client/GraphQLClient.ts)

## License

See the main SDK LICENSE file.
