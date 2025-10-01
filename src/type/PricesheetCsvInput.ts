import { PricesheetCsvMapping } from './PricesheetCsvMapping';
/**
 Input object for PricesheetCsvInput
 */
export interface PricesheetCsvInput {
  /** CSV file */
  file: File;
  /** List of Pricesheet mappings */
  mappings?: PricesheetCsvMapping[];
}