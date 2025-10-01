import { ProductSearchableField } from '../enum/ProductSearchableField';
/**
 Input object for SearchFieldsInput
 */
export interface SearchFieldsInput {
  /** List of available sortable fields */
  fieldNames: ProductSearchableField[];
  /** Search boost value */
  boost: number;
}