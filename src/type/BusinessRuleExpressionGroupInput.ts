import { BusinessRuleExpressionGroupOperators } from '../enum/BusinessRuleExpressionGroupOperators';
import { BusinessRuleExpressionUnionInput } from './BusinessRuleExpressionUnionInput';
/**
 Input object for BusinessRuleExpressionGroupInput
 */
export interface BusinessRuleExpressionGroupInput {
  /** All expressions in this group */
  expressions: BusinessRuleExpressionUnionInput[];
  /** The operator to apply between each expression in this group */
  operator?: BusinessRuleExpressionGroupOperators;
}