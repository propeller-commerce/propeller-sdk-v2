import { LocalizedString } from './LocalizedString';
/**
 Object class for EmailSender
 */
export class EmailSender {
  /** The email address of the sender */
  email!: string;
  /** The name of the sender */
  names?: LocalizedString[];
  constructor(data: Partial<EmailSender> = {}) {
    Object.assign(this, data);
  }
}