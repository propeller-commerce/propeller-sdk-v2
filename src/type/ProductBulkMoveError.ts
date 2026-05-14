import { ProductBulkMoveErrorCode } from '../enum/ProductBulkMoveErrorCode';
/**
 Object class for ProductBulkMoveError
 Error information for a product that failed to move during bulk move operation.
 */
export interface ProductBulkMoveError {
  /** Error code indicating the type of error that occurred */
  code: ProductBulkMoveErrorCode;
  /** List of error messages describing what went wrong */
  messages: string[];
  /** The product record that failed to move (JSON data) */
  record?: any;
  /** Row number in the input array where the error occurred */
  rowNumber?: number;
}
