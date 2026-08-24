import { ContactCsvMapping } from './ContactCsvMapping';
/**
 Input object for ContactCsvInput
 */
export interface ContactCsvInput {
  /** CSV file */
  file: File;
  /** A list of contacts CSV field mappings */
  mappings?: ContactCsvMapping[];
}