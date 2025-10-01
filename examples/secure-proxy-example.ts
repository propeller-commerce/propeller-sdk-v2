/**
 * Secure Proxy Example - Propeller GraphQL Client
 * 
 * This example demonstrates how to use the secure proxy mode
 * to keep API keys server-side while maintaining the same client API.
 */

import { initializeClient, getClient } from '../src/client';

// ============================================================================
// 🚨 INSECURE MODE (NOT RECOMMENDED FOR PRODUCTION)
// ============================================================================
// This mode exposes API keys in client-side code, which is a security risk.

/*
initializeClient({
  endpoint: 'https://external-api.propeller.com/graphql',
  securityMode: 'direct', // ⚠️ INSECURE - API keys exposed in client code
  apiKey: 'your-api-key-here', // ⚠️ VISIBLE IN BROWSER DEV TOOLS
  orderEditorApiKey: 'your-order-editor-key', // ⚠️ EXPOSED TO USERS
  timeout: 30000
});
*/

// ============================================================================
// ✅ SECURE MODE (RECOMMENDED FOR PRODUCTION)
// ============================================================================
// This mode keeps all API keys server-side in a serverless proxy function.

initializeClient({
  endpoint: 'https://your-proxy.vercel.app/api/graphql-proxy', // Proxy endpoint
  securityMode: 'proxy', // ✅ SECURE - No API keys in client code
  clientId: 'my-react-app', // Optional: for tracking and monitoring
  timeout: 30000
});

// ============================================================================
// 📱 Usage Examples
// ============================================================================

async function exampleUsage() {
  const client = getClient();
  
  try {
    // Check if we're in secure mode
    console.log('Security mode:', client.getSecurityMode());
    console.log('Is secure mode:', client.isSecureMode());
    
    // Example GraphQL query
    const result = await client.query(`
      query GetProducts($limit: Int!) {
        products(first: $limit) {
          id
          name
          price
        }
      }
    `, { limit: 10 });
    
    console.log('Products:', result);
    
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
  const client = getClient();
  
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
  const client = getClient();
  
  try {
    // This query should work if your proxy is properly configured
    const result = await client.query(`
      query GetCompanyInfo($companyId: ID!) {
        company(id: $companyId) {
          id
          name
          status
        }
      }
    `, { companyId: '123' });
    
    console.log('✅ Real query successful:', result);
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