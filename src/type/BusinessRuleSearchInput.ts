import { BusinessRuleType } from '../enum/BusinessRuleType';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for BusinessRuleSearchInput
 */
export interface BusinessRuleSearchInput {
  /** type input field */
  type?: BusinessRuleType[];
  /** shopId input field */
  shopId?: number;
  /** page input field */
  page?: number;
  /** offset input field */
  offset?: number;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
}