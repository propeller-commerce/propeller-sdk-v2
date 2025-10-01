import { EventTrigger } from '../enum/EventTrigger';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for EventToEmailConfigUpdateInput
 */
export interface EventToEmailConfigUpdateInput {
  /** The display names for the event per language */
  names?: LocalizedStringInput[];
  /** The event to trigger the action defined in the event action config */
  trigger?: EventTrigger;
  /** The event code to use when the trigger is [CUSTOM_EVENT] */
  code?: string;
  /** The ID of the email template to use */
  emailTemplateId: string;
}