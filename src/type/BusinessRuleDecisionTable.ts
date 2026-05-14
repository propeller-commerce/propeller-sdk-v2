import { BusinessRuleNodeType } from '../enum/BusinessRuleNodeType';
import { BusinessRuleDecisionTableContent } from './BusinessRuleDecisionTableContent';
import { BusinessRuleHitPolicyOption } from '../enum/BusinessRuleHitPolicyOption';
import { BusinessRuleDecisionTableInputOutput } from './BusinessRuleDecisionTableInputOutput';
import { BusinessRuleDecisionTableRow } from './BusinessRuleDecisionTableRow';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Represents a single decision table node in the graph, each table can contain multiple rows.
  Each row respresents a rule that get executed. The hitPolicy determines how the rule is executed.
  When the hitPolicy is set to 'first', the first matching row is used.
  When the hitPolicy is set to 'collect', all matching rows are used.
 */
export interface BusinessRuleDecisionTable extends IBusinessRuleNode {
  /** The type of the node.  */
  type: BusinessRuleNodeType;
  /** The generated ID for this node */
  id: string | number;
  /** The name of the node */
  name: string;
  /** The description of the node */
  description: string;
  /** The node's table content in case the type is 'decisionTableNode' */
  content: BusinessRuleDecisionTableContent;
}