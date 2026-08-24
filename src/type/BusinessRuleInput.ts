import { BusinessRuleNodeType } from '../enum/BusinessRuleNodeType';
import { BusinessRuleFieldDefinition } from './BusinessRuleFieldDefinition';
import { IBusinessRuleNode } from './IBusinessRuleNode';
/**
 Object class for BusinessRuleInput
 */
export interface BusinessRuleInput extends IBusinessRuleNode {
  /** type field */
  type: BusinessRuleNodeType;
  /** id field */
  id: string | number;
  /** name field */
  name: string;
  /** description field */
  description: string;
}