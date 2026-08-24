/**
 * Main entry point for the Propeller GraphQL SDK.
 * TypeScript GraphQL client and types for Propeller eCommerce Platform.
 *
 * @packageDocumentation
 */

// GraphQL client + helpers (createClient, GraphQLClient, GraphQLOperationError, …).
export * from './client';

// Service factories (productService(client) → { getProduct, ... }) and BC
// class shims (new ProductService(client) → same methods). Service files also
// export their hand-authored `<Op>QueryVariables` / kept `<Op>Variables`
// interfaces.
export * from './service';

// Schema-faithful generated operation-variable interfaces (`<Op>Variables`),
// re-exported via the PUBLIC barrel which lists only names the generator
// actually declared — never a name a service hand-authors — so there is no
// ambiguous re-export with './service'. Misaligned service methods take these
// as their single `variables` argument.
export * from './generated/operationVariablesPublic';

// Response/input interfaces — all plain interfaces as of v0.10.0.
export * from './type';

// Enums at the top level. Consumers preferring the `Enums.*` qualified
// call-site form can use a namespace import:
//   import * as Enums from 'propeller-sdk-v2';
export * from './enum';

// Utility helpers (getLocalized).
export * from './util';
