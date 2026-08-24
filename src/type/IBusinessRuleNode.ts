import { BusinessRuleNodeType } from '../enum/BusinessRuleNodeType';
/**
 Base interface for business rule nodes
 */
export interface IBusinessRuleNode {
  /** Node identifier */
  id: string | number;
  /** Node type */
  type: BusinessRuleNodeType;
  /** Node name */
  name: string;
  /** Node description */
  description: string;
}