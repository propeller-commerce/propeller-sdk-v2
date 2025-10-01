/**
 Object class for PublishEmailEventResponse
 */
export class PublishEmailEventResponse {
  /** Did the publish event succeed? */
  private _success: boolean;
  /** The  Google Pub/Sub message id */
  private _messageId?: string;
  /**
   Creates a new instance of PublishEmailEventResponse
   */
  constructor(data: Partial<PublishEmailEventResponse> = {}) {
    this._success = data.success!;
    this._messageId = data.messageId;
  }
  /**
   Did the publish event succeed?
   */
  get success(): boolean {
    return this._success;
  }
  /**
   Did the publish event succeed?
   */
  set success(value: boolean) {
    this._success = value;
  }
  /**
   The  Google Pub/Sub message id
   */
  get messageId(): string | undefined {
    return this._messageId;
  }
  /**
   The  Google Pub/Sub message id
   */
  set messageId(value: string | undefined) {
    this._messageId = value;
  }
}