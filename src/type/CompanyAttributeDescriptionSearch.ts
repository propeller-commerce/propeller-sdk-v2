/**
 Object class for CompanyAttributeDescriptionSearch
 */
export class CompanyAttributeDescriptionSearch {
  /** AttributeDescription id */
  id!: string;
  /** Descriptive identifier for this AttributeDescription */
  name!: string;
  constructor(data: Partial<CompanyAttributeDescriptionSearch> = {}) {
    Object.assign(this, data);
  }
}