import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
import { BusinessRuleComplexExpressionAction } from '../enum/BusinessRuleComplexExpressionAction';
import { BusinessRuleSubExpressionGroup } from './BusinessRuleSubExpressionGroup';
/**
 Represents a business rule  complex expression
 */
export class BusinessRuleComplexExpression {
  /** id field */
  id!: string | number;
  /** type field */
  type!: BusinessRuleExpressionTypes;
  /** operator field */
  operator?: BusinessRuleNumberExpressionOperators;
  /** The action to execute with this complex expression
        , either 'sum' a sub field that is present in the expression's path
        or 'count' to count the length of the filtered array.  */
  action!: BusinessRuleComplexExpressionAction;
  /** The path to the field to apply the action to in case the action equals 'sum' */
  field?: string;
  /** The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression */
  path?: string;
  /** number field */
  number!: number;
  /** expressions field */
  expressions?: BusinessRuleSubExpressionGroup[];
  constructor(data: Partial<BusinessRuleComplexExpression> = {}) {
    Object.assign(this, data);
  }
}