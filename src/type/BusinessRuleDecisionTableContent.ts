import { BusinessRuleHitPolicyOption } from '../enum/BusinessRuleHitPolicyOption';
import { BusinessRuleDecisionTableRow } from './BusinessRuleDecisionTableRow';
import { BusinessRuleDecisionTableInputOutput } from './BusinessRuleDecisionTableInputOutput';
/**
 Object class for BusinessRuleDecisionTableContent
 */
export interface BusinessRuleDecisionTableContent {
  /** The table's hitPolicy.
  Possible values: first, collect.
  'first' means that the first matching row is used.
  'collect' means that all matching rows are used. */
  hitPolicy: BusinessRuleHitPolicyOption;
  /** The table's rows */
  rows: BusinessRuleDecisionTableRow[];
  /** The table's input columns */
  inputs: BusinessRuleDecisionTableInputOutput[];
  /** The table's output columns */
  outputs: BusinessRuleDecisionTableInputOutput[];
}