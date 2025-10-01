# React Application Import Fixes

## 🔧 **Files to Update**

Based on the error messages, here are the exact changes needed for your React application:

### **1. src/components/specific/ProductCard.tsx**

```typescript
// ❌ OLD
import { Product } from 'propeller-sdk-v2/dist/type/Product';

// ✅ NEW
import { Product } from 'propeller-sdk-v2';
```

**Complete file update:**
```typescript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'propeller-sdk-v2';

interface ProductCardProps {
  product: Product;
  // ... rest of your interface
}

// ... rest of your component code
```

### **2. src/services/api.ts**

```typescript
// ❌ OLD
import { GraphQLClient, GraphQLClientConfig } from 'propeller-sdk-v2';
import { ProductService } from 'propeller-sdk-v2/dist/service/ProductService';
import { CartService } from 'propeller-sdk-v2/dist/service/CartService';
import { UserService } from 'propeller-sdk-v2/dist/service/UserService';

// ✅ NEW
import { 
  GraphQLClient, 
  GraphQLClientConfig,
  ProductService,
  CartService,
  UserService 
} from 'propeller-sdk-v2';
```

**Complete file update:**
```typescript
import { 
  GraphQLClient, 
  GraphQLClientConfig,
  ProductService,
  CartService,
  UserService 
} from 'propeller-sdk-v2';
import { menuService } from './MenuService';

// GraphQL client configuration using environment variables
const client = new GraphQLClient({
  endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT || 'https://your-api.com/graphql',
  apiKey: process.env.REACT_APP_API_KEY || 'your-api-key',
  orderEditorApiKey: process.env.REACT_APP_ORDER_EDITOR_API_KEY
});

// Export configured client
export const graphqlClient = client;

// Export service instances
export const productService = new ProductService(client);
export const cartService = new CartService(client);
export const userService = new UserService(client);

// ... rest of your API configuration
```

### **3. src/services/AuthService.ts**

```typescript
// ❌ OLD
import { LoginService } from 'propeller-sdk-v2/dist/service/LoginService';
import { UserService } from 'propeller-sdk-v2/dist/service/UserService';
import { LoginInput } from 'propeller-sdk-v2/dist/type/LoginInput';
import { Login } from 'propeller-sdk-v2/dist/type/Login';
import { User } from 'propeller-sdk-v2/dist/type/User';

// ✅ NEW
import { 
  LoginService,
  UserService,
  LoginInput,
  Login,
  User 
} from 'propeller-sdk-v2';
```

**Complete file update:**
```typescript
import { 
  LoginService,
  UserService,
  LoginInput,
  Login,
  User 
} from 'propeller-sdk-v2';

// ... rest of your AuthService code
```

### **4. src/services/CategoryService.ts**

```typescript
// ❌ OLD
import { CategoryService as PropellerCategoryService } from 'propeller-sdk-v2/dist/service/CategoryService';
import { graphqlClient } from './api';
import { Category } from 'propeller-sdk-v2/dist/type/Category';
import { ProductsResponse } from 'propeller-sdk-v2/dist/type/ProductsResponse';

// Re-export types from propeller-sdk-v2 for easier access
export { Product } from 'propeller-sdk-v2/dist/type/Product';
export { Category } from 'propeller-sdk-v2/dist/type/Category';
export { ProductsResponse } from 'propeller-sdk-v2/dist/type/ProductsResponse';
export { LocalizedString } from 'propeller-sdk-v2/dist/type/LocalizedString';

// ✅ NEW
import { 
  CategoryService as PropellerCategoryService,
  Category,
  Product,
  ProductsResponse,
  LocalizedString 
} from 'propeller-sdk-v2';
import { graphqlClient } from './api';

// Re-export types from propeller-sdk-v2 for easier access
export type { Product, Category, ProductsResponse, LocalizedString };
```

**Complete file update:**
```typescript
import { 
  CategoryService as PropellerCategoryService,
  Category,
  Product,
  ProductsResponse,
  LocalizedString 
} from 'propeller-sdk-v2';
import { graphqlClient } from './api';

// Re-export types from propeller-sdk-v2 for easier access
export type { Product, Category, ProductsResponse, LocalizedString };

// Create service instance
const propellerCategoryService = new PropellerCategoryService(graphqlClient);

// Your CategoryService wrapper class
export class CategoryService {
  // ... your implementation
}

// ... rest of your service code
```

## 🚀 **Quick Fix Script**

If you want to update all files at once, here's a find-and-replace pattern:

### **Find and Replace Patterns:**

1. **Service Imports:**
   ```bash
   Find: from 'propeller-sdk-v2/dist/service/([^']+)'
   Replace: from 'propeller-sdk-v2'
   ```

2. **Type Imports:**
   ```bash
   Find: from 'propeller-sdk-v2/dist/type/([^']+)'
   Replace: from 'propeller-sdk-v2'
   ```

3. **Export Updates:**
   ```bash
   Find: export { ([^}]+) } from 'propeller-sdk-v2/dist/type/([^']+)';
   Replace: export type { $1 };
   ```

## ⚡ **After Making Changes**

1. **Delete node_modules and package-lock.json** in your React app
2. **Reinstall dependencies:**
   ```bash
   npm install
   ```
3. **If using local development, link the updated package:**
   ```bash
   # In the propeller-sdk-v2 directory
   npm link
   
   # In your React app directory
   npm link propeller-sdk-v2
   ```
4. **Restart your development server**

## 🎯 **Verify the Fix**

After making these changes, all these imports should work:

```typescript
// ✅ All of these should work without errors
import { 
  GraphQLClient,
  ProductService,
  CategoryService,
  UserService,
  LoginService,
  CartService,
  Product,
  Category,
  Order,
  User,
  Login,
  LoginInput,
  ProductsResponse,
  LocalizedString,
  ProductStatus,
  CartStatus
} from 'propeller-sdk-v2';
```

## 🔍 **Available Types**

You can now import any of these types directly from `propeller-sdk-v2`:

- **Core Types:** `Product`, `Category`, `Order`, `User`, `Cart`
- **Response Types:** `ProductsResponse`, `OrderStatus`
- **Input Types:** `LoginInput`, `LoginInput`
- **Utility Types:** `LocalizedString`, `ViewerResult`
- **Enums:** `ProductStatus`, `CartStatus`, `OrderStatusType`, `YesNo`

## 🚨 **Important Notes**

1. **No more deep imports** - Everything comes from the main package
2. **Browser compatible** - No more filesystem errors
3. **Type exports** - Use `export type { ... }` for type-only exports
4. **Service imports** - All services are available from main package
5. **Namespace imports** - Use `Types.Product` or `Enums.ProductStatus` if needed 