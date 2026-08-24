import { PurchaseRole } from '../enum/PurchaseRole';
import { DecimalSearchInput } from './DecimalSearchInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for CompanyPurchaseAuthorizationConfigSearchInput
 */
export interface CompanyPurchaseAuthorizationConfigSearchInput {
  /** List of unique purchase auhorization config ids */
  ids?: string[];
  /** List of unique contact ids the purchase authorization config is valid for */
  contactIds?: number[];
  /** Purchase roles of a contact within a company */
  purchaseRoles?: PurchaseRole[];
  /** The purchaser's authorization limit i.e. maximum amount that can be spent per order */
  authorizationLimit?: DecimalSearchInput;
  /** Search by date created */
  createdAt?: DateSearchInput;
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** page input field */
  page: number;
  /** offset input field */
  offset: number;
}