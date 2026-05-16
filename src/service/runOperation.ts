import { GraphQLClient, GraphQLResponse } from '../client/GraphQLClient';
import { GraphQLOperationError } from '../client/GraphQLOperationError';

/**
 * Internal helper used by every service factory and free-function operation.
 *
 * Executes a GraphQL document against the client. Throws
 * `GraphQLOperationError` only when the response carries errors AND no `data`
 * — i.e. a hard failure. When the server returns a partial response (data
 * present alongside errors, the normal GraphQL contract), the data is returned
 * and the errors are surfaced via the client's debug log rather than thrown.
 * Callers wanting the raw errors in the partial case can use
 * `client.execute({ ... })` directly, which never throws.
 *
 * Consumers should not need to import this directly — use the service factories
 * (`productService(client).getProduct(...)`) or, for the lower-level path,
 * `client.execute({ ... })`.
 */
export async function runOperation<T = any>(
  client: GraphQLClient,
  document: string,
  operationName: string,
  variables: any = {}
): Promise<GraphQLResponse<T>> {
  const result = await client.execute<T>({
    query: document,
    variables,
    operationName,
  });
  if (result.errors && result.errors.length > 0) {
    const hasData = result.data !== undefined && result.data !== null;
    if (!hasData) {
      throw new GraphQLOperationError(result.errors, operationName, variables, document);
    }
    if (client.getConfig().debug) {
      // eslint-disable-next-line no-console
      console.warn(
        `[GraphQL Client] Partial response for ${operationName} — returning data alongside ${result.errors.length} error(s)`
      );
    }
  }
  return result;
}
