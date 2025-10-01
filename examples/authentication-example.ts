/**
 * Authentication Example - Propeller GraphQL Client
 * 
 * This example demonstrates how to handle user authentication with the secure proxy,
 * including login, automatic token handling, and logout.
 */

import { initializeClient, getClient } from '../src/client';

// ============================================================================
// 🚀 Initialize Client with Secure Proxy Mode
// ============================================================================

initializeClient({
  endpoint: 'https://npm-proxy-p-v2.vercel.app/api/graphql-proxy',
  securityMode: 'proxy', // ✅ SECURE - No API keys in client code
  clientId: 'my-react-app',
  timeout: 30000
});

const client = getClient();

// ============================================================================
// 🔐 Authentication Flow Examples
// ============================================================================

/**
 * Example 1: User Login
 */
async function userLogin(email: string, password: string) {
  try {
    console.log('🔐 Attempting login...');
    
    // Login mutation
    const loginMutation = `
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          access_token
          user {
            id
            email
            name
          }
        }
      }
    `;

    // Execute login
    const result = await client.mutate(loginMutation, {
      email,
      password
    });

    // Store token automatically (client handles this now)
    const accessToken = result.login.access_token;
    client.setAccessToken(accessToken);

    console.log('✅ Login successful!');
    console.log('👤 User:', result.login.user);
    console.log('🔑 Token stored automatically');
    
    return result.login;

  } catch (error) {
    console.error('❌ Login failed:', error);
    throw error;
  }
}

/**
 * Example 2: Authenticated Query
 */
async function getAuthenticatedUserData() {
  try {
    console.log('🔍 Fetching authenticated user data...');
    
    // Check if user is authenticated
    if (!client.isAuthenticated()) {
      throw new Error('User not authenticated. Please login first.');
    }

    // Query that requires authentication
    const userQuery = `
      query GetUserProfile {
        me {
          id
          email
          name
          profile {
            avatar
            preferences
          }
        }
      }
    `;

    // Execute query (Authorization header is automatically included)
    const result = await client.query(userQuery);
    
    console.log('✅ User data fetched successfully!');
    console.log('👤 Profile:', result.me);
    
    return result.me;

  } catch (error) {
    console.error('❌ Failed to fetch user data:', error);
    throw error;
  }
}

/**
 * Example 3: Authenticated Mutation
 */
async function updateUserProfile(updates: any) {
  try {
    console.log('✏️ Updating user profile...');
    
    // Check authentication
    if (!client.isAuthenticated()) {
      throw new Error('User not authenticated. Please login first.');
    }

    // Update profile mutation
    const updateMutation = `
      mutation UpdateProfile($input: ProfileUpdateInput!) {
        updateProfile(input: $input) {
          id
          email
          name
          profile {
            avatar
            preferences
          }
        }
      }
    `;

    // Execute mutation
    const result = await client.mutate(updateMutation, {
      input: updates
    });
    
    console.log('✅ Profile updated successfully!');
    console.log('👤 Updated profile:', result.updateProfile);
    
    return result.updateProfile;

  } catch (error) {
    console.error('❌ Failed to update profile:', error);
    throw error;
  }
}

/**
 * Example 4: User Logout
 */
function userLogout() {
  try {
    console.log('🚪 Logging out...');
    
    // Clear the access token
    client.clearAccessToken();
    
    console.log('✅ Logout successful!');
    console.log('🔑 Token cleared from localStorage');
    
    // Verify token is cleared
    if (!client.isAuthenticated()) {
      console.log('✅ Authentication status verified: User is logged out');
    }
    
  } catch (error) {
    console.error('❌ Logout failed:', error);
    throw error;
  }
}

/**
 * Example 5: Check Authentication Status
 */
function checkAuthStatus() {
  const isAuthenticated = client.isAuthenticated();
  const accessToken = client.getAccessToken();
  
  console.log('🔍 Authentication Status Check:');
  console.log('   Is Authenticated:', isAuthenticated);
  console.log('   Has Access Token:', !!accessToken);
  console.log('   Token Preview:', accessToken ? `${accessToken.substring(0, 20)}...` : 'None');
  
  return {
    isAuthenticated,
    hasToken: !!accessToken
  };
}

// ============================================================================
// 🧪 Test Authentication Flow
// ============================================================================

async function testAuthenticationFlow() {
  console.log('🚀 Starting Authentication Flow Test...\n');
  
  try {
    // 1. Check initial status
    console.log('📋 Step 1: Initial Status');
    checkAuthStatus();
    console.log('');
    
    // 2. Attempt login
    console.log('📋 Step 2: User Login');
    await userLogin('test@example.com', 'password123');
    console.log('');
    
    // 3. Check status after login
    console.log('📋 Step 3: Status After Login');
    checkAuthStatus();
    console.log('');
    
    // 4. Fetch authenticated data
    console.log('📋 Step 4: Fetch Authenticated Data');
    await getAuthenticatedUserData();
    console.log('');
    
    // 5. Update profile
    console.log('📋 Step 5: Update Profile');
    await updateUserProfile({
      name: 'Updated Name',
      preferences: { theme: 'dark' }
    });
    console.log('');
    
    // 6. Logout
    console.log('📋 Step 6: User Logout');
    userLogout();
    console.log('');
    
    // 7. Final status check
    console.log('📋 Step 7: Final Status Check');
    checkAuthStatus();
    console.log('');
    
    console.log('🎉 Authentication Flow Test Completed Successfully!');
    
  } catch (error) {
    console.error('💥 Authentication Flow Test Failed:', error);
  }
}

// ============================================================================
// 🔧 Utility Functions
// ============================================================================

/**
 * Refresh token if needed
 */
async function refreshTokenIfNeeded() {
  try {
    const accessToken = client.getAccessToken();
    
    if (!accessToken) {
      return false; // No token to refresh
    }
    
    // Check if token is expired (you might want to decode JWT to check expiration)
    // For now, we'll just return true if token exists
    return true;
    
  } catch (error) {
    console.error('❌ Token refresh check failed:', error);
    return false;
  }
}

/**
 * Handle authentication errors
 */
function handleAuthError(error: any) {
  if (error.message?.includes('unauthorized') || error.message?.includes('401')) {
    console.log('🔐 Authentication error detected, clearing token...');
    client.clearAccessToken();
    // Redirect to login page or show login modal
    return true; // Error was handled
  }
  return false; // Error was not handled
}

// ============================================================================
// 📱 React/Vue/Angular Integration Examples
// ============================================================================

/**
 * React Hook Example (if using React)
 */
/*
import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const authStatus = client.isAuthenticated();
    setIsAuthenticated(authStatus);
    setLoading(false);
  };

  const login = async (email: string, password: string) => {
    try {
      const result = await userLogin(email, password);
      setUser(result.user);
      setIsAuthenticated(true);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    userLogout();
    setUser(null);
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    checkAuthStatus
  };
}
*/

// ============================================================================
// 🚀 Export Functions
// ============================================================================

export {
  userLogin,
  userLogout,
  getAuthenticatedUserData,
  updateUserProfile,
  checkAuthStatus,
  testAuthenticationFlow,
  refreshTokenIfNeeded,
  handleAuthError
};

// Uncomment to run the test
// testAuthenticationFlow(); 