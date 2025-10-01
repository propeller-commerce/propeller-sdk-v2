import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
import { BusinessRuleComplexExpressionAction } from '../enum/BusinessRuleComplexExpressionAction';
import { BusinessRuleExpressionGroupInput } from './BusinessRuleExpressionGroupInput';
/**
 Represents the input for a complex epression
 */
export interface BusinessRuleComplexExpressionInput {
  /** The operator to use on the result of the action applied to the sub-expressions */
  operator: BusinessRuleNumberExpressionOperators;
  /** The value to compare the result of the action applied to the sub-expressions to */
  number: number;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/string for options. */
  path?: string;
  /** The action to execute with this complex expression
        , either 'sum' a sub field that is present in the expression's path
        or 'count' to count the length of the filtered array.  */
  action: BusinessRuleComplexExpressionAction;
  /** The path to the field to apply the action to in case the action equals 'sum' */
  field?: string;
  /** The sub-expressions for this complex expression */
  expressions?: BusinessRuleExpressionGroupInput[];
}