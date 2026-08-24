import { ProductSearchableField } from '../enum/ProductSearchableField';
/**
 Input object for ProductSearchFieldsInput
 */
export interface ProductSearchFieldsInput {
  /** List of searchable fields to query against (e.g., NAME, SKU, DESCRIPTION) */
  fieldNames: ProductSearchableField[];
  /** Relevance boost value applied to matches in these fields */
  boost: number;
  /** Partial matching boost value for ngram/edge-ngram fields. When omitted, defaults to ceil(boost * 0.5) */
  partialBoost?: number;
}
