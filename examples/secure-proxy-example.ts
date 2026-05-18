/**
 * Secure Proxy Example - Propeller GraphQL Client
 * 
 * This example demonstrates how to use the secure proxy mode
 * to keep API keys server-side while maintaining the same client API.
 */

import { createClient, productService } from 'propeller-sdk-v2';

// ============================================================================
// 🚨 INSECURE MODE (NOT RECOMMENDED FOR PRODUCTION)
// ============================================================================
// This mode exposes API keys in client-side code, which is a security risk.

/*
const insecureClient = createClient({
  endpoint: 'https://external-api.propeller.com/graphql',
  securityMode: 'direct', // ⚠️ INSECURE - API keys exposed in client code
  apiKey: 'your-api-key-here', // ⚠️ VISIBLE IN BROWSER DEV TOOLS
  timeout: 30000,
});
*/

// ============================================================================
// ✅ SECURE MODE (RECOMMENDED FOR PRODUCTION)
// ============================================================================
// Keeps all API keys server-side in a serverless proxy. v0.10.0: create the
// client once with `createClient()` and pass it where needed.

const client = createClient({
  endpoint: 'https://your-proxy.example.com/api/graphql',
  securityMode: 'proxy', // ✅ SECURE - No API keys in client code
  clientId: 'my-app', // Optional: for tracking and monitoring
  timeout: 30000,
});

// ============================================================================
// 📱 Usage Examples
// ============================================================================

async function exampleUsage() {

  try {
    // Check if we're in secure mode
    console.log('Security mode:', client.getSecurityMode());
    console.log('Is secure mode:', client.isSecureMode());

    // Real Propeller operation through the proxy, via the service factory —
    // same pattern as every other example. The proxy attaches the upstream
    // API key server-side; the client never sees it.
    const result = await productService(client).getProducts({
      input: { language: 'NL', page: 1, offset: 10, statuses: ['A'] },
    });

    console.log('Products found:', result.itemsFound);

  } catch (error) {
    console.error('Query failed:', error);
  }
}

// ============================================================================
// 🔄 Migration Helper
// ============================================================================

/**
 * Helper function to migrate from direct to proxy mode
 */
function migrateToSecureMode() {
  // Step 1: Deploy your serverless proxy function
  // Step 2: Update the client configuration
  // Step 3: Test thoroughly
  // Step 4: Remove old insecure configuration
  
  console.log(`
    Migration Steps:
    1. Deploy serverless proxy function (see serverless-proxy/README.md)
    2. Update client config to use proxy endpoint
    3. Test with simple queries
    4. Remove old apiKey and orderEditorApiKey config
    5. Monitor for any issues
  `);
}

// ============================================================================
// 🧪 Testing Functions
// ============================================================================

/**
 * Test the proxy connection
 */
async function testProxyConnection() {

  try {
    // Simple introspection query to test connection
    const result = await client.query(`
      query TestConnection {
        __typename
      }
    `);
    
    console.log('✅ Proxy connection successful:', result);
    return true;
    
  } catch (error) {
    console.error('❌ Proxy connection failed:', error);
    return false;
  }
}

/**
 * Test with a real GraphQL query
 */
async function testRealQuery() {

  try {
    // A real Propeller operation — succeeds if your proxy is configured to
    // forward to the upstream GraphQL endpoint with the API key attached.
    const result = await productService(client).getProducts({
      input: { language: 'NL', page: 1, offset: 1, statuses: ['A'] },
    });

    console.log('✅ Real query successful: itemsFound =', result.itemsFound);
    return true;

  } catch (error) {
    console.error('❌ Real query failed:', error);
    return false;
  }
}

// ============================================================================
// 🚀 Run Examples
// ============================================================================

async function runExamples() {
  console.log('🚀 Starting secure proxy examples...\n');
  
  // Test basic connection
  await testProxyConnection();
  
  // Test real query
  await testRealQuery();
  
  // Show migration info
  migrateToSecureMode();
}

// Uncomment to run examples
// runExamples();

export {
  exampleUsage,
  migrateToSecureMode,
  testProxyConnection,
  testRealQuery,
  runExamples
}; 