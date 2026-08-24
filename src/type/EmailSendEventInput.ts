import { EmailSendContactInput } from './EmailSendContactInput';
import { Base64FileInput } from './Base64FileInput';
/**
 Input object for EmailSendEventInput
 */
export interface EmailSendEventInput {
  /** The subject of the email */
  subject: string;
  /** The content of the email */
  content: string;
  /** The sender of the email */
  from: EmailSendContactInput;
  /** The recipient(s) of the email */
  to: EmailSendContactInput[];
  /** The cc recipient(s) of the email */
  cc?: EmailSendContactInput[];
  /** The bcc recipient(s) of the email */
  bcc?: EmailSendContactInput[];
  /** The attachment(s) of the email */
  attachments?: Base64FileInput[];
  /** The campaingId of the email */
  campaignId?: string;
  /** The messageId of the email */
  messageId?: string;
  /** The utmTags of the email */
  utmTags?: string;
  /** Variables that can be used in the email template */
  variables?: any;
}