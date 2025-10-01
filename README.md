# Propeller V2 SDK

A comprehensive TypeScript GraphQL client for the Propeller eCommerce Platform, providing full type safety and GraphQL operations.

## Features

- 🎯 **Full Type Safety**: Complete TypeScript definitions for all GraphQL types
- 🔄 **GraphQL Operations**: 230+ mutations and 125+ queries
- 📦 **Service Layer**: 52 service classes with business logic
- 🛡️ **Schema-driven**: Generated from GraphQL schema
- 🔧 **Easy Integration**: Simple client configuration
- 📖 **Complete Documentation**: JSDoc for all APIs
- ⚛️ **Framework Agnostic**: Works with React, Vue, Angular, and vanilla JavaScript

## Installation

```bash
npm install propeller-sdk-v2
```

## Quick Start

```typescript
import { GraphQLClient } from 'propeller-sdk-v2';

// Initialize the client
const client = new GraphQLClient({
  endpoint: 'https://your-propeller-api.com/graphql',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'your-order-editor-api-key' // Optional
});

// Use a service
import { ProductService, ProductStatus } from 'propeller-sdk-v2';
import { Format, Fit } from 'propeller-sdk-v2/dist/enum';

const productService = new ProductService(client);

const searchParams: ProductsQueryVariables = {
  input: {
    page: 1,
    offset: 20,
    term: "laptop",
    statuses: [ProductStatus.A, ProductStatus.N, ProductStatus.P, ProductStatus.S, ProductStatus.R, ProductStatus.T],
    language: 'NL'
  },
  imageSearchFilters: {
    page: 1,
    offset: 1
  },
  imageVariantFilters: {
    transformations: {
      name: 'product_thumb',
      transformation: {
        format: Format.WEBP,
        height: 300,
        width: 300,
        fit: Fit.BOUNDS
      }
    }
  },
  language: 'NL'
};

const products = await this.productService.getProducts(searchParams);
```

## Frontend Framework Support

This package is designed to work seamlessly with all popular frontend frameworks:

### React
```typescript
import { useState, useEffect } from 'react';
import { initializeClient, getClient, ProductService, ProductStatus } from 'propeller-sdk-v2';
import { Format, Fit } from 'propeller-sdk-v2/dist/enum';
// Initialize once in your app
initializeClient({
  endpoint: 'https://your-api.com/graphql',
  apiKey: 'your-api-key'
});

function ProductList() {
  const [products, setProducts] = useState([]);
  const productService = new ProductService(getClient());

  useEffect(() => {
    const loadProducts = async () => {
      const data = await productService.getProducts({ 
        input: {
          page: 1,
          offset: 20,
          term: "laptop",
          statuses: [ProductStatus.A, ProductStatus.N, ProductStatus.P, ProductStatus.S, ProductStatus.R, ProductStatus.T],
          language: 'NL'
        },
        imageSearchFilters: {
          page: 1,
          offset: 1
        },
        imageVariantFilters: {
          transformations: {
            name: 'product_thumb',
            transformation: {
              format: Format.WEBP,
              height: 300,
              width: 300,
              fit: Fit.BOUNDS
            }
          }
        },
        language: 'NL'
      });

      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}
```

### Vue 3
```vue
<template>
  <div>
    <div v-for="product in products" :key="product.id">
      {{ product.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initializeClient, getClient, ProductService, ProductStatus } from 'propeller-sdk-v2';
import { Format, Fit } from 'propeller-sdk-v2/dist/enum';

// Initialize once in your app
initializeClient({
  endpoint: 'https://your-api.com/graphql',
  apiKey: 'your-api-key'
});

const products = ref([]);
const productService = new ProductService(getClient());

onMounted(async () => {
  const data = await productService.getProducts({ 
    input: {
      page: 1,
      offset: 20,
      term: "laptop",
      statuses: [ProductStatus.A, ProductStatus.N, ProductStatus.P, ProductStatus.S, ProductStatus.R, ProductStatus.T],
      language: 'NL'
    },
    imageSearchFilters: {
      page: 1,
      offset: 1
    },
    imageVariantFilters: {
      transformations: {
        name: 'product_thumb',
        transformation: {
          format: Format.WEBP,
          height: 300,
          width: 300,
          fit: Fit.BOUNDS
        }
      }
    },
    language: 'NL'
  });
  products.value = data;
});
</script>
```

