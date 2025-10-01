import { BusinessRuleDecisionTableRowReorderDirection } from '../enum/BusinessRuleDecisionTableRowReorderDirection';
/**
 Input object for BusinessRuleDecisionTableMoveRowInput
 */
export interface BusinessRuleDecisionTableMoveRowInput {
  /** The ID of the row to move */
  rowId: string | number;
  /** The ID of the row to move to */
  targetRowId: string | number;
  /** The direction of the move action relative to the target row, either 'above' or 'below' */
  direction: BusinessRuleDecisionTableRowReorderDirection;
  /** The ID of the BusinessRule that contains the table */
  ruleId: string | number;
  /** The ID of the DecisionTable inside BusinessRule that contains the rows to move */
  tableId: string | number;
}