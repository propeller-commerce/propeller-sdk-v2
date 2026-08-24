import { PurchaseRole } from '../enum/PurchaseRole';
/**
 Input object for PurchaseAuthorizationConfigUpdateInput
 */
export interface PurchaseAuthorizationConfigUpdateInput {
  /** The purchase role of the contact within the company. Defaults to PURCHASER */
  purchaseRole?: PurchaseRole;
  /** The purchaser's authorization limit i.e. maximum amount that can be spent per order */
  authorizationLimit?: number;
}