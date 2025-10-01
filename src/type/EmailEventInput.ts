import { EmailEventType } from '../enum/EmailEventType';
import { EmailSendContactInput } from './EmailSendContactInput';
import { Base64FileInput } from './Base64FileInput';
/**
 Input object for EmailEventInput
 */
export interface EmailEventInput {
  /** The type of email event to trigger */
  type: EmailEventType;
  /** The id of the site to use when sending the email, required when the site can not be derived from other inputs */
  siteId?: number;
  /** The id of the order to use when triggering an event of type orderconfirm */
  orderId?: number;
  /** The id of the user to send to email to. Can be used to replace to, when the user can't be derived from other inputs */
  userId?: number;
  /** The id of the Propeller letter to use when type is 'campaign' */
  letterId?: string;
  /** The subject of the email, use when the subject can not be derived from other inputs */
  subject?: string;
  /** The content of the email, use when the content can not be derived from other inputs */
  content?: string;
  /** The sender of the email, use when the sender can not be derived from other inputs */
  from?: EmailSendContactInput;
  /** The recipient(s) of the email, use when the recipient(s) can not be derived from other inputs */
  to?: EmailSendContactInput[];
  /** Attachments to add to the email */
  attachments?: Base64FileInput[];
  /** Variables that can be used in the email template */
  variables?: any;
  /** The language of the generated email */
  language?: string;
}