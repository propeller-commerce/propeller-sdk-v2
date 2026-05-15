import { ProductBulkMoveErrorCode } from '../enum/ProductBulkMoveErrorCode';
/**
 Object class for ProductBulkMoveError
 Error information for a product that failed to move during bulk move operation.
 */
export class ProductBulkMoveError {
  /** Error code indicating the type of error that occurred */
  code!: ProductBulkMoveErrorCode;
  /** List of error messages describing what went wrong */
  messages!: string[];
  /** The product record that failed to move (JSON data) */
  record?: any;
  /** Row number in the input array where the error occurred */
  rowNumber?: number;
  constructor(data: Partial<ProductBulkMoveError> = {}) {
    Object.assign(this, data);
  }

  /** Returns `code`. */
  getCode(): ProductBulkMoveErrorCode {
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
