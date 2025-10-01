import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeBulkResponse
 */
export class AttributeBulkResponse {
  /** ID of the created or updated attribute description */
  private _id?: string;
  /** Name of the created or updated attribute description */
  private _name: string;
  /** Success or error message */
  private _message?: string;
  /** Name of the attribute description the attribute is created for */
  private _key: string;
  /** The value for this attribute */
  private _value?: AttributeValue;
  /** Action performed on the attribute description */
  private _action: AttributeBulkResponse;
  /** Whether the action was successful or not */
  private _success: boolean;
  /** The productId of the attribute value */
  private _productId?: number;
  /** The categoryId of the attribute value */
  private _categoryId?: number;
  /** The clusterId of the attribute value */
  private _clusterId?: number;
  /** The companyId of the attribute value */
  private _companyId?: number;
  /** The contactId of the attribute value */
  private _contactId?: number;
  /** The customerId of the attribute value */
  private _customerId?: number;
  /**
   Creates a new instance of AttributeBulkResponse
   */
  constructor(data: Partial<AttributeBulkResponse> = {}) {
    this._id = data.id;
    this._name = data.name!;
    this._message = data.message;
    this._key = data.key!;
    this._value = data.value;
    this._action = data.action!;
    this._success = data.success!;
    this._productId = data.productId;
    this._categoryId = data.categoryId;
    this._clusterId = data.clusterId;
    this._companyId = data.companyId;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
  }
  /**
   ID of the created or updated attribute description
   */
  get id(): string | undefined {
    return this._id;
  }
  /**
   ID of the created or updated attribute description
   */
  set id(value: string | undefined) {
    this._id = value;
  }
  /**
   Name of the created or updated attribute description
   */
  get name(): string {
    return this._name;
  }
  /**
   Name of the created or updated attribute description
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Success or error message
   */
  get message(): string | undefined {
    return this._message;
  }
  /**
   Success or error message
   */
  set message(value: string | undefined) {
    this._message = value;
  }
  /**
   Name of the attribute description the attribute is created for
   */
  get key(): string {
    return this._key;
  }
  /**
   Name of the attribute description the attribute is created for
   */
  set key(value: string) {
    this._key = value;
  }
  /**
   The value for this attribute
   */
  get value(): AttributeValue | undefined {
    return this._value;
  }
  /**
   The value for this attribute
   */
  set value(value: AttributeValue | undefined) {
    this._value = value;
  }
  /**
   Action performed on the attribute description
   */
  get action(): AttributeBulkResponse {
    return this._action;
  }
  /**
   Action performed on the attribute description
   */
  set action(value: AttributeBulkResponse) {
    this._action = value;
  }
  /**
   Whether the action was successful or not
   */
  get success(): boolean {
    return this._success;
  }
  /**
   Whether the action was successful or not
   */
  set success(value: boolean) {
    this._success = value;
  }
  /**
   The productId of the attribute value
   */
  get productId(): number | undefined {
    return this._productId;
  }
  /**
   The productId of the attribute value
   */
  set productId(value: number | undefined) {
    this._productId = value;
  }
  /**
   The categoryId of the attribute value
   */
  get categoryId(): number | undefined {
    return this._categoryId;
  }
  /**
   The categoryId of the attribute value
   */
  set categoryId(value: number | undefined) {
    this._categoryId = value;
  }
  /**
   The clusterId of the attribute value
   */
  get clusterId(): number | undefined {
    return this._clusterId;
  }
  /**
   The clusterId of the attribute value
   */
  set clusterId(value: number | undefined) {
    this._clusterId = value;
  }
  /**
   The companyId of the attribute value
   */
  get companyId(): number | undefined {
    return this._companyId;
  }
  /**
   The companyId of the attribute value
   */
  set companyId(value: number | undefined) {
    this._companyId = value;
  }
  /**
   The contactId of the attribute value
   */
  get contactId(): number | undefined {
    return this._contactId;
  }
  /**
   The contactId of the attribute value
   */
  set contactId(value: number | undefined) {
    this._contactId = value;
  }
  /**
   The customerId of the attribute value
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   The customerId of the attribute value
   */
  set customerId(value: number | undefined) {
    this._customerId = value;
  }
}