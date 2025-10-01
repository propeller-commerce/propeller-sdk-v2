/**
 A multivalue string representation of a type Field that is suitable for Localization
 */
export class LocalizedStringArray {
  /** Language is set as 2 character country code. */
  private _language: string;
  /** List of localized string values */
  private _values?: string[];
  /**
   Creates a new instance of LocalizedStringArray
   */
  constructor(data: Partial<LocalizedStringArray> = {}) {
    this._language = data.language!;
    this._values = data.values;
  }
  /**
   Language is set as 2 character country code.
   */
  get language(): string {
    return this._language;
  }
  /**
   Language is set as 2 character country code.
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   List of localized string values
   */
  get values(): string[] | undefined {
    return this._values;
  }
  /**
   List of localized string values
   */
  set values(value: string[] | undefined) {
    this._values = value;
  }
}