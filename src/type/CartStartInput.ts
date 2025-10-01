/**
 Input object for CartStartInput
 */
export interface CartStartInput {
  /** userId input field */
  userId?: number;
  /** Cart contact identifier. Goes in combination with companyId */
  contactId?: number;
  /** Cart customer identifier */
  customerId?: number;
  /** A company that contact belongs to. Goes in combination with contactId */
  companyId?: number;
  /** Language of the order that will be created from this cart. Order confirmation email will be sent in that language. */
  language?: string;
}