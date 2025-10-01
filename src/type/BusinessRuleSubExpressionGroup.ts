import { BusinessRuleExpressionGroupOperators } from '../enum/BusinessRuleExpressionGroupOperators';
import { IBusinessRuleExpression } from './IBusinessRuleExpression';
/**
 Represents a business rule expression group when used as sub-expressions in a complex expression
 */
export class BusinessRuleSubExpressionGroup {
  /** id field */
  private _id: string | number;
  /** field field */
  private _field: string;
  /** expressions field */
  private _expressions: IBusinessRuleExpression[];
  /** operator field */
  private _operator?: BusinessRuleExpressionGroupOperators;
  /**
   Creates a new instance of BusinessRuleSubExpressionGroup
   */
  constructor(data: Partial<BusinessRuleSubExpressionGroup> = {}) {
    this._id = data.id!;
    this._field = data.field!;
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
   field field
   */
  get field(): string {
    return this._field;
  }
  /**
   field field
   */
  set field(value: string) {
    this._field = value;
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