/**
 Object class for SendOrderConfirmResponseType
 */
export class SendOrderConfirmResponseType {
  /** messageId field */
  private _messageId: string;
  /** success field */
  private _success: boolean;
  /**
   Creates a new instance of SendOrderConfirmResponseType
   */
  constructor(data: Partial<SendOrderConfirmResponseType> = {}) {
    this._messageId = data.messageId!;
    this._success = data.success!;
  }
  /**
   messageId field
   */
  get messageId(): string {
    return this._messageId;
  }
  /**
   messageId field
   */
  set messageId(value: string) {
    this._messageId = value;
  }
  /**
   success field
   */
  get success(): boolean {
    return this._success;
  }
  /**
   success field
   */
  set success(value: boolean) {
    this._success = value;
  }
}