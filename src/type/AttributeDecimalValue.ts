import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Decimal attribute value
 */
export interface AttributeDecimalValue extends AttributeValue {
  /** Attribute value id */
  id: string;
  /** Attribute decimal value type */
  type: AttributeType;
  /** decimalValue field */
  decimalValue: number;
}
