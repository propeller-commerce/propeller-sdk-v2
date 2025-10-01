import { BusinessRuleExpressionGroupOperators } from '../enum/BusinessRuleExpressionGroupOperators';
import { IBusinessRuleExpression } from './IBusinessRuleExpression';
/**
 Represents a business rule expression group
 */
export class BusinessRuleExpressionGroup {
  /** id field */
  private _id: string | number;
  /** expressions field */
  private _expressions: IBusinessRuleExpression[];
  /** operator field */
  private _operator?: BusinessRuleExpressionGroupOperators;
  /**
   Creates a new instance of BusinessRuleExpressionGroup
   */
  constructor(data: Partial<BusinessRuleExpressionGroup> = {}) {
    this._id = data.id!;
    this._expressions = data.expressions!;
    this._operator = data.operator;
  }
  /**
   id field
   */
  get id(): string | number {
    return this._id;
  }
  /**
   id field
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   expressions field
   */
  get expressions(): IBusinessRuleExpression[] {
    return this._expressions;
  }
  /**
   expressions field
   */
  set expressions(value: IBusinessRuleExpression[]) {
    this._expressions = value;
  }
  /**
   operator field
   */
  get operator(): BusinessRuleExpressionGroupOperators | undefined {
    return this._operator;
  }
  /**
   operator field
   */
  set operator(value: BusinessRuleExpressionGroupOperators | undefined) {
    this._operator = value;
  }
}