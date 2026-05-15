import { CompanyAttributeValueSearch } from './CompanyAttributeValueSearch';
import { CompanyAttributeDescriptionSearch } from './CompanyAttributeDescriptionSearch';
/**
 Object class for CompanyAttributeSearch
 */
export class CompanyAttributeSearch {
  /** Attribute id */
  id!: string;
  /** Attribute value */
  value!: CompanyAttributeValueSearch;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Created by id */
  createdBy?: number;
  /** Last modified by id */
  lastModifiedBy?: number;
  /** Attribute Description */
  attributeDescription?: CompanyAttributeDescriptionSearch;
  constructor(data: Partial<CompanyAttributeSearch> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `value` as a CompanyAttributeValueSearch instance (coerced on first access). */
  getValue(): CompanyAttributeValueSearch | undefined {
    if (this.value == null) return undefined;
    if (!(this.value instanceof CompanyAttributeValueSearch)) {
      this.value = new CompanyAttributeValueSearch(this.value as any);
    }
    return this.value;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns `attributeDescription` as a CompanyAttributeDescriptionSearch instance (coerced on first access). */
  getAttributeDescription(): CompanyAttributeDescriptionSearch | undefined {
    if (this.attributeDescription == null) return undefined;
    if (!(this.attributeDescription instanceof CompanyAttributeDescriptionSearch)) {
      this.attributeDescription = new CompanyAttributeDescriptionSearch(this.attributeDescription as any);
    }
    return this.attributeDescription;
  }
}