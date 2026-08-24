/**
 Input object for TriggerQuoteSendEventInput
 */
export interface TriggerQuoteSendEventInput {
  /** The ID of the order you want to fire the event for */
  orderId: number;
  /** Optionally provide a language, when omitted the order language will be used */
  language?: string;
}