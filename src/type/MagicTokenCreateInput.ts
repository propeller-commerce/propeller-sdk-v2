/**
 Input object for MagicTokenCreateInput
 */
export interface MagicTokenCreateInput {
  /** Identifier of the associated contact, use either contactId or customerId */
  contactId?: number;
  /** Identifier of the associated customer, use either customerId or contactId */
  customerId?: number;
  /** Expiration date and time of the magic token */
  expiresAt?: string;
  /** Indicates if the magic token is for one-time use only */
  oneTimeUse?: boolean;
  /** extra input field */
  extra?: string[];
}