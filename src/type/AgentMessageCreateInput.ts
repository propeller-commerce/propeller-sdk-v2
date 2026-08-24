/**
 Input object for AgentMessageCreateInput
 */
export interface AgentMessageCreateInput {
  /** Unique identifier of the agent handling the conversation. */
  agentId: string;
  /** Message to send to the agent via webhook in a field named requestMessage. */
  requestMessage: string;
  /** Metadata to send to the agent via webhook in a field named requestMetadata */
  requestMetadata?: any;
  /** Type of interaction. Must match one of the agent's configured types. */
  type: string;
  /** Conversation ID. Sent in webhook request in a field named conversationId. */
  conversationId: string;
}
