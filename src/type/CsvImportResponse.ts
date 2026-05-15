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

  /** Returns `importedCount`. */
  getImportedCount(): number {
    return this.importedCount;
  }
  /** Returns `errors` as CsvRecordError instances (coerced on first access). */
  getErrors(): CsvRecordError[] | undefined {
    if (!this.errors) return undefined;
    this.errors = this.errors.map((x: any) => x instanceof CsvRecordError ? x : new CsvRecordError(x));
    return this.errors;
  }
}