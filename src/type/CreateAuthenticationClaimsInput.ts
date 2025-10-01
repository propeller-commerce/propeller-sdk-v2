/**
 Input for creating the initial claims on authentication creation
 */
export interface CreateAuthenticationClaimsInput {
  /** The userId to store in the init claims when creating the authentication */
  userId: number;
  /** The class to store in the init claims when creating the authentication */
  class: string;
  /** The companyId of the contact's original company to store in the init claims when creating the authentication.
      this value will be used in queries and mutation where a contactId is supplied without a companyId */
  companyId?: number;
  /** All the companies the contact belongs to */
  companyIds?: number[];
  /** The initial roles the user to store with the user */
  roles?: string[];
}