import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
/**
 Represents a business rule number expression
 */
export interface BusinessRuleNumberExpression {
  /** id field */
  id: string | number;
  /** type field */
  type: BusinessRuleExpressionTypes;
  /** operator field */
  operator: BusinessRuleNumberExpressionOperators;
  /** number field */
  number: number;
  /** Path to the field, can be used to add additional expressions and calculations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/number for options. */
  path?: string;
}