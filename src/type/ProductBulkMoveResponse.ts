import { ProductBulkMoveError } from './ProductBulkMoveError';
/**
 Object class for ProductBulkMoveResponse
 Response for bulk product move operations.
 Provides detailed feedback including the count of successfully moved products and any errors.
 */
export class ProductBulkMoveResponse {
  /** Number of products successfully moved to their target categories */
  private _movedCount: number;
  /** Collection of errors encountered during the bulk move operation */
  private _errors: ProductBulkMoveError[];
  /**
   Creates a new instance of ProductBulkMoveResponse
   */
  constructor(data: Partial<ProductBulkMoveResponse> = {}) {
    this._movedCount = data.movedCount!;
    this._errors = data.errors!;
  }
  /**
   Number of products successfully moved
   */
  get movedCount(): number {
    return this._movedCount;
  }
  /**
   Number of products successfully moved
   */
  set movedCount(value: number) {
    this._movedCount = value;
  }
  /**
   Collection of errors encountered during the bulk move operation
   */
  get errors(): ProductBulkMoveError[] {
    return this._errors;
  }
  /**
   Collection of errors encountered during the bulk move operation
   */
  set errors(value: ProductBulkMoveError[]) {
    this._errors = value;
  }
}
