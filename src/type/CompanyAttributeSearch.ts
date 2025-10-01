import { CompanyAttributeValueSearch } from './CompanyAttributeValueSearch';
import { CompanyAttributeDescriptionSearch } from './CompanyAttributeDescriptionSearch';
/**
 Object class for CompanyAttributeSearch
 */
export class CompanyAttributeSearch {
  /** Attribute id */
  private _id: string;
  /** Attribute value */
  private _value: CompanyAttributeValueSearch;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Created by id */
  private _createdBy?: number;
  /** Last modified by id */
  private _lastModifiedBy?: number;
  /** Attribute Description */
  private _attributeDescription?: CompanyAttributeDescriptionSearch;
  /**
   Creates a new instance of CompanyAttributeSearch
   */
  constructor(data: Partial<CompanyAttributeSearch> = {}) {
    this._id = data.id!;
    this._value = data.value!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._createdBy = data.createdBy;
    this._lastModifiedBy = data.lastModifiedBy;
    this._attributeDescription = data.attributeDescription;
  }
  /**
   Attribute id
   */
  get id(): string {
    return this._id;
  }
  /**
   Attribute id
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Attribute value
   */
  get value(): CompanyAttributeValueSearch {
    return this._value;
  }
  /**
   Attribute value
   */
  set value(value: CompanyAttributeValueSearch) {
    this._value = value;
  }
  /**
   Creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Created by id
   */
  get createdBy(): number | undefined {
    return this._createdBy;
  }
  /**
   Created by id
   */
  set createdBy(value: number | undefined) {
    this._createdBy = value;
  }
  /**
   Last modified by id
   */
  get lastModifiedBy(): number | undefined {
    return this._lastModifiedBy;
  }
  /**
   Last modified by id
   */
  set lastModifiedBy(value: number | undefined) {
    this._lastModifiedBy = value;
  }
  /**
   Attribute Description
   */
  get attributeDescription(): CompanyAttributeDescriptionSearch | undefined {
    return this._attributeDescription;
  }
  /**
   Attribute Description
   */
  set attributeDescription(value: CompanyAttributeDescriptionSearch | undefined) {
    this._attributeDescription = value;
  }
}