import { PurchaseRole } from '../enum/PurchaseRole';
import { Company } from './Company';
import { Contact } from './Contact';
/**
 Object class for PurchaseAuthorizationConfig
 */
export interface PurchaseAuthorizationConfig {
  /** The primary ID of the purchase authorization config, uuid v7 format */
  id: string;
  /** The purchase role of the contact within the company. Defaults to PURCHASER */
  purchaseRole: PurchaseRole;
  /** The purchaser's authorization limit i.e. maximum amount that can be spent per order */
  authorizationLimit?: number;
  /** The creation date of this PurchaseAuthorizationConfig */
  createdAt: string;
  /** The last modified date of this PurchaseAuthorizationConfig */
  lastModifiedAt: string;
  /** The company the purchase authorization config is valid for */
  company?: Company;
  /** The contact the purchase authorization config is valid for */
  contact?: Contact;
}