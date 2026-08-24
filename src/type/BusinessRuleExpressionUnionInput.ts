import { BusinessRuleComplexExpressionInput } from './BusinessRuleComplexExpressionInput';
import { BusinessRuleStringExpressionInput } from './BusinessRuleStringExpressionInput';
import { BusinessRuleNumberExpressionInput } from './BusinessRuleNumberExpressionInput';
import { BusinessRuleArrayExpressionInput } from './BusinessRuleArrayExpressionInput';
import { BusinessRuleDateExpressionInput } from './BusinessRuleDateExpressionInput';
/**
 Expression union type that is used to list expressions inside an expression group. Each instance can contain one field
 */
export interface BusinessRuleExpressionUnionInput {
  /** complex input field */
  complex?: BusinessRuleComplexExpressionInput;
  /** string input field */
  string?: BusinessRuleStringExpressionInput;
  /** number input field */
  number?: BusinessRuleNumberExpressionInput;
  /** array input field */
  array?: BusinessRuleArrayExpressionInput;
  /** date input field */
  date?: BusinessRuleDateExpressionInput;
}