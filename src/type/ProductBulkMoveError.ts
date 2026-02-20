import { ProductBulkMoveErrorCode } from '../enum/ProductBulkMoveErrorCode';
/**
 Object class for ProductBulkMoveError
 Error information for a product that failed to move during bulk move operation.
 */
export class ProductBulkMoveError {
  /** Error code indicating the type of error that occurred */
  private _code: ProductBulkMoveErrorCode;
  /** List of error messages describing what went wrong */
  private _messages: string[];
  /** The product record that failed to move (JSON data) */
  private _record?: any;
  /** Row number in the input array where the error occurred */
  private _rowNumber?: number;
  /**
   Creates a new instance of ProductBulkMoveError
   */
  constructor(data: Partial<ProductBulkMoveError> = {}) {
    this._code = data.code!;
    this._messages = data.messages!;
    this._record = data.record;
    this._rowNumber = data.rowNumber;
  }
  /**
   Error code indicating the type of error that occurred
   */
  get code(): ProductBulkMoveErrorCode {
    return this._code;
  }
  /**
   Error code indicating the type of error that occurred
   */
  set code(value: ProductBulkMoveErrorCode) {
    this._code = value;
  }
  /**
   List of error messages describing what went wrong
   */
  get messages(): string[] {
    return this._messages;
  }
  /**
   List of error messages describing what went wrong
   */
  set messages(value: string[]) {
    this._messages = value;
  }
  /**
   The product record that failed to move
   */
  get record(): any {
    return this._record;
  }
  /**
   The product record that failed to move
   */
  set record(value: any) {
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