### Angular
```typescript
import { Injectable } from '@angular/core';
import { initializeClient, getClient, ProductService, ProductStatus } from 'propeller-sdk-v2';
import { Format, Fit } from 'propeller-sdk-v2/dist/enum';

// Initialize in main.ts or app.module.ts
initializeClient({
  endpoint: 'https://your-api.com/graphql',
  apiKey: 'your-api-key'
});

@Injectable({ providedIn: 'root' })
export class PropellerService {
  private productService = new ProductService(getClient());
  
  async getProducts() {
    return this.productService.getProducts({ 
      input: {
        page: 1,
        offset: 20,
        term: "laptop",
        statuses: [ProductStatus.A, ProductStatus.N, ProductStatus.P, ProductStatus.S, ProductStatus.R, ProductStatus.T],
        language: 'NL'
      },
      imageSearchFilters: {
        page: 1,
        offset: 1
      },
      imageVariantFilters: {
        transformations: {
          name: 'product_thumb',
          transformation: {
            format: Format.WEBP,
            height: 300,
            width: 300,
            fit: Fit.BOUNDS
          }
        }
      },
      language: 'NL'
    });
  }
}
```

### Vanilla JavaScript
```javascript
import { initializeClient, getClient, ProductService, ProductStatus } from 'propeller-sdk-v2';
import { Format, Fit } from 'propeller-sdk-v2/dist/enum';

// Initialize the client
initializeClient({
  endpoint: 'https://your-api.com/graphql',
  apiKey: 'your-api-key'
});

// Use services
const productService = new ProductService(getClient());
const products = await productService.getProducts({ 
  input: {
    page: 1,
    offset: 20,
    term: "laptop",
    statuses: [ProductStatus.A, ProductStatus.N, ProductStatus.P, ProductStatus.S, ProductStatus.R, ProductStatus.T],
    language: 'NL'
  },
  imageSearchFilters: {
    page: 1,
    offset: 1
  },
  imageVariantFilters: {
    transformations: {
      name: 'product_thumb',
      transformation: {
        format: Format.WEBP,
        height: 300,
        width: 300,
        fit: Fit.BOUNDS
      }
    }
  },
  language: 'NL'  
});

// Display products
products.forEach(product => {
  console.log(product.name, product.price);
});
```

### Framework Examples
Complete working examples for each framework are available in the `examples/` directory:
- `examples/react-example.tsx` - React with hooks and TypeScript
- `examples/vue-example.vue` - Vue 3 with Composition API
- `examples/angular-example.ts` - Angular service with RxJS
- `examples/vanilla-js-example.js` - Pure JavaScript implementation
- `examples/vanilla-js-example.html` - HTML demo page

## Service Classes

This package includes 52 service classes covering all major eCommerce operations:

### Core Services
- `ProductService` - Product management and search
- `OrderService` - Order processing and management
- `UserService` - User authentication and management
- `CartService` - Shopping cart operations
- `PaymentService` - Payment processing

### Catalog Services
- `CategoryService` - Category management
- `AttributeService` - Product attributes
- `DiscountService` - Discount and promotion management
- `BundleService` - Product bundles
- `CrossupsellService` - Cross-selling and upselling

### Business Services
- `CompanyService` - B2B company management
- `TaxService` - Tax calculations and management
- `ShipmentService` - Shipping and logistics
- `WarehouseService` - Inventory management
- `BusinessRuleService` - Business rules engine

### And many more...

## GraphQL Client Usage

### Basic Operations

```typescript
import { GraphQLClient } from 'propeller-sdk-v2';

const client = new GraphQLClient({
  endpoint: 'https://api.propeller.com/graphql',
  apiKey: 'your-api-key'
});

// Execute a query
const result = await client.execute(`
  query GetProducts($offset: Int!) {
    products(input: { offset: $offset }) {
      id
      name
      price
    }
  }
`, { offset: 10 });

// Execute a mutation
const mutation = await client.execute(`
  mutation CreateProduct($input: ProductCreateInput!) {
    productCreate(input: $input) {
      id
      name
    }
  }
`, { input: { name: 'New Product' } });
```

## Type Definitions

The package includes comprehensive TypeScript definitions:

### Enums
- 135+ enum types for status codes, field names, and options
- Full type safety for all enum values

### Types
- 756+ TypeScript interfaces and types
- Complete coverage of GraphQL schema
- Input types for mutations
- Response types for queries

### Examples

```typescript
import { 
  ProductStatus, 
  OrderStatus,
  Product,
  Order,
  CreateProductInput 
} from 'propeller-sdk-v2';

// Type-safe enums
const status: ProductStatus = ProductStatus.A;
const orderStatus: OrderStatus = OrderStatus.PENDING;

// Type-safe interfaces
const product: Product = {
  id: '123',
  name: 'Sample Product',
  status: ProductStatus.A,
  price: 29.99
};

// Type-safe inputs
const input: CreateProductInput = {
  name: 'New Product',
  price: 19.99,
  status: ProductStatus.A
};
```

## Configuration

### API Keys

The client supports two types of API keys:

1. **Standard API Key**: For general operations
2. **Order Editor API Key**: For order management operations

```typescript
const client = new GraphQLClient({
  endpoint: 'https://api.propeller.com/graphql',
  apiKey: 'your-standard-api-key',
  orderEditorApiKey: 'your-order-editor-api-key'
});
```

### Environment Variables

You can also configure using environment variables:

