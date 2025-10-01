import { CompanyCsvMapping } from './CompanyCsvMapping';
/**
 Input object for CompanyCsvInput
 */
export interface CompanyCsvInput {
  /** CSV file */
  file: File;
  /** A list of companies CSV field mappings */
  mappings?: CompanyCsvMapping[];
}