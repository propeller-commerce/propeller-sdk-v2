import { Category } from './Category';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for BaseProductCategoryRelationship
 */
export interface BaseProductCategoryRelationship {
  /** Globally unique identifier for the product or cluster. */
  uuid: string;
  /** Base product UUID */
  baseProductUuid: string;
  /** Category UUID */
  categoryUuid: string;
  /** Numeric category identifier retained for compatibility with legacy integrations. */
  categoryId: number;
  /** Whether this is the default category for the base product */
  isDefault: boolean;
  /** Sort order within the category */
  sortOrder: number;
  /** Timestamp marking when the record was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Timestamp marking the last modification of the record, in UTC ISO 8601 format. */
  lastModifiedAt: string;
  /** Reference to the underlying record in the shared product/cluster model. */
  baseProduct: IBaseProduct;
  /** Primary category associated with the product. */
  category: Category;
}
