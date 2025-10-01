# Propeller SDK V2 Import Guide

## ✅ **BROWSER-COMPATIBLE VERSION**

The package has been updated to work in browsers! No more `fs.readFileSync` errors.

## 📦 **Correct Import Patterns**

### **Main Package Imports (Recommended)**
```typescript
// Client and configuration
import { GraphQLClient, initializeClient, getClient } from 'propeller-sdk-v2';

// Services (primary way to interact with the API)
import { 
  ProductService, 
  CategoryService, 
  UserService, 
  OrderService, 
  CartService,
  LoginService 
} from 'propeller-sdk-v2';

// Common types (convenience exports)
import { 
  Product, 
  Category, 
  Order, 
  User, 
  Login, 
  LoginInput, 
  Cart,
  OrderStatus,
  ViewerResult 
} from 'propeller-sdk-v2';

// Common enums (convenience exports)
import { 
  ProductStatus, 
  CartStatus, 
  OrderStatusType, 
  YesNo 
} from 'propeller-sdk-v2';
```

### **Namespace Imports (For avoiding conflicts)**
```typescript
// Import all types in a namespace
import { Types, Enums } from 'propeller-sdk-v2';

// Usage
const product: Types.Product = { /* ... */ };
const status: Enums.ProductStatus = Enums.ProductStatus.ACTIVE;
```

### **Legacy Imports (Update these!)**
```typescript
// ❌ OLD - These cause browser errors
import { Product } from 'propeller-sdk-v2/dist/type/Product';
import { ProductService } from 'propeller-sdk-v2/dist/service/ProductService';

// ✅ NEW - Browser compatible
import { Product, ProductService } from 'propeller-sdk-v2';
```

## 🔧 **Quick Migration Guide**

### **Step 1: Update Service Imports**
```typescript
// Before
import { ProductService } from 'propeller-sdk-v2/dist/service/ProductService';
import { CartService } from 'propeller-sdk-v2/dist/service/CartService';
import { UserService } from 'propeller-sdk-v2/dist/service/UserService';
import { LoginService } from 'propeller-sdk-v2/dist/service/LoginService';

// After
import { 
  ProductService, 
  CartService, 
  UserService, 
  LoginService 
} from 'propeller-sdk-v2';
```

### **Step 2: Update Type Imports**
```typescript
// Before
import { Product } from 'propeller-sdk-v2/dist/type/Product';
import { Category } from 'propeller-sdk-v2/dist/type/Category';
import { LoginInput } from 'propeller-sdk-v2/dist/type/LoginInput';
import { Login } from 'propeller-sdk-v2/dist/type/Login';

// After
import { 
  Product, 
  Category, 
  LoginInput, 
  Login 
} from 'propeller-sdk-v2';
```

### **Step 3: Update Client Imports**
```typescript
// Before
import { GraphQLClient, GraphQLClientConfig } from 'propeller-sdk-v2';

// After (no change needed, this was already correct!)
import { GraphQLClient, GraphQLClientConfig } from 'propeller-sdk-v2';
```

## 🚀 **Complete Example Usage**

```typescript
import React, { useState, useEffect } from 'react';
import { 
  initializeClient, 
  getClient, 
  ProductService, 
  CategoryService,
  Product, 
  Category 
} from 'propeller-sdk-v2';

// Initialize once in your app
initializeClient({
  endpoint: 'https://your-api.com/graphql',
  apiKey: 'your-api-key'
});

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  
  useEffect(() => {
    const client = getClient();
    const productService = new ProductService(client);
    const categoryService = new CategoryService(client);
    
    // Load data
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          productService.getProducts({ limit: 20 }),
          categoryService.getCategories()
        ]);
        
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to load data:', error);
      }
    };
    
    loadData();
  }, []);
  
  return (
    <div>
      <h1>Products: {products.length}</h1>
      <h1>Categories: {categories.length}</h1>
    </div>
  );
}
```

## 🔍 **Available Exports**

### **Services (52 total)**
All service classes are exported directly:
- `ProductService`, `CategoryService`, `OrderService`
- `UserService`, `LoginService`, `CartService`
- `PaymentService`, `ShipmentService`, `TaxService`
- And 43 more...

### **Types (756+ total)**
Common types exported directly:
- `Product`, `Category`, `Order`, `User`, `Cart`
- `Login`, `LoginInput`, `OrderStatus`
- All other types available via `Types.TypeName`

### **Enums (135+ total)**
Common enums exported directly:
- `ProductStatus`, `CartStatus`, `OrderStatusType`, `YesNo`
- All other enums available via `Enums.EnumName`

## ⚠️ **Breaking Changes**

1. **File System Dependencies Removed**: No more Node.js `fs` module usage
2. **GraphQL Files Bundled**: All `.graphql` files are now bundled into the JavaScript
3. **Import Paths Changed**: Use main package imports instead of deep imports
4. **Browser Compatible**: Works in React, Vue, Angular, and vanilla JavaScript

## 🎯 **Benefits**

- ✅ **Browser Compatible**: No more filesystem errors
- ✅ **Tree Shakeable**: Import only what you need
- ✅ **Type Safe**: Full TypeScript support
- ✅ **Framework Agnostic**: Works with any JS/TS framework
- ✅ **Smaller Bundles**: Bundlers can optimize unused code
- ✅ **Better Performance**: GraphQL queries are pre-bundled 