import { BusinessRuleExpressionGroupOperators } from '../enum/BusinessRuleExpressionGroupOperators';
import { IBusinessRuleExpression } from './IBusinessRuleExpression';
/**
 Represents a business rule expression group when used as sub-expressions in a complex expression
 */
export class BusinessRuleSubExpressionGroup {
  /** id field */
  id!: string | number;
  /** field field */
  field!: string;
  /** expressions field */
  expressions!: IBusinessRuleExpression[];
  /** operator field */
  operator?: BusinessRuleExpressionGroupOperators;
  constructor(data: Partial<BusinessRuleSubExpressionGroup> = {}) {
    Object.assign(this, data);
  }
}