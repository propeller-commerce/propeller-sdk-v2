import { BusinessRuleStringExpressionOperators } from '../enum/BusinessRuleStringExpressionOperators';
/**
 Represents the input for a business rule string expression
 */
export interface BusinessRuleStringExpressionInput {
  /** The operator for the expression */
  operator: BusinessRuleStringExpressionOperators;
  /** The value for the expression */
  string: string;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/string for options. */
  path?: string;
}