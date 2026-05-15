import { BusinessRuleExpressionGroupOperators } from '../enum/BusinessRuleExpressionGroupOperators';
import { IBusinessRuleExpression } from './IBusinessRuleExpression';
/**
 Represents a business rule expression group
 */
export class BusinessRuleExpressionGroup {
  /** id field */
  id!: string | number;
  /** expressions field */
  expressions!: IBusinessRuleExpression[];
  /** operator field */
  operator?: BusinessRuleExpressionGroupOperators;
  constructor(data: Partial<BusinessRuleExpressionGroup> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `expressions`. */
  getExpressions(): IBusinessRuleExpression[] {
    return this.expressions;
  }
  /** Returns `operator`. */
  getOperator(): BusinessRuleExpressionGroupOperators | undefined {
    return this.operator;
  }
}