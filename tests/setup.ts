// Test setup file
// This file is loaded before each test (setupFilesAfterEach in jest.config.js).

// Load real-API credentials + fixtures from the gitignored `.env.local` at the
// repo root. Absent in CI, so the real-API integration suites gate on presence
// (see hasLiveCredentials() in ./config). `dotenv` is already a dependency.
import { config as loadEnv } from 'dotenv';
import { resolve } from 'path';
loadEnv({ path: resolve(__dirname, '..', '.env.local') });

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