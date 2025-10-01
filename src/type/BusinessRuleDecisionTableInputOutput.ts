/**
 Definition of a decisionTable's input or output column
 */
export class BusinessRuleDecisionTableInputOutput {
  /** The generated ID for this input or output column */
  private _id: string | number;
  /** The name for the input or output column */
  private _name: string;
  /** The field of the input or output column.
  In case of inputs this is the full path of from the root of the input payload of the rule.
  In case of an output column it's the fieldname you want to output after the rule has been executed.
  Output fields can be organized by using the dot notation.
  For example:
  - input: "input.name"
  - output: "output.name.firstname"
  - output: "output.name.lastname" */
  private _field: string;
  /** The type of the input or output column, currently only "expression" is used. */
  private _type: string;
  /**
   Creates a new instance of BusinessRuleDecisionTableInputOutput
   */
  constructor(data: Partial<BusinessRuleDecisionTableInputOutput> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._field = data.field!;
    this._type = data.type!;
  }
  /**
   The generated ID for this input or output column
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The generated ID for this input or output column
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The name for the input or output column
   */
  get name(): string {
    return this._name;
  }
  /**
   The name for the input or output column
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The field of the input or output column.
  In case of inputs this is the full path of from the root of the input payload of the rule.
  In case of an output column it's the fieldname you want to output after the rule has been executed.
  Output fields can be organized by using the dot notation.
  For example:
  - input: "input.name"
  - output: "output.name.firstname"
  - output: "output.name.lastname"
   */
  get field(): string {
    return this._field;
  }
  /**
   The field of the input or output column.
  In case of inputs this is the full path of from the root of the input payload of the rule.
  In case of an output column it's the fieldname you want to output after the rule has been executed.
  Output fields can be organized by using the dot notation.
  For example:
  - input: "input.name"
  - output: "output.name.firstname"
  - output: "output.name.lastname"
   */
  set field(value: string) {
    this._field = value;
  }
  /**
   The type of the input or output column, currently only "expression" is used.
   */
  get type(): string {
    return this._type;
  }
  /**
   The type of the input or output column, currently only "expression" is used.
   */
  set type(value: string) {
    this._type = value;
  }
}