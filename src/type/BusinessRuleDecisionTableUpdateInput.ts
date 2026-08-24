import { BusinessRuleHitPolicyOption } from '../enum/BusinessRuleHitPolicyOption';
/**
 Input object for BusinessRuleDecisionTableUpdateInput
 */
export interface BusinessRuleDecisionTableUpdateInput {
  /** The ID of the BusinessRule that contains the table to update */
  ruleId: string | number;
  /** The ID of the DecisionTable inside BusinessRule to update */
  tableId: string | number;
  /** The name of the table */
  name?: string;
  /** The table's hitPolicy.
  Possible values: first, collect.
  'first' means that the first matching row is used.
  'collect' means that all matching rows are used. */
  hitPolicy: BusinessRuleHitPolicyOption;
}