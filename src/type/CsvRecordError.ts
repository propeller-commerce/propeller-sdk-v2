import { CsvRecordErrorCode } from '../enum/CsvRecordErrorCode';
/**
 Object class for CsvRecordError
 */
export class CsvRecordError {
  /** code field */
  private _code: CsvRecordErrorCode;
  /** messages field */
  private _messages: string[];
  /** record field */
  private _record?: any;
  /** rowNumber field */
  private _rowNumber?: number;
  /**
   Creates a new instance of CsvRecordError
   */
  constructor(data: Partial<CsvRecordError> = {}) {
    this._code = data.code!;
    this._messages = data.messages!;
    this._record = data.record;
    this._rowNumber = data.rowNumber;
  }
  /**
   code field
   */
  get code(): CsvRecordErrorCode {
    return this._code;
  }
  /**
   code field
   */
  set code(value: CsvRecordErrorCode) {
    this._code = value;
  }
  /**
   messages field
   */
  get messages(): string[] {
    return this._messages;
  }
  /**
   messages field
   */
  set messages(value: string[]) {
    this._messages = value;
  }
  /**
   record field
   */
  get record(): any | undefined {
    return this._record;
  }
  /**
   record field
   */
  set record(value: any | undefined) {
    this._record = value;
  }
  /**
   rowNumber field
   */
  get rowNumber(): number | undefined {
    return this._rowNumber;
  }
  /**
   rowNumber field
   */
  set rowNumber(value: number | undefined) {
    this._rowNumber = value;
  }
}