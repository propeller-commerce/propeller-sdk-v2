import { LocalizedStringArrayInput } from './LocalizedStringArrayInput';
/**
 Input object for AttributeValueInput
 */
export interface AttributeValueInput {
  /** Attribute value descriptions per language */
  textValues?: LocalizedStringArrayInput[];
  /** Attribute enum values, required for ENUM type attributes */
  enumValues?: string[];
  /** Attribute integer value, required for INTEGER type attributes */
  intValue?: number;
  /** Attribute decimal value, required for DECIMAL type attributes */
  decimalValue?: number;
  /** Attribute datetime value, required for DATETIME type attributes */
  dateTimeValue?: string;
  /** Attribute color value, required for COLOR type attributes (example: #000000 ) */
  colorValue?: string;
}