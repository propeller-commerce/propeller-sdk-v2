import { GraphQLClient, GraphQLResponse } from '../client/GraphQLClient';
import { GraphQLOperationError } from '../client/GraphQLOperationError';

/**
 * A `GraphQLResponse` whose `data` is guaranteed present. `runOperation`
 * narrows to this so service methods can read `result.data.<field>` without a
 * null check — it throws rather than ever returning absent data.
 */
export type ResolvedResponse<TData> = GraphQLResponse<TData> & { data: TData };

/**
 * Internal helper used by every service factory and free-function operation.
 *
 * Executes a GraphQL document against the client and resolves to a response
 * whose `data` is non-null and typed by `TData`.
 *
 * Error semantics:
 *   - Errors AND no `data` → throws `GraphQLOperationError` (hard failure).
 *   - No errors but also no `data` (malformed/empty response) → throws
 *     `GraphQLOperationError` so callers never silently deref `undefined`.
 *   - Partial response (data present alongside errors — the normal GraphQL
 *     contract) → by default returns the data and surfaces the errors via the
 *     client debug log. Set `throwOnPartialErrors: true` in the client config
 *     (review finding #7) to throw on partial errors instead of swallowing
 *     them. Either way, callers wanting the raw errors without throwing can
 *     use `client.execute({ ... })` directly.
 *
 * Internal — not part of the public API. Use the service factories
 * (`productService(client).getProduct(...)`) or, for the lower-level path,
 * `client.execute({ ... })`.
 *
 * The `TData` type parameter describes the shape of `result.data` for the
 * operation — service methods pass `runOperation<{ <rootField>: <ReturnType> }>`
 * so `result.data.<rootField>` is genuinely typed rather than `any`.
 */
export async function runOperation<TData = any>(
  client: GraphQLClient,
  document: string,
  operationName: string,
  variables: any = {}
): Promise<ResolvedResponse<TData>> {
  const result = await client.execute<TData>({
    query: document,
    variables,
    operationName,
  });
  const hasData = result.data !== undefined && result.data !== null;

  if (result.errors && result.errors.length > 0) {
    if (!hasData) {
      throw new GraphQLOperationError(result.errors, operationName, variables, document);
    }
    if (client.getConfig().throwOnPartialErrors) {
      throw new GraphQLOperationError(result.errors, operationName, variables, document);
    }
    if (client.getConfig().debug) {
      // eslint-disable-next-line no-console
      console.warn(
        `[GraphQL Client] Partial response for ${operationName} — returning data alongside ${result.errors.length} error(s)`
      );
    }
  } else if (!hasData) {
    // No errors but no data either — a malformed/empty response. Throwing
    // here is what lets the return type promise a non-null `data`.
    throw new GraphQLOperationError(
      [{ message: `Operation "${operationName}" returned no data and no errors.` }],
      operationName,
      variables,
      document
    );
  }

  return result as ResolvedResponse<TData>;
}
