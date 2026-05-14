import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Enum attribute value
 */
export interface AttributeEnumValue extends AttributeValue {
  /** Attribute value id */
  id: string;
  /** Attribute enum value type */
  type: AttributeType;
  /** Attribute enum values */
  enumValues: string[];
  /** Attribute value (mirrors enumValues) */
  value: any;
}
