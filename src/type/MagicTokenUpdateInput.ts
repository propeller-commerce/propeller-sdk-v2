/**
 Input object for MagicTokenUpdateInput
 */
export interface MagicTokenUpdateInput {
  /** Identifier of the associated contact, use either contactId or customerId */
  contactId?: number;
  /** Identifier of the associated customer, use either customerId or contactId */
  customerId?: number;
  /** Expiration date and time of the magic token */
  expiresAt?: string;
  /** Indicates if the magic token is for one-time use only */
  oneTimeUse?: boolean;
  /** Additional information or metadata associated with the magic token */
  extra?: string[];
}