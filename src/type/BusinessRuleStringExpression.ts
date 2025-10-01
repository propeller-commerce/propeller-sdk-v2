import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleStringExpressionOperators } from '../enum/BusinessRuleStringExpressionOperators';
/**
 Represents a business rule string expression
 */
export class BusinessRuleStringExpression {
  /** id field */
  private _id: string | number;
  /** type field */
  private _type: BusinessRuleExpressionTypes;
  /** operator field */
  private _operator: BusinessRuleStringExpressionOperators;
  /** string field */
  private _string: string;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/string for options. */
  private _path?: string;
  /**
   Creates a new instance of BusinessRuleStringExpression
   */
  constructor(data: Partial<BusinessRuleStringExpression> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._operator = data.operator!;
    this._string = data.string!;
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
  get operator(): BusinessRuleStringExpressionOperators {
    return this._operator;
  }
  /**
   operator field
   */
  set operator(value: BusinessRuleStringExpressionOperators) {
    this._operator = value;
  }
  /**
   string field
   */
  get string(): string {
    return this._string;
  }
  /**
   string field
   */
  set string(value: string) {
    this._string = value;
  }
  /**
   Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/string for options.
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
      Check https://gorules.io/docs/rules-engine/expression-language/string for options.
   */
  set path(value: string | undefined) {
    this._path = value;
  }
}