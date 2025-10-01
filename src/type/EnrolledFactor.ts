/**
 Multi-factor authentication details for the user
 */
export class EnrolledFactor {
  /** The unique identifier for the factor */
  private _factorId: string;
  /** The phoneNumber used for the factor */
  private _phoneNumber: string;
  /**
   Creates a new instance of EnrolledFactor
   */
  constructor(data: Partial<EnrolledFactor> = {}) {
    this._factorId = data.factorId!;
    this._phoneNumber = data.phoneNumber!;
  }
  /**
   The unique identifier for the factor
   */
  get factorId(): string {
    return this._factorId;
  }
  /**
   The unique identifier for the factor
   */
  set factorId(value: string) {
    this._factorId = value;
  }
  /**
   The phoneNumber used for the factor
   */
  get phoneNumber(): string {
    return this._phoneNumber;
  }
  /**
   The phoneNumber used for the factor
   */
  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
}