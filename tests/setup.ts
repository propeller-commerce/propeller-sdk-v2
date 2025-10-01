// Test setup file
// This file is loaded before each test

// Export test utilities
export const testUtils = {
  // Helper to create mock GraphQL responses
  createMockResponse: <T>(data: T) => ({
    data,
    errors: undefined,
    extensions: undefined,
  }),
  
  // Helper to create mock GraphQL errors
  createMockError: (message: string, path?: string[]) => ({
    message,
    locations: [{ line: 1, column: 1 }],
    path,
  }),
  
  // Helper to wait for async operations
  wait: (ms: number) => new Promise(resolve => setTimeout(resolve, ms)),
}; 