import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeIntValue
 */
export class AttributeIntValue implements AttributeValue {
  /** Attribute value id */
  private _id: string;
  /** Attribute int value type */
  private _type: AttributeType;
  /** Attribute integer value */
  private _intValue: number;
  /**
   Creates a new instance of AttributeIntValue
   */
  constructor(data: Partial<AttributeIntValue> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._intValue = data.intValue!;
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
   Attribute int value type
   */
  get type(): AttributeType {
    return this._type;
  }
  /**
   Attribute int value type
   */
  set type(value: AttributeType) {
    this._type = value;
  }
  /**
   Attribute integer value
   */
  get intValue(): number {
    return this._intValue;
  }
  /**
   Attribute integer value
   */
  set intValue(value: number) {
    this._intValue = value;
  }
  /**
   Gets the attribute value (delegates to intValue)
   */
  get value(): any {
    return this._intValue;
  }
  /**
   Sets the attribute value (delegates to intValue)
   */
  set value(val: any) {
    this._intValue = val;
  }
}