```bash
PROPELLER_API_ENDPOINT=https://api.propeller.com/graphql
PROPELLER_API_KEY=your-api-key
PROPELLER_ORDER_EDITOR_API_KEY=your-order-editor-key
```

## Error Handling

```typescript
import { GraphQLClient } from 'propeller-sdk-v2';

try {
  const result = await client.execute(query, variables);
  console.log(result);
} catch (error) {
  if (error.response) {
    // GraphQL errors
    console.error('GraphQL errors:', error.response.errors);
  } else {
    // Network or other errors
    console.error('Error:', error.message);
  }
}
```

## Development

### Building from Source

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Type check
npm run typecheck

# Clean build artifacts
npm run clean
```

### Project Structure

```
src/
├── client/           # GraphQL client implementation
├── enum/             # 135+ TypeScript enums
├── type/             # 756+ TypeScript types and interfaces
├── service/          # 52 service classes
├── graphql/          # GraphQL documents
│   ├── query/        # 125+ query definitions
│   ├── mutation/     # 230+ mutation definitions
│   └── fragment/     # Reusable fragments
└── index.ts          # Main exports
```

## API Reference

### GraphQL Client

- `GraphQLClient` - Main client class
- `execute(query, variables)` - Execute GraphQL operations
- `registerFragment(name, fragment)` - Register reusable fragments

### Service Classes

All service classes extend `BaseService` and provide:
- Type-safe method signatures
- Automatic GraphQL document loading
- Error handling and validation
- JSDoc documentation

### Core Types

- **Product Types**: `Product`, `ProductInput`, `ProductSearchInput`
- **Order Types**: `Order`, `OrderInput`, `OrderItem`
- **User Types**: `User`, `Customer`, `AdminUser`
- **Cart Types**: `Cart`, `CartItem`, `CartInput`
- **Payment Types**: `Payment`, `PaymentMethod`, `Transaction`

## Documentation

### 📚 Complete API Documentation

Comprehensive TypeDoc-generated documentation is available with full API reference, examples, and guides:

**🌐 [View Live Documentation](https://propeller-commerce.github.io/propeller-sdk-v2/)**

### Documentation Features

- **🔍 Full-text Search** - Find any class, method, or type instantly
- **🔗 Cross-referenced Links** - Navigate between related types and methods
- **📖 JSDoc Comments** - Detailed descriptions for all APIs
- **💡 Code Examples** - Usage examples for all service methods
- **🎨 Professional Theme** - Clean, GitHub-style interface
- **📱 Mobile Responsive** - Works perfectly on all devices

### Documentation Structure

The documentation is organized into logical sections:

#### 🛠️ **[Client](https://propeller-commerce.github.io/propeller-sdk-v2/classes/GraphQLClient.html)**
- `GraphQLClient` - Core GraphQL client implementation
- Connection management and authentication
- Query execution and error handling

#### 🔧 **[Services](https://propeller-commerce.github.io/propeller-sdk-v2/modules.html#services)**
52 service classes covering all eCommerce operations:
- `ProductService` - Product management and search
- `OrderService` - Order processing and fulfillment  
- `UserService` - Authentication and user management
- `CartService` - Shopping cart operations
- `PaymentService` - Payment processing
- And 47 more specialized services...

#### 📋 **[Types](https://propeller-commerce.github.io/propeller-sdk-v2/modules.html#types)**
756+ TypeScript interfaces and type definitions:
- Input types for mutations
- Response types for queries
- Complex nested object types
- Union and intersection types

#### 🏷️ **[Enums](https://propeller-commerce.github.io/propeller-sdk-v2/modules.html#enums)**
135+ enumeration types:
- Status codes and states
- Configuration options
- Field value constraints
- API constants

### Building Documentation Locally

To build and serve the documentation locally:

```bash
# Build documentation
npm run docs:build

# Serve locally on http://localhost:8080
npm run docs:serve

# Watch for changes (development)
npm run docs:watch

# Clean documentation
npm run docs:clean
```

### Documentation Scripts

The project includes several documentation-related scripts:

- `docs:build` - Generate TypeDoc documentation
- `docs:serve` - Serve documentation locally
- `docs:watch` - Watch for changes and rebuild
- `docs:clean` - Clean generated documentation
- `docs:full` - Full build with post-processing

### GitHub Pages Deployment

Documentation is automatically deployed to GitHub Pages on every push to the main branch via GitHub Actions. The workflow:

1. **Build** - Generates TypeDoc documentation
2. **Process** - Adds GitHub Pages configuration
3. **Deploy** - Publishes to GitHub Pages
4. **Optimize** - Includes SEO and mobile optimizations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions:
- GitHub Issues: [Report bugs or request features](https://github.com/propeller-commerce/propeller-sdk-v2/issues)
- Documentation: [Full API documentation](https://docs.propeller-commerce.com/graphql-v2)
- Community: [Join our Discord](https://discord.gg/propeller)

---

Generated with ❤️ by the Propeller Team

