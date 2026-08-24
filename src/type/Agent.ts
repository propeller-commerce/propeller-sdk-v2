import { AgentInteractionMode } from '../enum/AgentInteractionMode';
import { AgentTrigger } from '../enum/AgentTrigger';
import { LocalizedString } from './LocalizedString';
/**
 Object class for Agent
 */
export interface Agent {
  /** Unique identifier for the agent. */
  id: string;
  /** Localized display names for the agent. */
  names: LocalizedString[];
  /** Localized descriptions for the agent. */
  descriptions?: LocalizedString[];
  /** Localized welcome messages displayed when the agent is activated. */
  welcomeMessages?: LocalizedString[];
  /** Localized button labels for the agent. */
  buttonLabels?: LocalizedString[];
  /** Whether the agent is currently active and available for interactions. */
  active: boolean;
  /** Classification types for the agent in SCREAMING_SNAKE_CASE format. */
  types: string[];
  /** Trigger mechanism that activates the agent interaction. */
  trigger: AgentTrigger;
  /** Interaction mode defining the conversational pattern. */
  interactionMode: AgentInteractionMode;
  /** URL of the external webhook that processes agent requests. */
  webhookUrl: string;
  /** Timeout in milliseconds for webhook requests. */
  webhookTimeoutMs: number;
  /** Timestamp when the agent was created. */
  createdAt: string;
  /** Timestamp when the agent was last modified. */
  lastModifiedAt: string;
  /** Admin user ID who created the agent. */
  createdByAdminUserId?: number;
  /** Admin user ID who last modified the agent. */
  lastModifiedByAdminUserId?: number;
}
