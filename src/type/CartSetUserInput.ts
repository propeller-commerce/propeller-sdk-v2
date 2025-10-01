/**
 Input object for CartSetUserInput
 */
export interface CartSetUserInput {
  /** userId input field */
  userId?: number;
  /** Cart contact identifier. Goes in combination with companyId */
  contactId?: number;
  /** Cart customer identifier */
  customerId?: number;
  /** A company that contact belongs to. Goes in combination with contactId */
  companyId?: number;
}