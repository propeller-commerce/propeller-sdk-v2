/**
 Input object for AgentConversationCreateMessageInput
 */
export interface AgentConversationCreateMessageInput {
  /** Unique identifier of the agent handling the conversation. */
  agentId: string;
  /** Message to send to the agent via webhook in a field named requestMessage. Mandatory if TRIGGER=CHAT. */
  requestMessage?: string;
  /** Metadata to send to the agent via webhook in a field named requestMetadata */
  requestMetadata?: any;
  /** Type of interaction. Must match one of the agent's configured types. */
  type: string;
}
