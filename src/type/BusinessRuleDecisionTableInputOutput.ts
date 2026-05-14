/**
 Definition of a decisionTable's input or output column
 */
export class BusinessRuleDecisionTableInputOutput {
  /** The generated ID for this input or output column */
  id!: string | number;
  /** The name for the input or output column */
  name!: string;
  /** The field of the input or output column.
  In case of inputs this is the full path of from the root of the input payload of the rule.
  In case of an output column it's the fieldname you want to output after the rule has been executed.
  Output fields can be organized by using the dot notation.
  For example:
  - input: "input.name"
  - output: "output.name.firstname"
  - output: "output.name.lastname" */
  field!: string;
  /** The type of the input or output column, currently only "expression" is used. */
  type!: string;
  constructor(data: Partial<BusinessRuleDecisionTableInputOutput> = {}) {
    Object.assign(this, data);
  }
}