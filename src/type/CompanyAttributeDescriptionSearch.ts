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

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
}