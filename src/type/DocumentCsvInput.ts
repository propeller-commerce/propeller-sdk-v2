import { DocumentCsvMapping } from './DocumentCsvMapping';
/**
 Input object for DocumentCsvInput
 */
export interface DocumentCsvInput {
  /** CSV file */
  file: File;
  /** A list of MediaDocuments CSV field mappings */
  mappings?: DocumentCsvMapping[];
}