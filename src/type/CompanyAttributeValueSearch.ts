/**
 Object class for CompanyAttributeValueSearch
 */
export class CompanyAttributeValueSearch {
  /** AttributeValue id */
  id!: string;
  /** AttributeValue type */
  type!: string;
  constructor(data: Partial<CompanyAttributeValueSearch> = {}) {
    Object.assign(this, data);
  }
}