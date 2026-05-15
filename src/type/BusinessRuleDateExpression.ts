/**
 Represents a business rule date expression
 */
export class BusinessRuleDateExpression {
  /** id field */
  id!: string | number;
  /** type field */
  type!: string;
  /** Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months */
  number?: number;
  /** Use when operator is before or after. */
  date?: string;
  /** Use on time based operators, 00:00:00 24h format. */
  string?: string;
  /** operator field */
  operator!: string;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options. */
  path?: string;
  constructor(data: Partial<BusinessRuleDateExpression> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `type`. */
  getType(): string {
    return this.type;
  }
  /** Returns `number`. */
  getNumber(): number | undefined {
    return this.number;
  }
  /** Returns `date`. */
  getDate(): string | undefined {
    return this.date;
  }
  /** Returns `string`. */
  getString(): string | undefined {
    return this.string;
  }
  /** Returns `operator`. */
  getOperator(): string {
    return this.operator;
  }
  /** Returns `path`. */
  getPath(): string | undefined {
    return this.path;
  }
}