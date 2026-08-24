import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleArrayExpressionOperators } from '../enum/BusinessRuleArrayExpressionOperators';
/**
 Represents a business rule array expression
 */
export interface BusinessRuleArrayExpression {
  /** id field */
  id: string | number;
  /** type field */
  type: BusinessRuleExpressionTypes;
  /** operator field */
  operator: BusinessRuleArrayExpressionOperators;
  /** string field */
  string?: string;
  /** number field */
  number?: number;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/array for options. */
  path?: string;
}