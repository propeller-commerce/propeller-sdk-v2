import { IncentiveActions } from '../enum/IncentiveActions';
import { IncentiveDiscountType } from '../enum/IncentiveDiscountType';
import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for IncentiveRuleSetActionInput
 */
export interface IncentiveRuleSetActionInput {
  /** ruleId input field */
  ruleId: string | number;
  /** rowId input field */
  rowId: string | number;
  /** action input field */
  action: IncentiveActions;
  /** name input field */
  name: LocalizedStringInput[];
  /** productId input field */
  productId?: number;
  /** price input field */
  price?: number;
  /** quantity input field */
  quantity?: number;
  /** discount input field */
  discount?: number;
  /** discountType input field */
  discountType?: IncentiveDiscountType;
  /** valuePoints input field */
  valuePoints?: number;
  /** repeat input field */
  repeat?: YesNo;
  /** The action code that was applied by this rule. Should match the order.actionCode field in the inputs */
  actionCode?: string;
}