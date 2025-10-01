import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleArrayExpressionOperators } from '../enum/BusinessRuleArrayExpressionOperators';
/**
 Represents a business rule array expression
 */
export class BusinessRuleArrayExpression {
  /** id field */
  private _id: string | number;
  /** type field */
  private _type: BusinessRuleExpressionTypes;
  /** operator field */
  private _operator: BusinessRuleArrayExpressionOperators;
  /** string field */
  private _string?: string;
  /** number field */
  private _number?: number;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/array for options. */
  private _path?: string;
  /**
   Creates a new instance of BusinessRuleArrayExpression
   */
  constructor(data: Partial<BusinessRuleArrayExpression> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._operator = data.operator!;
    this._string = data.string;
    this._number = data.number;
    this._path = data.path;
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
  get operator(): BusinessRuleArrayExpressionOperators {
    return this._operator;
  }
  /**
   operator field
   */
  set operator(value: BusinessRuleArrayExpressionOperators) {
    this._operator = value;
  }
  /**
   string field
   */
  get string(): string | undefined {
    return this._string;
  }
  /**
   string field
   */
  set string(value: string | undefined) {
    this._string = value;
  }
  /**
   number field
   */
  get number(): number | undefined {
    return this._number;
  }
  /**
   number field
   */
  set number(value: number | undefined) {
    this._number = value;
  }
  /**
   Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/array for options.
   */
  get path(): string | undefined {
    return this._path;
  }
  /**
   Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/array for options.
   */
  set path(value: string | undefined) {
    this._path = value;
  }
}