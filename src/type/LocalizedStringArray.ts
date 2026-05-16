/**
 A multivalue string representation of a type Field that is suitable for Localization
 */
export interface LocalizedStringArray {
  /** Language is set as 2 character country code. */
  language: string;
  /** List of localized string values */
  values?: string[];
}