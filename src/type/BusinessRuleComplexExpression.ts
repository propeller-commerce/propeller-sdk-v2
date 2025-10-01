import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
import { BusinessRuleComplexExpressionAction } from '../enum/BusinessRuleComplexExpressionAction';
import { BusinessRuleSubExpressionGroup } from './BusinessRuleSubExpressionGroup';
/**
 Represents a business rule  complex expression
 */
export class BusinessRuleComplexExpression {
  /** id field */
  private _id: string | number;
  /** type field */
  private _type: BusinessRuleExpressionTypes;
  /** operator field */
  private _operator?: BusinessRuleNumberExpressionOperators;
  /** The action to execute with this complex expression
        , either 'sum' a sub field that is present in the expression's path
        or 'count' to count the length of the filtered array.  */
  private _action: BusinessRuleComplexExpressionAction;
  /** The path to the field to apply the action to in case the action equals 'sum' */
  private _field?: string;
  /** The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression */
  private _path?: string;
  /** number field */
  private _number: number;
  /** expressions field */
  private _expressions?: BusinessRuleSubExpressionGroup[];
  /**
   Creates a new instance of BusinessRuleComplexExpression
   */
  constructor(data: Partial<BusinessRuleComplexExpression> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._operator = data.operator;
    this._action = data.action!;
    this._field = data.field;
    this._path = data.path;
    this._number = data.number!;
    this._expressions = data.expressions;
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
   type field
   */
  get type(): BusinessRuleExpressionTypes {
    return this._type;
  }
  /**
   type field
   */
  set type(value: BusinessRuleExpressionTypes) {
    this._type = value;
  }
  /**
   operator field
   */
  get operator(): BusinessRuleNumberExpressionOperators | undefined {
    return this._operator;
  }
  /**
   operator field
   */
  set operator(value: BusinessRuleNumberExpressionOperators | undefined) {
    this._operator = value;
  }
  /**
   The action to execute with this complex expression
        , either 'sum' a sub field that is present in the expression's path
        or 'count' to count the length of the filtered array.
   */
  get action(): BusinessRuleComplexExpressionAction {
    return this._action;
  }
  /**
   The action to execute with this complex expression
        , either 'sum' a sub field that is present in the expression's path
        or 'count' to count the length of the filtered array.
   */
  set action(value: BusinessRuleComplexExpressionAction) {
    this._action = value;
  }
  /**
   The path to the field to apply the action to in case the action equals 'sum'
   */
  get field(): string | undefined {
    return this._field;
  }
  /**
   The path to the field to apply the action to in case the action equals 'sum'
   */
  set field(value: string | undefined) {
    this._field = value;
  }
  /**
   The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression
   */
  get path(): string | undefined {
    return this._path;
  }
  /**
   The path to the field this complex expression targets, defaults to $. Has to be set in case of it being a sub-expression
   */
  set path(value: string | undefined) {
    this._path = value;
  }
  /**
   number field
   */
  get number(): number {
    return this._number;
  }
  /**
   number field
   */
  set number(value: number) {
    this._number = value;
  }
  /**
   expressions field
   */
  get expressions(): BusinessRuleSubExpressionGroup[] | undefined {
    return this._expressions;
  }
  /**
   expressions field
   */
  set expressions(value: BusinessRuleSubExpressionGroup[] | undefined) {
    this._expressions = value;
  }
}