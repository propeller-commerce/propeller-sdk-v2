import { BusinessRuleDecisionTableCell } from './BusinessRuleDecisionTableCell';
/**
 Represents a single row in a business rule decision table.
 */
export interface BusinessRuleDecisionTableRow {
  /** The generated ID for the row */
  id: string | number;
  /** The row's input columns */
  inputs: BusinessRuleDecisionTableCell[];
  /** The row's output columns */
  outputs: BusinessRuleDecisionTableCell[];
}