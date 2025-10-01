import { AttributeType } from '../enum/AttributeType';
import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeEnumValue
 */
export class AttributeEnumValue implements AttributeValue {
  /** Attribute value id */
  private _id: string;
  /** Attribute enum value type */
  private _type: AttributeType;
  /** Attribute enum values */
  private _enumValues: string[];
  /**
   Creates a new instance of AttributeEnumValue
   */
  constructor(data: Partial<AttributeEnumValue> = {}) {
    this._id = data.id!;
    this._type = data.type!;
    this._enumValues = data.enumValues!;
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
   Attribute enum value type
   */
  get type(): AttributeType {
    return this._type;
  }
  /**
   Attribute enum value type
   */
  set type(value: AttributeType) {
    this._type = value;
  }
  /**
   Attribute enum values
   */
  get enumValues(): string[] {
    return this._enumValues;
  }
  /**
   Attribute enum values
   */
  set enumValues(value: string[]) {
    this._enumValues = value;
  }
  /**
   Gets the attribute value (delegates to enumValues)
   */
  get value(): any {
    return this._enumValues;
  }
  /**
   Sets the attribute value (delegates to enumValues)
   */
  set value(val: any) {
    this._enumValues = val;
  }
}