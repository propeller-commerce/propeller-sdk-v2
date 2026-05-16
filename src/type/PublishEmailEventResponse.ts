/**
 Object class for PublishEmailEventResponse
 */
export interface PublishEmailEventResponse {
  /** Did the publish event succeed? */
  success: boolean;
  /** The  Google Pub/Sub message id */
  messageId?: string;
}