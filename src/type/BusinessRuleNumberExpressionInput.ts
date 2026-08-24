import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
/**
 Represent the input for a business rule number expression
 */
export interface BusinessRuleNumberExpressionInput {
  /** The operator for this expression */
  operator: BusinessRuleNumberExpressionOperators;
  /** The value for this expression */
  number: number;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/string for options. */
  path?: string;
}