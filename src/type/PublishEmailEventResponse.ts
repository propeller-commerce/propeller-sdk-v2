/**
 Object class for PublishEmailEventResponse
 */
export class PublishEmailEventResponse {
  /** Did the publish event succeed? */
  success!: boolean;
  /** The  Google Pub/Sub message id */
  messageId?: string;
  constructor(data: Partial<PublishEmailEventResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `success`. */
  getSuccess(): boolean {
    return this.success;
  }
  /** Returns `messageId`. */
  getMessageId(): string | undefined {
    return this.messageId;
  }
}