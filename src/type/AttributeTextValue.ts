import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
import { LocalizedStringArray } from './LocalizedStringArray';
/**
 Object class for AttributeTextValue
 */
export class AttributeTextValue implements AttributeValue {
  /** Attribute value id */
  private _id: string;
  /** Attribute text value type */
  private _type: AttributeType;
  /** Attribute textValues per language */
  private _textValues: LocalizedStringArray[];
  /**
   Creates a new instance of AttributeTextValue
   */
  constructor(data: Partial<AttributeTextValue> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._textValues = data.textValues!;
  }
  /**
   Attribute value id
   */
  get id(): string {
    return this._id;
  }
  /**
   Attribute value id
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Attribute text value type
   */
  get type(): AttributeType {
    return this._type;
  }
  /**
   Attribute text value type
   */
  set type(value: AttributeType) {
    this._type = value;
  }
  /**
   Attribute textValues per language
   */
  get textValues(): LocalizedStringArray[] {
    return this._textValues;
  }
  /**
   Attribute textValues per language
   */
  set textValues(value: LocalizedStringArray[]) {
    this._textValues = value;
  }
  /**
   Gets the attribute value (delegates to textValues)
   */
  get value(): any {
    return this._textValues;
  }
  /**
   Sets the attribute value (delegates to textValues)
   */
  set value(val: any) {
    this._textValues = val;
  }
}