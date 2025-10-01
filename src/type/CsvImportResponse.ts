import { CsvRecordError } from './CsvRecordError';
/**
 Object class for CsvImportResponse
 */
export class CsvImportResponse {
  /** importedCount field */
  private _importedCount: number;
  /** errors field */
  private _errors?: CsvRecordError[];
  /**
   Creates a new instance of CsvImportResponse
   */
  constructor(data: Partial<CsvImportResponse> = {}) {
    this._importedCount = data.importedCount!;
    this._errors = data.errors;
  }
  /**
   importedCount field
   */
  get importedCount(): number {
    return this._importedCount;
  }
  /**
   importedCount field
   */
  set importedCount(value: number) {
    this._importedCount = value;
  }
  /**
   errors field
   */
  get errors(): CsvRecordError[] | undefined {
    return this._errors;
  }
  /**
   errors field
   */
  set errors(value: CsvRecordError[] | undefined) {
    this._errors = value;
  }
}