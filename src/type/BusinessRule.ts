import { BusinessRuleType } from '../enum/BusinessRuleType';
import { LocalizedString } from './LocalizedString';
import { BusinessRuleEdge } from './BusinessRuleEdge';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Represents a BusinessRule Graph or Set, each business rule set consist of at least one inputNode,
  decisionTableNode and outputNode witn edges between them.
  A decisionTable can have mutiple rows, each row representing a single rule that gets executed.
 */
export interface BusinessRule {
  /** BusinessRule identifier */
  id: string | number;
  /** type field */
  type: BusinessRuleType;
  /** name field */
  name: LocalizedString[];
  /** edges field */
  edges: BusinessRuleEdge[];
  /** nodes field */
  nodes: IBusinessRuleNode[];
  /** BusinessRule date created */
  createdAt: string;
  /** BusinessRule List date modified */
  updatedAt: string;
  /** jdm field */
  jdm: any;
}