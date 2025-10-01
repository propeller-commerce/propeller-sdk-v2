import { DiscountCsvMapping } from './DiscountCsvMapping';
/**
 Input object for DiscountCsvInput
 */
export interface DiscountCsvInput {
  /** CSV file */
  file: File;
  /** List of Discount mappings */
  mappings?: DiscountCsvMapping[];
}