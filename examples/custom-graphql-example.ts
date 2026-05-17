/**
 * Custom GraphQL operations — Propeller SDK v0.10.0
 *
 * v0.10.0 removed filesystem-path auto-loading (`customQueriesPath`,
 * `customFragmentsPath`, `allowCustomOverride`, `reloadOperations()`). The
 * surviving way to run your own operations is:
 *
 *   - `client.execute({ query, variables })` / `client.query(...)` — inline
 *     ad-hoc operations, nothing to register.
 *   - `client.registerQuery / registerMutation / registerFragment` — register
 *     a named operation/fragment string once, then run it via
 *     `client.queryByName(name, vars)` / `client.mutateByName(name, vars)`.
 *     Registered fragments are inlined into operations that spread them.
 *
 * Bundled SDK operations are still best used through the typed service
 * factories (e.g. `productService(client).getProducts(...)`).
 */
import { createClient } from 'propeller-sdk-v2';

const client = createClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy',
});

/**
 * Example 1: Inline ad-hoc query — no registration needed.
 */
async function example1_InlineQuery() {
  const result = await client.execute<{ viewer: unknown }>({
    query: `query Viewer { viewer { __typename } }`,
  });
  console.log('viewer:', result.data?.viewer, 'errors:', result.errors);
}

/**
 * Example 2: Register a named query, then run it by name.
 */
async function example2_RegisterAndQueryByName() {
  client.registerQuery(
    'myProducts',
    `query myProducts($input: ProductSearchInput!, $imageVariantFilters: TransformationsInput!) {
      products(input: $input, imageVariantFilters: $imageVariantFilters) {
        items { id sku }
        itemsFound
      }
    }`
  );

  const data = await client.queryByName('myProducts', {
    input: { language: 'NL', page: 1, offset: 10, statuses: ['A'] },
    imageVariantFilters: {
      transformations: [{ name: 'thumb', transformation: { width: 200, height: 200 } }],
    },
  });
  console.log('myProducts:', data);
}

/**
 * Example 3: Register a fragment and a query that spreads it. The client
 * inlines registered fragments into operations that reference them.
 */
async function example3_Fragments() {
  client.registerFragment(
    'CategoryBrief',
    `fragment CategoryBrief on Category { categoryId names { language value } }`
  );
  client.registerQuery(
    'myCategories',
    `query myCategories { categories { items { ...CategoryBrief } } }`
  );

  const data = await client.queryByName('myCategories');
  console.log('myCategories:', data);
}

/**
 * Example 4: Register and run a mutation by name.
 */
async function example4_MutationByName() {
  client.registerMutation(
    'touchProduct',
    `mutation touchProduct($productId: Int!, $input: UpdateProductInput!) {
      productUpdate(productId: $productId, input: $input) { productId }
    }`
  );

  const data = await client.mutateByName('touchProduct', {
    productId: 123,
    input: {},
  });
  console.log('touchProduct:', data);
}

/**
 * Example 5: Inspect what's registered.
 */
function example5_Inspect() {
  console.log('queries:', client.getQueryNames());
  console.log('mutations:', client.getMutationNames());
  console.log('fragments:', client.getFragmentNames());
  console.log('myProducts def:', client.getQuery('myProducts'));
}

/**
 * Example 6: Error handling — queryByName throws if the name isn't registered.
 */
async function example6_ErrorHandling() {
  try {
    await client.queryByName('notRegistered');
  } catch (error) {
    console.error(
      'Expected:',
      error instanceof Error ? error.message : String(error)
    );
  }
}

/**
 * Example 7: Type-safe results — pass a result type to queryByName.
 */
interface ProductsResult {
  products: { items: { id: number; sku: string }[]; itemsFound: number };
}

async function example7_TypeSafe() {
  const data = await client.queryByName<ProductsResult>('myProducts', {
    input: { language: 'NL', page: 1, offset: 5, statuses: ['A'] },
    imageVariantFilters: {
      transformations: [{ name: 'thumb', transformation: { width: 100, height: 100 } }],
    },
  });
  data.products.items.forEach((p) => console.log(p.id, p.sku));
}

async function runAllExamples() {
  await example1_InlineQuery();
  await example2_RegisterAndQueryByName();
  await example3_Fragments();
  await example4_MutationByName();
  example5_Inspect();
  await example6_ErrorHandling();
  await example7_TypeSafe();
  console.log('Done.');
}

if (require.main === module) {
  runAllExamples().catch((err) => console.error('Failed:', err));
}

export {
  example1_InlineQuery,
  example2_RegisterAndQueryByName,
  example3_Fragments,
  example4_MutationByName,
  example5_Inspect,
  example6_ErrorHandling,
  example7_TypeSafe,
  runAllExamples,
};
