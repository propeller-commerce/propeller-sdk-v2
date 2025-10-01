import { NumberExpressionOperator } from '../enum/NumberExpressionOperator';
/**
 Input object for IntegerRangeSearchInput
 */
export interface IntegerRangeSearchInput {
  /** Integer range operator */
  operator: NumberExpressionOperator;
  /** Integer value to search for */
  value: number;
}