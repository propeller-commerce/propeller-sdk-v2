import { CustomerCsvMapping } from './CustomerCsvMapping';
/**
 Input object for CustomerCsvInput
 */
export interface CustomerCsvInput {
  /** CSV file */
  file: File;
  /** A list of customers CSV field mappings */
  mappings?: CustomerCsvMapping[];
}