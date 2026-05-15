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

  /** Returns `email`. */
  getEmail(): string {
    return this.email;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
}