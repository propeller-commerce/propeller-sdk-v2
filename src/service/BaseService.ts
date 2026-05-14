import { GraphQLClient } from '../client/GraphQLClient';
import { GraphQLOperationError } from '../client/GraphQLOperationError';
import { resolveFragments } from '../client/fragmentResolver';
import { queries } from '../generated/queries';
import { mutations } from '../generated/mutations';

/**
 * Base service class providing common GraphQL operations.
 *
 * Fragment inlining is handled by the shared module-scoped resolver in
 * `../client/fragmentResolver`, so all services share a single parsed fragment
 * registry and a single resolved-operation cache across the process.
 */
export abstract class BaseService {
    protected client: GraphQLClient;

    constructor(client: GraphQLClient) {
        this.client = client;
    }

    /**
     * Execute a query with automatic fragment inlining.
     *
     * Throws `GraphQLOperationError` when the server returns a non-empty
     * `errors` array. Returns the raw response object (with `data`) on success.
     */
    protected async executeQuery(queryName: string, variables: any = {}): Promise<any> {
        const queryString = (queries as Record<string, string>)[queryName];
        if (!queryString) {
            throw new Error(`Query '${queryName}' not found in bundled queries`);
        }
        const resolved = resolveFragments(queryString);
        const result = await this.client.execute({
            query: resolved,
            variables,
            operationName: queryName,
            skipFragmentResolution: true,
        });
        if (result.errors && result.errors.length > 0) {
            throw new GraphQLOperationError(result.errors, queryName, variables);
        }
        return result;
    }

    /**
     * Execute a mutation with automatic fragment inlining.
     *
     * Throws `GraphQLOperationError` when the server returns a non-empty
     * `errors` array. Returns the raw response object (with `data`) on success.
     */
    protected async executeMutation(mutationName: string, variables: any = {}): Promise<any> {
        const mutationString = (mutations as Record<string, string>)[mutationName];
        if (!mutationString) {
            throw new Error(`Mutation '${mutationName}' not found in bundled mutations`);
        }
        const resolved = resolveFragments(mutationString);
        const result = await this.client.execute({
            query: resolved,
            variables,
            operationName: mutationName,
            skipFragmentResolution: true,
        });
        if (result.errors && result.errors.length > 0) {
            throw new GraphQLOperationError(result.errors, mutationName, variables);
        }
        return result;
    }
}
