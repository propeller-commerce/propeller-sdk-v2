import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 DateTime attribute value
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

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `type`. */
  getType(): AttributeType {
    return this.type;
  }
  /** Returns `dateTimeValue`. */
  getDateTimeValue(): string | undefined {
    return this.dateTimeValue;
  }
}
