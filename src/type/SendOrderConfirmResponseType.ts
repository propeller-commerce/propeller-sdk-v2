/**
 Object class for SendOrderConfirmResponseType
 */
export class SendOrderConfirmResponseType {
  /** messageId field */
  messageId!: string;
  /** success field */
  success!: boolean;
  constructor(data: Partial<SendOrderConfirmResponseType> = {}) {
    Object.assign(this, data);
  }
}