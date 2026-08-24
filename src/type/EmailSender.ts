import { LocalizedString } from './LocalizedString';
/**
 Object class for EmailSender
 */
export interface EmailSender {
  /** The email address of the sender */
  email: string;
  /** The name of the sender */
  names?: LocalizedString[];
}