/**
 * Example: Using Custom GraphQL Operations with Propeller SDK
 * 
 * This example demonstrates how to use custom GraphQL queries, mutations,
 * and fragments from external project directories.
 */

import { initializeClient, getClient } from '../src/client/GraphQLClient';

/**
 * Example 1: Basic Configuration
 */
function example1_BasicConfiguration() {
  console.log('\n=== Example 1: Basic Configuration ===\n');
  
  initializeClient({
    endpoint: 'https://api.propeller.com/graphql',
    securityMode: 'proxy',
    
    // Configure custom GraphQL paths
    customFragmentsPath: './graphql/fragments',
    customQueriesPath: './graphql/queries',
    customMutationsPath: './graphql/mutations',
    
    // Enable custom overrides (default: true)
    allowCustomOverride: true
  });
  
  console.log('Client initialized with custom GraphQL paths');
}

/**
 * Example 2: Execute Query by Name
 * 
 * Assumes you have a file: ./graphql/queries/getProducts.graphql
 */
async function example2_QueryByName() {
  console.log('\n=== Example 2: Execute Query by Name ===\n');
  
  const client = getClient();
  
  try {
    // Execute a query that's loaded from ./graphql/queries/getProducts.graphql
    const result = await client.queryByName('getProducts', {
      limit: 10,
      offset: 0
    });
    
    console.log('Products:', result);
  } catch (error) {
    console.error('Query failed:', error);
  }
}

/**
 * Example 3: Execute Mutation by Name
 * 
 * Assumes you have a file: ./graphql/mutations/createOrder.graphql
 */
async function example3_MutationByName() {
  console.log('\n=== Example 3: Execute Mutation by Name ===\n');
  
  const client = getClient();
  
  try {
    // Execute a mutation from ./graphql/mutations/createOrder.graphql
    const result = await client.mutateByName('createOrder', {
      input: {
        items: [
          { productId: '123', quantity: 2 },
          { productId: '456', quantity: 1 }
        ],
        shippingAddress: {
          street: '123 Main St',
          city: 'New York',
          country: 'US'
        }
      }
    });
    
    console.log('Order created:', result);
  } catch (error) {
    console.error('Mutation failed:', error);
  }
}

/**
 * Example 4: Using Fragments
 * 
 * Fragments are automatically resolved when executing queries/mutations
 * Assumes you have files:
 *   - ./graphql/fragments/ProductFields.graphql
 *   - ./graphql/queries/getProductsWithDetails.graphql (uses ...ProductFields)
 */
async function example4_UsingFragments() {
  console.log('\n=== Example 4: Using Fragments ===\n');
  
  const client = getClient();
  
  try {
    // This query uses the ProductFields fragment
    // The client automatically resolves and includes the fragment
    const result = await client.queryByName('getProductsWithDetails', {
      limit: 5
    });
    
    console.log('Products with details:', result);
  } catch (error) {
    console.error('Query failed:', error);
  }
}

/**
 * Example 5: Manual Registration
 * 
 * You can also register operations at runtime
 */
async function example5_ManualRegistration() {
  console.log('\n=== Example 5: Manual Registration ===\n');
  
  const client = getClient();
  
  // Register a custom query at runtime
  client.registerQuery('getCategories', `
    query GetCategories {
      categories {
        id
        name
        productCount
      }
    }
  `);
  
  // Register a custom fragment
  client.registerFragment('CategoryFields', `
    fragment CategoryFields on Category {
      id
      name
      slug
      description
    }
  `);
  
  try {
    const result = await client.queryByName('getCategories');
    console.log('Categories:', result);
  } catch (error) {
    console.error('Query failed:', error);
  }
}

/**
 * Example 6: Inspect Available Operations
 */
function example6_InspectOperations() {
  console.log('\n=== Example 6: Inspect Available Operations ===\n');
  
  const client = getClient();
  
  console.log('Available Queries:');
  console.log(client.getQueryNames());
  
  console.log('\nAvailable Mutations:');
  console.log(client.getMutationNames());
  
  console.log('\nAvailable Fragments:');
  console.log(client.getFragmentNames());
  
  // Get specific operation definition
  const queryDef = client.getQuery('getProducts');
  if (queryDef) {
    console.log('\ngetProducts definition:');
    console.log(queryDef);
  }
}

/**
 * Example 7: Reload Operations
 * 
 * Useful in development when GraphQL files are updated
 */
function example7_ReloadOperations() {
  console.log('\n=== Example 7: Reload Operations ===\n');
  
  const client = getClient();
  
  console.log('Before reload:', client.getQueryNames());
  
  // After modifying GraphQL files
  client.reloadOperations();
  
  console.log('After reload:', client.getQueryNames());
}

/**
 * Example 8: Environment-Specific Configuration
 */
