import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeColorValue
 */
export class AttributeColorValue implements AttributeValue {
  /** Attribute value id */
  private _id: string;
  /** Attribute color value type */
  private _type: AttributeType;
  /** colorValue field */
  private _colorValue?: string;
  /**
   Creates a new instance of AttributeColorValue
   */
  constructor(data: Partial<AttributeColorValue> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._colorValue = data.colorValue;
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
   Attribute color value type
   */
  get type(): AttributeType {
    return this._type;
  }
  /**
   Attribute color value type
   */
  set type(value: AttributeType) {
    this._type = value;
  }
  /**
   colorValue field
   */
  get colorValue(): string | undefined {
    return this._colorValue;
  }
  /**
   colorValue field
   */
  set colorValue(value: string | undefined) {
    this._colorValue = value;
  }
  /**
   Gets the attribute value (delegates to colorValue)
   */
  get value(): any {
    return this._colorValue;
  }
  /**
   Sets the attribute value (delegates to colorValue)
   */
  set value(val: any) {
    this._colorValue = val;
  }
}