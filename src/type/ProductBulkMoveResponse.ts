import { ProductBulkMoveError } from './ProductBulkMoveError';
/**
 Object class for ProductBulkMoveResponse
 Response for bulk product move operations.
 Provides detailed feedback including the count of successfully moved products and any errors.
 */
export class ProductBulkMoveResponse {
  /** Number of products successfully moved to their target categories */
  movedCount!: number;
  /** Collection of errors encountered during the bulk move operation */
  errors!: ProductBulkMoveError[];
  constructor(data: Partial<ProductBulkMoveResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `movedCount`. */
  getMovedCount(): number {
    return this.movedCount;
  }
  /** Returns `errors` as ProductBulkMoveError instances (coerced on first access). */
  getErrors(): ProductBulkMoveError[] {
    if (!this.errors) return [];
    this.errors = this.errors.map((x: any) => x instanceof ProductBulkMoveError ? x : new ProductBulkMoveError(x));
    return this.errors;
  }
}
