/**
 * Thrown when a GraphQL operation returns one or more errors in its response.
 *
 * Replaces the previous behavior where errors were silently logged and the
 * caller was handed a response with `data: undefined`, which then crashed
 * downstream wrapper constructors with confusing `TypeError`s.
 */
export interface GraphQLErrorEntry {
  message: string;
  locations?: Array<{ line: number; column: number }>;
  path?: Array<string | number>;
  extensions?: Record<string, any>;
}

export class GraphQLOperationError extends Error {
  readonly name = 'GraphQLOperationError';
  readonly errors: GraphQLErrorEntry[];
  readonly operationName?: string;
  readonly variables?: Record<string, any>;

  constructor(
    errors: GraphQLErrorEntry[],
    operationName?: string,
    variables?: Record<string, any>
  ) {
    const summary = errors.map(e => e.message).join('; ');
    const opLabel = operationName ? ` (${operationName})` : '';
    super(`GraphQL operation failed${opLabel}: ${summary}`);
    this.errors = errors;
    this.operationName = operationName;
    this.variables = variables;
    Object.setPrototypeOf(this, GraphQLOperationError.prototype);
  }
}
