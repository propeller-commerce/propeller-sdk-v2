/**
 Input object for TriggerCustomerSendWelcomeEmailEventInput
 */
export interface TriggerCustomerSendWelcomeEmailEventInput {
  /** The ID of the customer you want to send the email to */
  customerId: number;
  /** channelId input field */
  channelId?: number;
  /** Optionally provide a language, when omitted the contact preferred language will be used */
  language?: string;
}