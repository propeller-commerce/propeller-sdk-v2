import { EventTrigger } from '../enum/EventTrigger';
import { LocalizedString } from './LocalizedString';
/**
 Base interface for event action configuration entities
 */
export interface IEventActionConfig {
  /** Configuration identifier */
  id: string;
  /** Event type */
  eventType: string;
  /** Action type */
  actionType: string;
  /** Configuration name */
  name: string;
  /** Configuration description */
  description?: string;
  /** Whether the configuration is enabled */
  enabled: boolean;
}