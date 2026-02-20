import { ClusterBulkMoveErrorCode } from '../enum/ClusterBulkMoveErrorCode';
/**
 Object class for ClusterBulkMoveError
 Error information for a failed cluster move operation.
 */
export class ClusterBulkMoveError {
  /** Error code indicating the type of error. Can be VALIDATION, DB_INSERT, or UNKNOWN. */
  private _code: ClusterBulkMoveErrorCode;
  /** List of error messages describing what went wrong during the cluster move operation */
  private _messages: string[];
  /** The cluster record that failed (JSON representation) */
  private _record?: string;
  /** Row number in the input array where the error occurred */
  private _rowNumber?: number;
  /**
   Creates a new instance of ClusterBulkMoveError
   */
  constructor(data: Partial<ClusterBulkMoveError> = {}) {
    this._code = data.code!;
    this._messages = data.messages!;
    this._record = data.record;
    this._rowNumber = data.rowNumber;
  }
  /**
   Error code indicating the type of error
   */
  get code(): ClusterBulkMoveErrorCode {
    return this._code;
  }
  /**
   Error code indicating the type of error
   */
  set code(value: ClusterBulkMoveErrorCode) {
    this._code = value;
  }
  /**
   List of error messages
   */
  get messages(): string[] {
    return this._messages;
  }
  /**
   List of error messages
   */
  set messages(value: string[]) {
    this._messages = value;
  }
  /**
   The cluster record that failed (JSON representation)
   */
  get record(): string | undefined {
    return this._record;
  }
  /**
   The cluster record that failed (JSON representation)
   */
  set record(value: string | undefined) {
    this._record = value;
  }
  /**
   Row number in the input array where the error occurred
   */
  get rowNumber(): number | undefined {
    return this._rowNumber;
  }
  /**
   Row number in the input array where the error occurred
   */
  set rowNumber(value: number | undefined) {
    this._rowNumber = value;
  }
}