function example8_EnvironmentSpecific() {
  console.log('\n=== Example 8: Environment-Specific Configuration ===\n');
  
  const environment = process.env.NODE_ENV || 'development';
  
  initializeClient({
    endpoint: process.env.GRAPHQL_ENDPOINT || 'https://api.propeller.com/graphql',
    securityMode: 'proxy',
    
    // Use environment-specific paths
    customQueriesPath: `./graphql/${environment}/queries`,
    customMutationsPath: `./graphql/${environment}/mutations`,
    customFragmentsPath: './graphql/fragments' // Shared fragments
  });
  
  console.log(`Client configured for ${environment} environment`);
}

/**
 * Example 9: Error Handling
 */
async function example9_ErrorHandling() {
  console.log('\n=== Example 9: Error Handling ===\n');
  
  const client = getClient();
  
  try {
    // Try to execute a non-existent query
    await client.queryByName('nonExistentQuery');
  } catch (error) {
    console.error('Expected error:', error.message);
    // Output: Query "nonExistentQuery" not found. Available queries: ...
  }
  
  try {
    // Handle GraphQL execution errors
    await client.queryByName('getProducts', { invalidParam: 'value' });
  } catch (error) {
    console.error('GraphQL error:', error.message);
  }
}

/**
 * Example 10: Type-Safe Queries
 */
interface Product {
  id: string;
  name: string;
  price: number;
  sku: string;
}

interface GetProductsResult {
  products: Product[];
}

async function example10_TypeSafeQueries() {
  console.log('\n=== Example 10: Type-Safe Queries ===\n');
  
  const client = getClient();
  
  try {
    // Execute with type safety
    const result = await client.queryByName<GetProductsResult>('getProducts', {
      limit: 10
    });
    
    // result.products is now typed as Product[]
    result.products.forEach(product => {
      console.log(`${product.name} - $${product.price}`);
    });
  } catch (error) {
    console.error('Query failed:', error);
  }
}

/**
 * Example 11: Combining Custom and Inline Queries
 */
async function example11_CombinedApproach() {
  console.log('\n=== Example 11: Combining Custom and Inline Queries ===\n');
  
  const client = getClient();
  
  try {
    // Use a custom registered query
    const products = await client.queryByName('getProducts', { limit: 5 });
    console.log('Products from custom query:', products);
    
    // Use an inline query for ad-hoc requests
    const inlineQuery = `
      query GetSpecificProduct($id: ID!) {
        product(id: $id) {
          id
          name
          price
        }
      }
    `;
    
    const product = await client.query(inlineQuery, { id: '123' });
    console.log('Product from inline query:', product);
  } catch (error) {
    console.error('Query failed:', error);
  }
}

/**
 * Example 12: Hot Reload in Development
 */
function example12_HotReload() {
  console.log('\n=== Example 12: Hot Reload in Development ===\n');
  
  if (process.env.NODE_ENV === 'development') {
    // This would require chokidar package: npm install chokidar --save-dev
    try {
      const chokidar = require('chokidar');
      const client = getClient();
      
      // Watch GraphQL files for changes
      const watcher = chokidar.watch('./graphql/**/*.{graphql,gql}', {
        persistent: true
      });
      
      watcher.on('change', (path: string) => {
        console.log(`GraphQL file changed: ${path}`);
        console.log('Reloading operations...');
        client.reloadOperations();
        console.log('Operations reloaded successfully');
      });
      
      console.log('Watching GraphQL files for changes...');
    } catch (error) {
      console.log('Chokidar not installed. Hot reload not available.');
      console.log('Install with: npm install chokidar --save-dev');
    }
  }
}

/**
 * Run all examples
 */
async function runAllExamples() {
  console.log('╔════════════════════════════════════════════════╗');
  console.log('║  Custom GraphQL Operations Examples           ║');
  console.log('╚════════════════════════════════════════════════╝');
  
  try {
    example1_BasicConfiguration();
    await example2_QueryByName();
    await example3_MutationByName();
    await example4_UsingFragments();
    await example5_ManualRegistration();
    example6_InspectOperations();
    example7_ReloadOperations();
    example8_EnvironmentSpecific();
    await example9_ErrorHandling();
    await example10_TypeSafeQueries();
    await example11_CombinedApproach();
    example12_HotReload();
    
    console.log('\n✅ All examples completed!');
  } catch (error) {
    console.error('\n❌ Error running examples:', error);
  }
}

// Run if executed directly
if (require.main === module) {
  runAllExamples();
}

export {
  example1_BasicConfiguration,
  example2_QueryByName,
  example3_MutationByName,
  example4_UsingFragments,
  example5_ManualRegistration,
  example6_InspectOperations,
  example7_ReloadOperations,
  example8_EnvironmentSpecific,
  example9_ErrorHandling,
  example10_TypeSafeQueries,
  example11_CombinedApproach,
  example12_HotReload,
  runAllExamples
};

