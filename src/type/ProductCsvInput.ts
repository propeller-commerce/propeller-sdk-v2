import { ProductCsvMapping } from './ProductCsvMapping';
/**
 Input object for ProductCsvInput
 */
export interface ProductCsvInput {
  /** CSV file */
  file: File;
  /** A list of products CSV field mappings */
  mappings?: ProductCsvMapping[];
}