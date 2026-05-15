import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Decimal attribute value
 */
export class AttributeDecimalValue implements AttributeValue {
  /** Attribute value id */
  id!: string;
  /** Attribute decimal value type */
  type!: AttributeType;
  /** decimalValue field */
  decimalValue!: number;
  constructor(data: Partial<AttributeDecimalValue> = {}) {
    Object.assign(this, data);
  }
  /** Attribute value (delegates to decimalValue) */
  get value(): any { return this.decimalValue; }
  set value(val: any) { this.decimalValue = val; }
}
