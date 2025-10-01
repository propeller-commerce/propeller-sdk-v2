import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeDecimalValue
 */
export class AttributeDecimalValue implements AttributeValue {
  /** Attribute value id */
  private _id: string;
  /** Attribute decimal value type */
  private _type: AttributeType;
  /** decimalValue field */
  private _decimalValue: number;
  /**
   Creates a new instance of AttributeDecimalValue
   */
  constructor(data: Partial<AttributeDecimalValue> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._decimalValue = data.decimalValue!;
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
   Attribute decimal value type
   */
  get type(): AttributeType {
    return this._type;
  }
  /**
   Attribute decimal value type
   */
  set type(value: AttributeType) {
    this._type = value;
  }
  /**
   decimalValue field
   */
  get decimalValue(): number {
    return this._decimalValue;
  }
  /**
   decimalValue field
   */
  set decimalValue(value: number) {
    this._decimalValue = value;
  }
  /**
   Gets the attribute value (delegates to decimalValue)
   */
  get value(): any {
    return this._decimalValue;
  }
  /**
   Sets the attribute value (delegates to decimalValue)
   */
  set value(val: any) {
    this._decimalValue = val;
  }
}