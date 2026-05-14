import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeDateTimeValue
 */
export class AttributeDateTimeValue implements AttributeValue {
  /** Attribute value id */
  id!: string;
  /** Attribute datetime value type */
  type!: AttributeType;
  /** dateTimeValue field */
  dateTimeValue?: string;
  constructor(data: Partial<AttributeDateTimeValue> = {}) {
    Object.assign(this, data);
  }
  /** Attribute value (delegates to dateTimeValue) */
  get value(): any { return this.dateTimeValue; }
  set value(val: any) { this.dateTimeValue = val; }
}