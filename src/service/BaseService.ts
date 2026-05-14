import { GraphQLClient } from '../client/GraphQLClient';
import { GraphQLOperationError } from '../client/GraphQLOperationError';
import { queries } from '../generated/queries';
import { mutations } from '../generated/mutations';

/**
 * Base service class providing common GraphQL operations.
 *
 * As of 0.4.0, fragment inlining is performed at build time by
 * `scripts/build-graphql-bundle.js`, so the strings in `generated/queries`
 * and `generated/mutations` already contain every fragment they reference.
 * There is no runtime fragment-resolution step here or in `GraphQLClient`.
 */
export abstract class BaseService {
    protected client: GraphQLClient;

    constructor(client: GraphQLClient) {
        this.client = client;
    }

    /**
     * Execute a query.
     *
     * Throws `GraphQLOperationError` when the server returns a non-empty
     * `errors` array. Returns the raw response object (with `data`) on success.
     */
    protected async executeQuery(queryName: string, variables: any = {}): Promise<any> {
        const queryString = (queries as Record<string, string>)[queryName];
        if (!queryString) {
            throw new Error(`Query '${queryName}' not found in bundled queries`);
        }
        const result = await this.client.execute({
            query: queryString,
            variables,
            operationName: queryName,
        });
        if (result.errors && result.errors.length > 0) {
            throw new GraphQLOperationError(result.errors, queryName, variables);
        }
        return result;
    }

    /**
     * Execute a mutation.
     *
     * Throws `GraphQLOperationError` when the server returns a non-empty
     * `errors` array. Returns the raw response object (with `data`) on success.
     */
    protected async executeMutation(mutationName: string, variables: any = {}): Promise<any> {
        const mutationString = (mutations as Record<string, string>)[mutationName];
        if (!mutationString) {
            throw new Error(`Mutation '${mutationName}' not found in bundled mutations`);
        }
        const result = await this.client.execute({
            query: mutationString,
            variables,
            operationName: mutationName,
        });
        if (result.errors && result.errors.length > 0) {
            throw new GraphQLOperationError(result.errors, mutationName, variables);
        }
        return result;
    }
}
