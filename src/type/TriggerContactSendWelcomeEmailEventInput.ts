/**
 Input object for TriggerContactSendWelcomeEmailEventInput
 */
export interface TriggerContactSendWelcomeEmailEventInput {
  /** The ID of the contact you want to send the email to */
  contactId: number;
  /** channelId input field */
  channelId?: number;
  /** Optionally provide a language, when omitted the contact preferred language will be used */
  language?: string;
}