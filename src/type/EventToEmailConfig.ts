import { EventTrigger } from '../enum/EventTrigger';
import { LocalizedString } from './LocalizedString';
/**
 The configuration for sending an email based on a template when an event gets triggered which has the emailTemplateId as a field to identify the template to use
 */
export interface EventToEmailConfig {
  /** The ID of the event, uuid v7 format */
  id: string;
  /** The event to trigger the action defined in the event action config */
  trigger: EventTrigger;
  /** The event code to use when the trigger is [CUSTOM_EVENT] */
  code?: string;
  /** The creation date of this EventActionConfig */
  createdAt: string;
  /** The last modified date of this EventActionConfig */
  lastModifiedAt: string;
  /** ID of the user who created this EventActionConfig */
  createdBy?: number;
  /** ID of the user who last modified this EventActionConfig */
  lastModifiedBy?: number;
  /** names field */
  names: LocalizedString[];
  /** The ID of the email template to use */
  emailTemplateId: string;
}