import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Integer attribute value
 */
export interface AttributeIntValue extends AttributeValue {
  /** Attribute value id */
  id: string;
  /** Attribute int value type */
  type: AttributeType;
  /** Attribute integer value */
  intValue: number;
}
