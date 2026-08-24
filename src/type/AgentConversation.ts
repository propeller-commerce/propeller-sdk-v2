import { AgentMessage } from './AgentMessage';
/**
 Object class for AgentConversation
 */
export interface AgentConversation {
  /** Unique identifier for the conversation. */
  id: string;
  /** Messages exchanged within the conversation. */
  messages: AgentMessage[];
}
