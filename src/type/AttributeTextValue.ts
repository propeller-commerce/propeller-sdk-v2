import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
import { LocalizedStringArray } from './LocalizedStringArray';
/**
 Text attribute value
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

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `type`. */
  getType(): AttributeType {
    return this.type;
  }
  /** Returns the textValue for the given language, falling back to NL. */
  getTextValue(language: string = 'NL'): string[] | undefined {
    const arr = this.textValues;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.values;
  }
}
