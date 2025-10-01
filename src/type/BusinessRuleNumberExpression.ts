import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleNumberExpressionOperators } from '../enum/BusinessRuleNumberExpressionOperators';
/**
 Represents a business rule number expression
 */
export class BusinessRuleNumberExpression {
  /** id field */
  private _id: string | number;
  /** type field */
  private _type: BusinessRuleExpressionTypes;
  /** operator field */
  private _operator: BusinessRuleNumberExpressionOperators;
  /** number field */
  private _number: number;
  /** Path to the field, can be used to add additional expressions and calculations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/number for options. */
  private _path?: string;
  /**
   Creates a new instance of BusinessRuleNumberExpression
   */
  constructor(data: Partial<BusinessRuleNumberExpression> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._operator = data.operator!;
    this._number = data.number!;
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
  get operator(): BusinessRuleNumberExpressionOperators {
    return this._operator;
  }
  /**
   operator field
   */
  set operator(value: BusinessRuleNumberExpressionOperators) {
    this._operator = value;
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
   Path to the field, can be used to add additional expressions and calculations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/number for options.
   */
  get path(): string | undefined {
    return this._path;
  }
  /**
   Path to the field, can be used to add additional expressions and calculations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/number for options.
   */
  set path(value: string | undefined) {
    this._path = value;
  }
}