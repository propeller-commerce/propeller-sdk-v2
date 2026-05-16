/**
 * Main entry point for the Propeller GraphQL SDK.
 * TypeScript GraphQL client and types for Propeller eCommerce Platform.
 *
 * @packageDocumentation
 */

// GraphQL client + helpers (createClient, GraphQLClient, GraphQLOperationError, …).
export * from './client';

// Service factories (productService(client) → { getProduct, ... }) and BC
// class shims (new ProductService(client) → same methods).
export * from './service';

// Response/input interfaces — all plain interfaces as of v0.10.0.
export * from './type';

// Enums at the top level. Consumers preferring the `Enums.*` qualified
// call-site form can use a namespace import:
//   import * as Enums from 'propeller-sdk-v2';
export * from './enum';

// Utility helpers (getLocalized).
export * from './util';
