import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
import { LocalizedStringArray } from './LocalizedStringArray';
/**
 Object class for AttributeTextValue
 */
export class AttributeTextValue implements AttributeValue {
  /** Attribute value id */
  id!: string;
  /** Attribute text value type */
  type!: AttributeType;
  /** Attribute textValues per language */
  textValues!: LocalizedStringArray[];
  constructor(data: Partial<AttributeTextValue> = {}) {
    Object.assign(this, data);
  }
  /** Attribute value (delegates to textValues) */
  get value(): any { return this.textValues; }
  set value(val: any) { this.textValues = val; }
}