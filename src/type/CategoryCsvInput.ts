import { CategoryCsvMapping } from './CategoryCsvMapping';
/**
 Input object for CategoryCsvInput
 */
export interface CategoryCsvInput {
  /** CSV file */
  file: File;
  /** List of Category mappings */
  mappings?: CategoryCsvMapping[];
}