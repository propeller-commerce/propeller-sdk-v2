import { BulkCostPriceCsvMapping } from './BulkCostPriceCsvMapping';
/**
 Input object for BulkCostPriceCsvInput
 */
export interface BulkCostPriceCsvInput {
  /** CSV file */
  file: File;
  /** List of BulkCostPrice mappings */
  mappings?: BulkCostPriceCsvMapping[];
}