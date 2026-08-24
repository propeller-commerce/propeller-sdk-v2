import { BusinessRuleType } from '../enum/BusinessRuleType';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for BusinessRuleCreateInput
 */
export interface BusinessRuleCreateInput {
  /** name input field */
  name: LocalizedStringInput[];
  /** type input field */
  type: BusinessRuleType;
}