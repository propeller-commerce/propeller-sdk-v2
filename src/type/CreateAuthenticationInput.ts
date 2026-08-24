import { CreateAuthenticationClaimsInput } from './CreateAuthenticationClaimsInput';
/**
 Input object for CreateAuthenticationInput
 */
export interface CreateAuthenticationInput {
  /** The email of the user */
  email: string;
  /** The password of the user */
  password?: string;
  /** The first name of the user */
  phoneNumber?: string;
  /** The display name of the user */
  displayName?: string;
  /** Optionally an external ID of the user */
  uid?: string;
  /** Initial claims to store with the user */
  claims?: CreateAuthenticationClaimsInput;
}