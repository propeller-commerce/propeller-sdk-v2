/**
 A String representation of a type Field that is suitable for Localization
 */
export class LocalizedString {
  /** Localized field language code */
  language!: string;
  /** Localized field value */
  value?: string;
  constructor(data: Partial<LocalizedString> = {}) {
    Object.assign(this, data);
  }

  /** Returns `language`. */
  getLanguage(): string {
    return this.language;
  }
  /** Returns `value`. */
  getValue(): string | undefined {
    return this.value;
  }
}