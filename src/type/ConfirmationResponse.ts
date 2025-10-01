/**
 Object class for ConfirmationResponse
 */
export class ConfirmationResponse {
  /** Confirmation status value */
  private _status: string;
  /** Confirmation message */
  private _message: string;
  /**
   Creates a new instance of ConfirmationResponse
   */
  constructor(data: Partial<ConfirmationResponse> = {}) {
    this._status = data.status!;
    this._message = data.message!;
  }
  /**
   Confirmation status value
   */
  get status(): string {
    return this._status;
  }
  /**
   Confirmation status value
   */
  set status(value: string) {
    this._status = value;
  }
  /**
   Confirmation message
   */
  get message(): string {
    return this._message;
  }
  /**
   Confirmation message
   */
  set message(value: string) {
    this._message = value;
  }
}