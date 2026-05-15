import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Color attribute value
 */
export class AttributeColorValue implements AttributeValue {
  /** Attribute value id */
  id!: string;
  /** Attribute color value type */
  type!: AttributeType;
  /** colorValue field */
  colorValue?: string;
  constructor(data: Partial<AttributeColorValue> = {}) {
    Object.assign(this, data);
  }
  /** Attribute value (delegates to colorValue) */
  get value(): any { return this.colorValue; }
  set value(val: any) { this.colorValue = val; }
}
