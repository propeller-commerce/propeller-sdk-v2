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
}