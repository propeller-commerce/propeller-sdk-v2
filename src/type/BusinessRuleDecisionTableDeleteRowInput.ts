/**
 Input object for BusinessRuleDecisionTableDeleteRowInput
 */
export interface BusinessRuleDecisionTableDeleteRowInput {
  /** The ID of the row to delete */
  rowId: string | number;
  /** The ID of the BusinessRule that contains the row */
  ruleId: string | number;
  /** The ID of the DecisionTable inside BusinessRule that contains the row */
  tableId: string | number;
}