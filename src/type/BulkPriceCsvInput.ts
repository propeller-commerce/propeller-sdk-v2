import { BulkPriceCsvMapping } from './BulkPriceCsvMapping';
/**
 Input object for BulkPriceCsvInput
 */
export interface BulkPriceCsvInput {
  /** CSV file */
  file: File;
  /** List of BulkPrice mappings */
  mappings?: BulkPriceCsvMapping[];
}