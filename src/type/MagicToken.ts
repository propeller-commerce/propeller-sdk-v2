import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Object class for MagicToken
 */
export interface MagicToken {
  /** Magic token primary identifier */
  id: string;
  /** Identifier of the associated contact, use either contactId or customerId */
  contactId?: number;
  /** Identifier of the associated customer, use either customerId or contactId */
  customerId?: number;
  /** Expiration date and time of the magic token */
  expiresAt?: string;
  /** Last accessed date and time of the magic token */
  lastAccessedAt?: string;
  /** Number of failed login attempts using the magic token */
  failedLogins?: number;
  /** Number of successful login attempts using the magic token */
  successfulLogins?: number;
  /** Indicates if the magic token is for one-time use only */
  oneTimeUse: boolean;
  /** Additional information or metadata associated with the magic token */
  extra?: string[];
  /** contact field */
  contact?: Contact;
  /** customer field */
  customer?: Customer;
}