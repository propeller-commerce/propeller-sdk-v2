import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
import { LocalizedStringArray } from './LocalizedStringArray';
/**
 Text attribute value
 */
export interface AttributeTextValue extends AttributeValue {
  /** Attribute value id */
  id: string;
  /** Attribute text value type */
  type: AttributeType;
  /** Attribute textValues per language */
  textValues: LocalizedStringArray[];
}
