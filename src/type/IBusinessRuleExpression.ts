/**
 Base interface for business rule expressions
 */
export interface IBusinessRuleExpression {
  /** Expression identifier */
  id: string | number;
  /** Expression type */
  type: string;
  /** Expression operator */
  operator: string;
  /** Expression value */
  value: any;
}