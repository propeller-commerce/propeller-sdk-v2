import { Category } from './Category';
import { Product } from './Product';
/**
 Object class for ProductCategoryRelationship
 */
export interface ProductCategoryRelationship {
  /** Globally unique identifier for the product or cluster. */
  uuid: string;
  /** Product ID */
  productId: number;
  /** Numeric category identifier retained for compatibility with legacy integrations. */
  categoryId: number;
  /** Whether this is the default category for the product */
  isDefault: boolean;
  /** Sort order within the category */
  sortOrder: number;
  /** Timestamp marking when the record was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Timestamp marking the last modification of the record, in UTC ISO 8601 format. */
  lastModifiedAt: string;
  /** The product in this relationship */
  product: Product;
  /** Primary category associated with the product. */
  category: Category;
}
