import React, { useState, useEffect, useCallback } from 'react';
import { 
  initializeClient, 
  getClient, 
  ProductService, 
  CategoryService, 
  UserService,
  OrderService,
  Product, 
  Category, 
  ViewerResult 
} from 'propeller-sdk-v2';

// Initialize the Propeller client (do this once in your app)
initializeClient({
  endpoint: 'https://your-propeller-api.com/graphql',
  apiKey: 'your-api-key',
  orderEditorApiKey: 'your-order-editor-api-key' // For order operations
});

// Custom hook for Propeller services
function usePropellerServices() {
  const client = getClient();
  
  return {
    productService: new ProductService(client),
    categoryService: new CategoryService(client),
    userService: new UserService(client),
    orderService: new OrderService(client)
  };
}

// Product listing component
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { productService } = usePropellerServices();

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Using the ProductService to get products
      const productList = await productService.getProducts({
        // Add your filter parameters here
        limit: 20,
        offset: 0
      });
      
      setProducts(productList);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, [productService]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span className="price">${product.price}</span>
          </div>
        ))}
      </div>
      <button onClick={fetchProducts}>Refresh Products</button>
    </div>
  );
};

// Category browser component
const CategoryBrowser: React.FC = () => {
  const [category, setCategory] = useState<Category | null>(null);
  const [categorySlug, setCategorySlug] = useState('electronics');
  const [loading, setLoading] = useState(false);
  const { categoryService } = usePropellerServices();

  const loadCategory = useCallback(async (slug: string) => {
    try {
      setLoading(true);
      const categoryData = await categoryService.getCategory({
        slug,
        userId: 1, // Your user ID
        hidden: 'No'
      });
      setCategory(categoryData);
    } catch (err) {
      console.error('Failed to load category:', err);
    } finally {
      setLoading(false);
    }
  }, [categoryService]);

  useEffect(() => {
    loadCategory(categorySlug);
  }, [categorySlug, loadCategory]);

  return (
    <div className="category-browser">
      <div>
        <label>
          Category:
          <select 
            value={categorySlug} 
            onChange={(e) => setCategorySlug(e.target.value)}
          >
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>
        </label>
      </div>
      
      {loading && <div>Loading category...</div>}
      {category && (
        <div className="category-details">
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      )}
    </div>
  );
};

// User profile component
const UserProfile: React.FC = () => {
  const [viewer, setViewer] = useState<ViewerResult | null>(null);
  const [loading, setLoading] = useState(true);
  const { userService } = usePropellerServices();

  useEffect(() => {
    const loadViewer = async () => {
      try {
        const viewerData = await userService.getViewer();
        setViewer(viewerData);
      } catch (err) {
        console.error('Failed to load viewer:', err);
      } finally {
        setLoading(false);
      }
    };

    loadViewer();
  }, [userService]);

  if (loading) return <div>Loading profile...</div>;
  if (!viewer) return <div>Not logged in</div>;

  return (
    <div className="user-profile">
      <h2>Profile</h2>
      {'email' in viewer ? (
        <div>
          <p>Type: Customer</p>
          <p>Email: {viewer.email}</p>
          <p>Company: {viewer.companyName}</p>
        </div>
      ) : (
        <div>
          <p>Type: Contact</p>
          <p>Email: {viewer.email}</p>
          <p>Name: {viewer.firstName} {viewer.lastName}</p>
        </div>
      )}
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>Propeller eCommerce Demo</h1>
      </header>
      <main>
        <UserProfile />
        <CategoryBrowser />
        <ProductList />
      </main>
    </div>
  );
};

export default App;

// Usage in your React app:
// 1. Install: npm install propeller-sdk-v2
// 2. Import and initialize as shown above
// 3. Use the services in your components
// 4. The client handles caching, authentication, and error handling automatically 