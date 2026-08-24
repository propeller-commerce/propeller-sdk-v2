import { EventTrigger } from '../enum/EventTrigger';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for EventToWebHookConfigCreateInput
 */
export interface EventToWebHookConfigCreateInput {
  /** The display names for the event per language */
  names: LocalizedStringInput[];
  /** The event to trigger the action defined in the event action config */
  trigger: EventTrigger;
  /** The event code to use when the trigger is [CUSTOM_EVENT] */
  code?: string;
  /** The URL of the webhook to send the payload to */
  url: string;
}