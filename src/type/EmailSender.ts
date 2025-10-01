import { LocalizedString } from './LocalizedString';
/**
 Object class for EmailSender
 */
export class EmailSender {
  /** The email address of the sender */
  private _email: string;
  /** The name of the sender */
  private _names?: LocalizedString[];
  /**
   Creates a new instance of EmailSender
   */
  constructor(data: Partial<EmailSender> = {}) {
    this._email = data.email!;
    this._names = data.names;
  }
  /**
   The email address of the sender
   */
  get email(): string {
    return this._email;
  }
  /**
   The email address of the sender
   */
  set email(value: string) {
    this._email = value;
  }
  /**
   The name of the sender
   */
  get names(): LocalizedString[] | undefined {
    return this._names;
  }
  /**
   The name of the sender
   */
  set names(value: LocalizedString[] | undefined) {
    this._names = value;
  }
}