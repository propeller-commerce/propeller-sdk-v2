import { BusinessRuleDecisionTableColumnType } from '../enum/BusinessRuleDecisionTableColumnType';
/**
 Input object for BusinessRuleDecisionTableDeleteColumnInput
 */
export interface BusinessRuleDecisionTableDeleteColumnInput {
  /** The ID of the column to delete */
  columnId: string | number;
  /** The ID of the BusinessRule to search for */
  ruleId: string | number;
  /** The type of the column to delete, either 'input' or 'output' */
  type: BusinessRuleDecisionTableColumnType;
  /** The ID of the DecisionTable inside BusinessRule that contains the column */
  tableId: string | number;
}