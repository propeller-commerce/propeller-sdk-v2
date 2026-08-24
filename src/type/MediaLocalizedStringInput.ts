/**
 A String representation of a type Field that is suitable for Localization
 */
export interface MediaLocalizedStringInput {
  /** Media localized string language country code [min/max: 2] */
  language: string;
  /** Media localized string value */
  value: string;
}