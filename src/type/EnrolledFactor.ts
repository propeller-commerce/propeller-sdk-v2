/**
 Multi-factor authentication details for the user
 */
export class EnrolledFactor {
  /** The unique identifier for the factor */
  factorId!: string;
  /** The phoneNumber used for the factor */
  phoneNumber!: string;
  constructor(data: Partial<EnrolledFactor> = {}) {
    Object.assign(this, data);
  }

  /** Returns `factorId`. */
  getFactorId(): string {
    return this.factorId;
  }
  /** Returns `phoneNumber`. */
  getPhoneNumber(): string {
    return this.phoneNumber;
  }
}