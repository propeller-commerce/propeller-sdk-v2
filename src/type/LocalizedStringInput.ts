/**
 A String representation of a type Field that is suitable for Localization
 */
export interface LocalizedStringInput {
  /** Localized field language code */
  language: string;
  /** Localized field value */
  value?: string;
}