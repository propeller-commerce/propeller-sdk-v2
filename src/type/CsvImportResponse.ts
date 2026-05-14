import { CsvRecordError } from './CsvRecordError';
/**
 Object class for CsvImportResponse
 */
export interface CsvImportResponse {
  /** importedCount field */
  importedCount: number;
  /** errors field */
  errors?: CsvRecordError[];
}