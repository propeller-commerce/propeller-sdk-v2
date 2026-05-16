/**
 * GraphQL Client for Propeller eCommerce Platform
 * Exports the main GraphQL client class and related utilities.
 *
 * As of v0.10.0, `createClient()` is the preferred entry point.
 * The class form (`new GraphQLClient(...)`) is preserved for backwards
 * compatibility with code written against 0.9.x.
 */

export {
  GraphQLClient,
  createClient,
  createGraphQLClient,
  initializeClient,
  getClient,
} from './GraphQLClient';

export type {
  GraphQLOperation,
  GraphQLResponse,
  GraphQLClientConfig,
  AccessTokenProvider,
} from './GraphQLClient';

export { GraphQLOperationError } from './GraphQLOperationError';
export type { GraphQLErrorEntry } from './GraphQLOperationError';

/**
 * @description Default export for the GraphQL client
 */
export { GraphQLClient as default } from './GraphQLClient';
