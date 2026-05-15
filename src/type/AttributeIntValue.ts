import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Integer attribute value
 */
export class AttributeIntValue implements AttributeValue {
  /** Attribute value id */
  id!: string;
  /** Attribute int value type */
  type!: AttributeType;
  /** Attribute integer value */
  intValue!: number;
  constructor(data: Partial<AttributeIntValue> = {}) {
    Object.assign(this, data);
  }
  /** Attribute value (delegates to intValue) */
  get value(): any { return this.intValue; }
  set value(val: any) { this.intValue = val; }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `type`. */
  getType(): AttributeType {
    return this.type;
  }
  /** Returns `intValue`. */
  getIntValue(): number {
    return this.intValue;
  }
}
