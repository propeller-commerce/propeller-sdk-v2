import { AttributeAttributeDescriptionSearchInput } from './AttributeAttributeDescriptionSearchInput';
/**
 Input object for AttributeSearchInput
 */
export interface AttributeSearchInput {
  /** List of productIds to search attributes for */
  productIds?: number[];
  /** LIst of categoryIds to search attributes for */
  categoryIds?: number[];
  /** List of companyIds to search attributes for */
  companyIds?: number[];
  /** List of contactIds to search attributes for */
  contactIds?: number[];
  /** List of customerIds to search attributes for */
  customerIds?: number[];
  /** List of clusterIds to search attributes for */
  clusterIds?: number[];
  /** Pagination offset number */
  offset?: number;
  /** Pagination page number */
  page?: number;
  /** AttributeDescription fields to search attributes for */
  attributeDescription?: AttributeAttributeDescriptionSearchInput;
}