import { BusinessRuleType } from '../enum/BusinessRuleType';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for BusinessRuleCreateInput
 */
export interface BusinessRuleCreateInput {
  /** name input field */
  name: LocalizedStringInput[];
  /** shopId input field */
  shopId: number;
  /** type input field */
  type: BusinessRuleType;
}