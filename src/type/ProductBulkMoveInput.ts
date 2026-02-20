import { ProductMoveItem } from './ProductMoveItem';
/**
 Input object for ProductBulkMoveInput
 Input for bulk moving products to categories.
 */
export interface ProductBulkMoveInput {
  /** List of product move operations */
  products: ProductMoveItem[];
}
