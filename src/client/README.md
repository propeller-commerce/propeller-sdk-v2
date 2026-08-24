# GraphQL Client

A comprehensive GraphQL client for the Propeller eCommerce Platform with automatic fragment resolution and API key management.

## Features

- **TypeScript Support**: Full type safety with generated types
- **Fragment Resolution**: Automatic resolution of GraphQL fragments
- **API Key Management**: Intelligent routing for different API keys
- **Error Handling**: Comprehensive error handling and validation
- **Timeout Support**: Configurable request timeouts
- **Singleton Pattern**: Default client instance for application-wide use

## Quick Start

### 1. Initialize the Client

```typescript
import { initializeClient } from './client';

// Initialize with your API configuration
initializeClient({
  endpoint: 'https://api.propeller.com/graphql',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'your-order-editor-key',
  timeout: 30000
});
```

### 2. Execute Queries

```typescript
import { getClient } from './client';

const client = getClient();

// Execute a query
const products = await client.query(`
  query GetProducts($limit: Int) {
    products(limit: $limit) {
      data {
        id
        name
        price
      }
    }
  }
`, { limit: 10 });
```

### 3. Execute Mutations

```typescript
// Execute a mutation
const newProduct = await client.mutate(`
  mutation CreateProduct($input: ProductCreateInput!) {
    productCreate(input: $input) {
      id
      name
      price
    }
  }
`, {
  input: {
    name: "New Product",
    price: 99.99
  }
});
```

## API Key Routing

The client automatically uses the appropriate API key based on the operation:

### Order Editor API Key
These mutations automatically use the `orderEditorApiKey`:
- `orderSetStatus`
- `passwordResetLink` 
- `triggerQuoteSendRequest`
- `triggerOrderSendConfirm`

### Standard API Key
All other operations use the standard `apiKey`.

## Fragment Support

### Manual Fragment Registration

```typescript
import { getClient } from './client';

const client = getClient();

// Register a fragment
client.registerFragment('ProductBasic', `
  fragment ProductBasic on Product {
    id
    name
    price
    sku
  }
`);

// Use the fragment in queries
const products = await client.query(`
  query GetProducts {
    products {
      data {
        ...ProductBasic
      }
    }
  }
`);
```

## Error Handling

```typescript
import { getClient } from './client';

const client = getClient();

try {
  const result = await client.query(`
    query InvalidQuery {
      nonExistentField
    }
  `);
} catch (error) {
  console.error('GraphQL Error:', error.message);
  // Handle the error appropriately
}
```

## Configuration

### GraphQLClientConfig Interface

```typescript
interface GraphQLClientConfig {
  /** API endpoint URL */
  endpoint: string;
  /** Standard API key */
  apiKey?: string;
  /** Order Editor API key for specific mutations */
  orderEditorApiKey?: string;
  /** Additional headers */
  headers?: Record<string, string>;
  /** Request timeout in milliseconds */
  timeout?: number;
}
```

### Environment Variables

You can use environment variables for configuration:

```typescript
import { initializeClient } from './client';

initializeClient({
  endpoint: process.env.GRAPHQL_ENDPOINT || 'https://api.propeller.com/graphql',
  apiKey: process.env.API_KEY,
  orderEditorApiKey: process.env.ORDER_EDITOR_API_KEY,
  timeout: parseInt(process.env.REQUEST_TIMEOUT || '30000')
});
```

## Advanced Usage

### Custom Headers

```typescript
initializeClient({
  endpoint: 'https://api.propeller.com/graphql',
  apiKey: 'your-api-key',
  headers: {
    'X-Custom-Header': 'value',
    'User-Agent': 'MyApp/1.0'
  }
});
```

### Direct Client Creation

```typescript
import { createGraphQLClient } from './client';

const customClient = createGraphQLClient({
  endpoint: 'https://different-api.com/graphql',
  apiKey: 'different-key'
});

const result = await customClient.query('{ viewer { id } }');
```

### Configuration Updates

```typescript
import { getClient } from './client';

const client = getClient();

// Update configuration at runtime
client.updateConfig({
  timeout: 60000,
  headers: {
    'X-New-Header': 'value'
  }
});
```

## TypeScript Integration

The client works seamlessly with generated TypeScript types:

```typescript
import { getClient } from './client';
import { Product, ProductsResponse } from '../type';

const client = getClient();

const response = await client.query<ProductsResponse>(`
  query GetProducts {
    products {
      data {
        id
        name
        price
      }
      pagination {
        total
        page
        offset
      }
    }
  }
`);

// response.data is fully typed as ProductsResponse
const products: Product[] = response.products.data;
``` 