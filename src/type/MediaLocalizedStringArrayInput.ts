/**
 Input object for MediaLocalizedStringArrayInput
 */
export interface MediaLocalizedStringArrayInput {
  /** Media localized string language country code [min/max: 2] */
  language: string;
  /** Media localized string value */
  values?: string[];
}