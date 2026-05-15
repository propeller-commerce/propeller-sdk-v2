import { CsvRecordError } from './CsvRecordError';
/**
 Object class for CsvImportResponse
 */
export class CsvImportResponse {
  /** importedCount field */
  importedCount!: number;
  /** errors field */
  errors?: CsvRecordError[];
  constructor(data: Partial<CsvImportResponse> = {}) {
    Object.assign(this, data);
  }
}