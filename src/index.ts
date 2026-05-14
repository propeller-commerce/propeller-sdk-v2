/**
 * Main entry point for the Propeller GraphQL package
 * TypeScript GraphQL client and types for Propeller eCommerce Platform
 * @packageDocumentation
 */

// Export GraphQL Client and related utilities
export * from './client';

// Export all services
export * from './service';

// Export all GraphQL types and interfaces in a namespace to avoid conflicts
export * from './type';

// Export all GraphQL enums at the top level. Consumers preferring the
// `Enums.*` qualified call-site form can use a namespace import:
//   import * as Enums from 'propeller-sdk-v2';
export * from './enum';
