import { ProductSearchableField } from '../enum/ProductSearchableField';
/**
 Input object for SearchFieldsInput
 */
export interface SearchFieldsInput {
  /** List of available sortable fields */
  fieldNames: ProductSearchableField[];
  /** Search boost value */
  boost: number;

  /** Partial matching boost value for ngram/edge-ngram fields. When omitted, defaults to ceil(boost * 0.5) */
  partialBoost?: number;
}