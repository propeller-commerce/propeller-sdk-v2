/**
 A String representation of a type Field that is suitable for Localization
 */
export class LocalizedString {
  /** Localized field language code */
  private _language: string;
  /** Localized field value */
  private _value?: string;
  /**
   Creates a new instance of LocalizedString
   */
  constructor(data: Partial<LocalizedString> = {}) {
    this._language = data.language!;
    this._value = data.value;
  }
  /**
   Localized field language code
   */
  get language(): string {
    return this._language;
  }
  /**
   Localized field language code
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   Localized field value
   */
  get value(): string | undefined {
    return this._value;
  }
  /**
   Localized field value
   */
  set value(value: string | undefined) {
    this._value = value;
  }
}