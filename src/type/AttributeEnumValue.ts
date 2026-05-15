import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Enum attribute value
 */
export class AttributeEnumValue implements AttributeValue {
  /** Attribute value id */
  id!: string;
  /** Attribute enum value type */
  type!: AttributeType;
  /** Attribute enum values */
  enumValues!: string[];
  constructor(data: Partial<AttributeEnumValue> = {}) {
    Object.assign(this, data);
  }
  /** Attribute value (delegates to enumValues) */
  get value(): any { return this.enumValues; }
  set value(val: any) { this.enumValues = val; }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `type`. */
  getType(): AttributeType {
    return this.type;
  }
  /** Returns `enumValues`. */
  getEnumValues(): string[] {
    return this.enumValues;
  }
}
