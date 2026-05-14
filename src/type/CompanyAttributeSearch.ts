import { CompanyAttributeValueSearch } from './CompanyAttributeValueSearch';
import { CompanyAttributeDescriptionSearch } from './CompanyAttributeDescriptionSearch';
/**
 Object class for CompanyAttributeSearch
 */
export interface CompanyAttributeSearch {
  /** Attribute id */
  id: string;
  /** Attribute value */
  value: CompanyAttributeValueSearch;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Created by id */
  createdBy?: number;
  /** Last modified by id */
  lastModifiedBy?: number;
  /** Attribute Description */
  attributeDescription?: CompanyAttributeDescriptionSearch;
}