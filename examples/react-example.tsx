/**
 * React example — Propeller SDK v0.10.0
 *
 * Shows the v0.10.0 API: `createClient()` + tree-shakeable service factories,
 * passing the client explicitly (no global singleton). Service methods take a
 * single variables object that mirrors the GraphQL operation's variables.
 */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  createClient,
  productService,
  categoryService,
  userService,
  getLocalized,
  ProductStatus,
  type Product,
  type Category,
  type ViewerResult,
  type TransformationsInput,
} from 'propeller-sdk-v2';

// Create the client once and share it (module scope, context, or a store).
const client = createClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy', // keep API keys server-side
  clientId: 'my-react-app',
  defaultLanguage: 'NL',
});

// `imageVariantFilters` is a required variable on product/category operations.
const imageVariantFilters: TransformationsInput = {
  transformations: [
    { name: 'thumb', transformation: { width: 300, height: 300 } },
  ],
};

// Product listing — `getProducts` returns a ProductsResponse ({ items, itemsFound }).
const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const products$ = useMemo(() => productService(client), []);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await products$.getProducts({
        input: {
          language: 'NL',
          page: 1,
          offset: 20,
          statuses: [ProductStatus.A],
        },
        imageVariantFilters,
        language: 'NL',
      });
      setProducts(result.items as Product[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, [products$]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading products…</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{getLocalized(product.names, 'NL')}</h3>
            <span className="sku">{product.sku}</span>
          </div>
        ))}
      </div>
      <button onClick={fetchProducts}>Refresh products</button>
    </div>
  );
};

// Category browser — `getCategory` takes the hand-authored CategoryQueryVariables.
const CategoryBrowser: React.FC = () => {
  const [category, setCategory] = useState<Category | null>(null);
  const [slug, setSlug] = useState('electronics');
  const [loading, setLoading] = useState(false);
  const categories$ = useMemo(() => categoryService(client), []);

  const loadCategory = useCallback(
    async (s: string) => {
      try {
        setLoading(true);
        const data = await categories$.getCategory({
          slug: s,
          imageVariantFilters,
          language: 'NL',
        });
        setCategory(data);
      } catch (err) {
        console.error('Failed to load category:', err);
      } finally {
        setLoading(false);
      }
    },
    [categories$]
  );

  useEffect(() => {
    loadCategory(slug);
  }, [slug, loadCategory]);

  return (
    <div className="category-browser">
      <label>
        Category:
        <select value={slug} onChange={(e) => setSlug(e.target.value)}>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>
      </label>
      {loading && <div>Loading category…</div>}
      {category && <h2>{getLocalized(category.names, 'NL')}</h2>}
    </div>
  );
};

// Viewer (logged-in customer/contact). `getViewer` takes optional ViewerVariables.
const UserProfile: React.FC = () => {
  const [viewer, setViewer] = useState<ViewerResult | null>(null);
  const [loading, setLoading] = useState(true);
  const users$ = useMemo(() => userService(client), []);

  useEffect(() => {
    users$
      .getViewer({})
      .then(setViewer)
      .catch((err) => console.error('Failed to load viewer:', err))
      .finally(() => setLoading(false));
  }, [users$]);

  if (loading) return <div>Loading profile…</div>;
  if (!viewer) return <div>Not logged in</div>;

  return (
    <div className="user-profile">
      <h2>Profile</h2>
      <pre>{JSON.stringify(viewer, null, 2)}</pre>
    </div>
  );
};

const App: React.FC = () => (
  <div className="app">
    <header>
      <h1>Propeller eCommerce demo</h1>
    </header>
    <main>
      <UserProfile />
      <CategoryBrowser />
      <ProductList />
    </main>
  </div>
);

export default App;

// Usage:
// 1. npm install propeller-sdk-v2
// 2. createClient(...) once; pass it to the service factories
// 3. Service methods take a single variables object matching the operation
