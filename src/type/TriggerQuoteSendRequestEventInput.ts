/**
 Input object for TriggerQuoteSendRequestEventInput
 */
export interface TriggerQuoteSendRequestEventInput {
  /** The ID of the order you want to fire the event for */
  orderId: number;
  /** Optionally provide a language, when omitted the order language will be used */
  language?: string;
}