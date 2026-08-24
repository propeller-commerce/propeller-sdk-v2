/**
 Object class for AgentMessage
 */
export interface AgentMessage {
  /** ID. Webhook response must contain a non blank field called conversationId. */
  conversationId: string;
  /** Response message from the agent. Webhook response must contain a non blank field called responseMessage. */
  responseMessage: string;
  /** Metadata associated with the response message. Webhook response can contain a field called responseMetadata. */
  responseMetadata?: any;
}
