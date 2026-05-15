import { BusinessRuleExpressionTypes } from '../enum/BusinessRuleExpressionTypes';
import { BusinessRuleStringExpressionOperators } from '../enum/BusinessRuleStringExpressionOperators';
/**
 Represents a business rule string expression
 */
export class BusinessRuleStringExpression {
  /** id field */
  id!: string | number;
  /** type field */
  type!: BusinessRuleExpressionTypes;
  /** operator field */
  operator!: BusinessRuleStringExpressionOperators;
  /** string field */
  string!: string;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/string for options. */
  path?: string;
  constructor(data: Partial<BusinessRuleStringExpression> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `type`. */
  getType(): BusinessRuleExpressionTypes {
    return this.type;
  }
  /** Returns `operator`. */
  getOperator(): BusinessRuleStringExpressionOperators {
    return this.operator;
  }
  /** Returns `string`. */
  getString(): string {
    return this.string;
  }
  /** Returns `path`. */
  getPath(): string | undefined {
    return this.path;
  }
}