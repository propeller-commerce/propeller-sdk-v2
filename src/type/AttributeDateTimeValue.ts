import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeDateTimeValue
 */
export class AttributeDateTimeValue implements AttributeValue {
  /** Attribute value id */
  private _id: string;
  /** Attribute datetime value type */
  private _type: AttributeType;
  /** dateTimeValue field */
  private _dateTimeValue?: string;
  /**
   Creates a new instance of AttributeDateTimeValue
   */
  constructor(data: Partial<AttributeDateTimeValue> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._dateTimeValue = data.dateTimeValue;
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
   Attribute datetime value type
   */
  get type(): AttributeType {
    return this._type;
  }
  /**
   Attribute datetime value type
   */
  set type(value: AttributeType) {
    this._type = value;
  }
  /**
   dateTimeValue field
   */
  get dateTimeValue(): string | undefined {
    return this._dateTimeValue;
  }
  /**
   dateTimeValue field
   */
  set dateTimeValue(value: string | undefined) {
    this._dateTimeValue = value;
  }
  /**
   Gets the attribute value (delegates to dateTimeValue)
   */
  get value(): any {
    return this._dateTimeValue;
  }
  /**
   Sets the attribute value (delegates to dateTimeValue)
   */
  set value(val: any) {
    this._dateTimeValue = val;
  }
}