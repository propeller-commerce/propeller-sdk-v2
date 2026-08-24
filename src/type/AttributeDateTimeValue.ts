import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 DateTime attribute value
 */
export interface AttributeDateTimeValue extends AttributeValue {
  /** Attribute value id */
  id: string;
  /** Attribute datetime value type */
  type: AttributeType;
  /** dateTimeValue field */
  dateTimeValue?: string;
}
