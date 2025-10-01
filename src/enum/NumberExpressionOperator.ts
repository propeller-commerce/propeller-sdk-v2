/**
 * @enum NumberExpressionOperator
 Enumeration of operators for number expressions
 */
export enum NumberExpressionOperator {
  /** Equal to */
  EQUAL = 'EQUAL',
  /** Not equal to */
  NOT_EQUAL = 'NOT_EQUAL',
  /** Less than */
  LESS_THAN = 'LESS_THAN',
  /** Less than or equal to */
  LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL',
  /** Greater than */
  GREATER_THAN = 'GREATER_THAN',
  /** Greater than or equal to */
  GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL',
  /** In range */
  IN_RANGE = 'IN_RANGE',
  /** Not in range */
  NOT_IN_RANGE = 'NOT_IN_RANGE',
  /** Is null */
  IS_NULL = 'IS_NULL',
  /** Is not null */
  IS_NOT_NULL = 'IS_NOT_NULL'
}