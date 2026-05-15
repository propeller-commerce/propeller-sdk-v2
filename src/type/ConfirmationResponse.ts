/**
 Object class for ConfirmationResponse
 */
export class ConfirmationResponse {
  /** Confirmation status value */
  status!: string;
  /** Confirmation message */
  message!: string;
  constructor(data: Partial<ConfirmationResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `status`. */
  getStatus(): string {
    return this.status;
  }
  /** Returns `message`. */
  getMessage(): string {
    return this.message;
  }
}