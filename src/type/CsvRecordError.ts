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

  /** Returns `code`. */
  getCode(): CsvRecordErrorCode {
    return this.code;
  }
  /** Returns `messages`. */
  getMessages(): string[] {
    return this.messages;
  }
  /** Returns `record`. */
  getRecord(): any | undefined {
    return this.record;
  }
  /** Returns `rowNumber`. */
  getRowNumber(): number | undefined {
    return this.rowNumber;
  }
}