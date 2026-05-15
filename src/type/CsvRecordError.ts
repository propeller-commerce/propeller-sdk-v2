import { CsvRecordErrorCode } from '../enum/CsvRecordErrorCode';
/**
 Object class for CsvRecordError
 */
export class CsvRecordError {
  /** code field */
  code!: CsvRecordErrorCode;
  /** messages field */
  messages!: string[];
  /** record field */
  record?: any;
  /** rowNumber field */
  rowNumber?: number;
  constructor(data: Partial<CsvRecordError> = {}) {
    Object.assign(this, data);
  }
}