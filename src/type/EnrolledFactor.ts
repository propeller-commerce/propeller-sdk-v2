/**
 Multi-factor authentication details for the user
 */
export interface EnrolledFactor {
  /** The unique identifier for the factor */
  factorId: string;
  /** The phoneNumber used for the factor */
  phoneNumber: string;
}