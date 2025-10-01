/**
 Represents a business rule date expression
 */
export class BusinessRuleDateExpression {
  /** id field */
  private _id: string | number;
  /** type field */
  private _type: string;
  /** Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months */
  private _number?: number;
  /** Use when operator is before or after. */
  private _date?: string;
  /** Use on time based operators, 00:00:00 24h format. */
  private _string?: string;
  /** operator field */
  private _operator: string;
  /** Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options. */
  private _path?: string;
  /**
   Creates a new instance of BusinessRuleDateExpression
   */
  constructor(data: Partial<BusinessRuleDateExpression> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._number = data.number;
    this._date = data.date;
    this._string = data.string;
    this._operator = data.operator!;
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
  get type(): string {
    return this._type;
  }
  /**
   type field
   */
  set type(value: string) {
    this._type = value;
  }
  /**
   Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months
   */
  get number(): number | undefined {
    return this._number;
  }
  /**
   Use when operator calculates days or minutes from now or today, or when targeting specific days, weeks or months
   */
  set number(value: number | undefined) {
    this._number = value;
  }
  /**
   Use when operator is before or after.
   */
  get date(): string | undefined {
    return this._date;
  }
  /**
   Use when operator is before or after.
   */
  set date(value: string | undefined) {
    this._date = value;
  }
  /**
   Use on time based operators, 00:00:00 24h format.
   */
  get string(): string | undefined {
    return this._string;
  }
  /**
   Use on time based operators, 00:00:00 24h format.
   */
  set string(value: string | undefined) {
    this._string = value;
  }
  /**
   operator field
   */
  get operator(): string {
    return this._operator;
  }
  /**
   operator field
   */
  set operator(value: string) {
    this._operator = value;
  }
  /**
   Path to the field, can be used to add additional expressions and calulations on the field.
      Use $ to target the field's value.
      When omitted the field's value is used.
      The expression will be used on the left hand side of the operator.
      Can also be used to target a specific property in a complex expression's sub-expression
      Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options.
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
      Check https://gorules.io/docs/rules-engine/expression-language/date-and-time for options.
   */
  set path(value: string | undefined) {
    this._path = value;
  }
}