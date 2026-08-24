import { PurchaseRole } from '../enum/PurchaseRole';
/**
 Input object for PurchaseAuthorizationConfigCreateInput
 */
export interface PurchaseAuthorizationConfigCreateInput {
  /** Identifier of the contact the purchase authorization config is valid for */
  contactId: number;
  /** Identifier of the company the purchase authorization config is valid for */
  companyId: number;
  /** The purchase role of the contact within the company. Defaults to PURCHASER */
  purchaseRole: PurchaseRole;
  /** The purchaser's authorization limit i.e. maximum amount that can be spent per order */
  authorizationLimit?: number;
}