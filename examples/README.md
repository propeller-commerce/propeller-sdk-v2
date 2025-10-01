# Propeller V2 Frontend Framework Examples

This directory contains examples showing how to use the `propeller-sdk-v2` GraphQL client with popular frontend frameworks.

## Installation

```bash
npm install propeller-sdk-v2
# or
yarn add propeller-sdk-v2
```

## Quick Setup

First, initialize the client in your application entry point:

```typescript
import { initializeClient } from 'propeller-sdk-v2';

// Initialize once in your app
initializeClient({
  endpoint: 'https://your-propeller-api.com/graphql',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'your-order-editor-api-key' // Optional: for order operations
});
```

## Framework Examples

### React (TypeScript)
See `react-example.tsx` for a complete React implementation featuring:
- Custom hooks for service management
- Product listing with state management
- Category browsing with dynamic loading
- User profile with union type handling
- TypeScript integration with full type safety

### Vue 3 (Composition API)
See `vue-example.vue` for a complete Vue implementation featuring:
- Composition API with reactive state
- Product management
- Category browser
- Order creation
- TypeScript support

### Basic JavaScript Usage

```javascript
import { getClient, ProductService } from 'propeller-sdk-v2';

const client = getClient();
const productService = new ProductService(client);

// Fetch products
const products = await productService.getProducts({
  limit: 10,
  offset: 0
});

console.log('Products:', products);
```

## Available Services

The package provides the following services:

### Core Services
- `ProductService` - Product management and search
- `CategoryService` - Category browsing and management
- `OrderService` - Order creation and management
- `UserService` - User authentication and profile management
- `CartService` - Shopping cart operations
- `PaymentService` - Payment processing

### Example Service Usage

```typescript
import { 
  ProductService, 
  CategoryService, 
  UserService, 
  OrderService 
} from 'propeller-sdk-v2';

const client = getClient();

// Product operations
const productService = new ProductService(client);
const products = await productService.getProducts({ limit: 20 });
const product = await productService.getProduct(123);

// Category operations
const categoryService = new CategoryService(client);
const category = await categoryService.getCategory({ slug: 'electronics' });
const categories = await categoryService.getCategories();

// User operations
const userService = new UserService(client);
const viewer = await userService.getViewer();
const users = await userService.getUsers({ limit: 10 });

// Order operations (requires Order Editor API key)
const orderService = new OrderService(client);
const order = await orderService.createOrder({
  customerId: 123,
  items: [{ productId: 456, quantity: 2 }]
});
```

## TypeScript Support

The package includes full TypeScript definitions:

```typescript
import type { 
  Product, 
  Category, 
  Order, 
  ViewerResult,
  ProductSearchInput,
  CategorySearchInput 
} from 'propeller-sdk-v2';

// All GraphQL types are available as TypeScript interfaces
const handleProduct = (product: Product) => {
  console.log(product.name, product.price);
};

// Union types are properly handled
const handleViewer = (viewer: ViewerResult) => {
  if (viewer.__typename === 'Customer') {
    console.log('Customer:', viewer.companyName);
  } else {
    console.log('Contact:', viewer.firstName);
  }
};
```

## Framework-Specific Tips

### React
- Use custom hooks to encapsulate service logic
- Implement proper loading and error states
- Consider using React Query or SWR for additional caching
- Use useCallback for query functions to prevent unnecessary re-renders

### Vue
- Leverage the Composition API for reactive service management
- Use computed properties for derived state
- Implement proper error handling with try/catch
- Consider using Pinia for global state management

### Angular
```typescript
import { Injectable } from '@angular/core';
import { getClient, ProductService } from 'propeller-sdk-v2';

@Injectable({
  providedIn: 'root'
})
export class PropellerService {
  private productService = new ProductService(getClient());
  
  async getProducts() {
    return this.productService.getProducts({ limit: 20 });
  }
}
```

### Svelte
```javascript
import { getClient, ProductService } from 'propeller-sdk-v2';
import { writable } from 'svelte/store';

const client = getClient();
const productService = new ProductService(client);

export const products = writable([]);

export const loadProducts = async () => {
  const data = await productService.getProducts({ limit: 20 });
  products.set(data);
};
```

## Error Handling

The client provides comprehensive error handling:

```typescript
try {
  const products = await productService.getProducts({ limit: 20 });
} catch (error) {
  if (error.message.includes('GraphQL')) {
    // Handle GraphQL-specific errors
    console.error('GraphQL Error:', error.message);
  } else {
    // Handle network or other errors
    console.error('Network Error:', error.message);
  }
}
```

## Configuration Options

```typescript
initializeClient({
  endpoint: 'https://api.example.com/graphql',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'order-editor-key', // For order operations
  headers: {
    'Custom-Header': 'value'
  },
  timeout: 30000 // 30 seconds
});
```

## Best Practices

1. **Initialize Once**: Call `initializeClient()` only once in your application
2. **Service Reuse**: Create service instances as needed, they're lightweight
3. **Error Handling**: Always wrap service calls in try/catch blocks
4. **TypeScript**: Use the provided types for better development experience
5. **Caching**: The client handles GraphQL query caching automatically
6. **Authentication**: API keys are handled automatically per operation

## Performance Tips

- Services are lightweight and can be created as needed
- GraphQL queries are cached automatically
- Fragments are preloaded for optimal performance
- Use appropriate pagination parameters to avoid large data sets

## Support

For issues or questions:
1. Check the main README.md
2. Review the TypeScript definitions
3. Examine the generated service methods
4. Create an issue in the repository

The `propeller-sdk-v2` package is designed to work seamlessly with any JavaScript/TypeScript framework while providing excellent developer experience and type safety. 