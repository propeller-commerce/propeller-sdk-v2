import { BusinessRuleDecisionTableColumnType } from '../enum/BusinessRuleDecisionTableColumnType';
/**
 Input object for BusinessRuleDecisionTableAddColumnInput
 */
export interface BusinessRuleDecisionTableAddColumnInput {
  /** The name for the input or output column */
  name: string;
  /** The field of the input or output column.
  In case of an input column this is the full path the root of the input payload of the rule.
  In case of an output column it's the fieldname you want to output after the rule has been executed.
  Output fields can be organized by using the dot notation.
  For example:
  - input: "input.name"
  - output: "output.name.firstname"
  - output: "output.name.lastname" */
  field: string;
  /** The ID of the BusinessRule to search for */
  ruleId: string | number;
  /** type input field */
  type: BusinessRuleDecisionTableColumnType;
  /** The ID of the DecisionTable inside BusinessRule to add the column to */
  tableId: string | number;
}