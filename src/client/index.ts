/**
 * GraphQL Client for Propeller eCommerce Platform
 * Exports the main GraphQL client class and related utilities
 * @packageDocumentation
 */

export {
  GraphQLClient,
  createGraphQLClient,
  initializeClient,
  getClient,
  client
} from './GraphQLClient';

export type {
  GraphQLOperation,
  GraphQLResponse,
  GraphQLClientConfig
} from './GraphQLClient';

/**
 * @description Default export for the GraphQL client
 */
export { GraphQLClient as default } from './GraphQLClient'; 