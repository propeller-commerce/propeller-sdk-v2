/**
 Input object for EmailContactInput
 */
export interface EmailContactInput {
  /** Email address of the contact */
  email?: string;
  /** Name of the contact */
  name?: string;
  /** Email address and name are taken from the the contact with the given contactId */
  contactId?: number;
  /** Email address and name are taken from the the contact with the given customerId */
  customerId?: number;
  /** Email address and name are taken from the the adminUser with the given adminUserId */
  adminUserId?: number;
}