/**
 Input object for LocalizedStringArrayInput
 */
export interface LocalizedStringArrayInput {
  /** Language is set as 2 character country code. */
  language: string;
  /** List of localized string values */
  values?: string[];
}