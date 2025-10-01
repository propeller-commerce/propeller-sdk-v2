import { AttributeValue } from './AttributeValue';
import { AttributeDescription } from './AttributeDescription';
/**
 Object class for CustomerAttribute
 */
export class CustomerAttribute {
  /** The ID of the attribute */
  private _id: string;
  /** The value of the attribute */
  private _value: AttributeValue;
  /** The date when the attribute was created */
  private _createdAt: string;
  /** The date when the attribute was last modified */
  private _lastModifiedAt: string;
  /** The ID of the user that created the attribute */
  private _createdBy?: number;
  /** The ID of the user that last modified the attribute */
  private _lastModifiedBy?: number;
  /** attributeDescription field */
  private _attributeDescription?: AttributeDescription;
  /** The ID of the customer this attribute belongs to */
  private _customerId: number;
  /**
   Creates a new instance of CustomerAttribute
   */
  constructor(data: Partial<CustomerAttribute> = {}) {
    this._id = data.id!;
    this._value = data.value!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
    this._attributeDescription = data.attributeDescription;
    this._customerId = data.customerId!;
  }
  /**
   The ID of the attribute
   */
  get id(): string {
    return this._id;
  }
  /**
   The ID of the attribute
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   The value of the attribute
   */
  get value(): AttributeValue {
    return this._value;
  }
  /**
   The value of the attribute
   */
  set value(value: AttributeValue) {
    this._value = value;
  }
  /**
   The date when the attribute was created
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The date when the attribute was created
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The date when the attribute was last modified
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The date when the attribute was last modified
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   The ID of the user that created the attribute
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   The ID of the user that created the attribute
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   The ID of the user that last modified the attribute
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   The ID of the user that last modified the attribute
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   attributeDescription field
   */
  get attributeDescription(): AttributeDescription | undefined {
    return this._attributeDescription;
  }
  /**
   attributeDescription field
   */
  set attributeDescription(value: AttributeDescription | undefined) {
    this._attributeDescription = value;
  }
  /**
   The ID of the customer this attribute belongs to
   */
  get customerId(): number {
    return this._customerId;
  }
  /**
   The ID of the customer this attribute belongs to
   */
  set customerId(value: number) {
    this._customerId = value;
  }
}