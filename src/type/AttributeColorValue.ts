import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Color attribute value
 */
export interface AttributeColorValue extends AttributeValue {
  /** Attribute value id */
  id: string;
  /** Attribute color value type */
  type: AttributeType;
  /** colorValue field */
  colorValue?: string;
  /** Attribute value (mirrors colorValue) */
  value: any;
}
