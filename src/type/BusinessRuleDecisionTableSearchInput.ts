/**
 Input object for BusinessRuleDecisionTableSearchInput
 */
export interface BusinessRuleDecisionTableSearchInput {
  /** The ID of the BusinessRule to search for */
  ruleId: string | number;
  /** The ID of the DecisionTable inside BusinessRule */
  tableId: string | number;
}