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
export class BusinessRuleDecisionTable implements IBusinessRuleNode {
  /** The type of the node.  */
  private _type: BusinessRuleNodeType;
  /** The generated ID for this node */
  private _id: string | number;
  /** The name of the node */
  private _name: string;
  /** The description of the node */
  private _description: string;
  /** The node's table content in case the type is 'decisionTableNode' */
  private _content: BusinessRuleDecisionTableContent;
  /**
   Creates a new instance of BusinessRuleDecisionTable
   */
  constructor(data: Partial<BusinessRuleDecisionTable> = {}) {
    this._type = data.type!;
    this._id = data.id!;
    this._name = data.name!;
    this._description = data.description!;
    this._content = data.content!;
  }
  /**
   The type of the node.
   */
  get type(): BusinessRuleNodeType {
    return this._type;
  }
  /**
   The type of the node.
   */
  set type(value: BusinessRuleNodeType) {
    this._type = value;
  }
  /**
   The generated ID for this node
   */
  get id(): string | number {
    return this._id;
  }
  /**
   The generated ID for this node
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   The name of the node
   */
  get name(): string {
    return this._name;
  }
  /**
   The name of the node
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The description of the node
   */
  get description(): string {
    return this._description;
  }
  /**
   The description of the node
   */
  set description(value: string) {
    this._description = value;
  }
  /**
   The node's table content in case the type is 'decisionTableNode'
   */
  get content(): BusinessRuleDecisionTableContent {
    return this._content;
  }
  /**
   The node's table content in case the type is 'decisionTableNode'
   */
  set content(value: BusinessRuleDecisionTableContent) {
    this._content = value;
  }
}