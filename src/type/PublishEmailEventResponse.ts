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
}