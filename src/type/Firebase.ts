/**
 Object class for Firebase
 */
export interface Firebase {
  /** identities field */
  identities?: any;
  /** sign_in_provider field */
  sign_in_provider: string;
  /** sign_in_second_factor field */
  sign_in_second_factor?: string;
  /** second_factor_identifier field */
  second_factor_identifier?: string;
  /** tenant field */
  tenant?: string;
}