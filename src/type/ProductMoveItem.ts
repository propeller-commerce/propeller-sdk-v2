/**
 Input object for ProductMoveItem
 Input for a single product move operation.
 */
export interface ProductMoveItem {
  /** Product identifier to move */
  productId: number;
  /** Target category identifier */
  categoryId: number;
}
