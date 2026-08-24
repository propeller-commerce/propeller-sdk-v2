import { ProductClass } from '../enum/ProductClass';
import { ProductStatus } from '../enum/ProductStatus';
/**
 Object class for ProductSearchCluster
 */
export interface ProductSearchCluster {
  /** Resource primary identifier */
  id: number;
  /** The class of the request resource */
  class: ProductClass;
  /** The UUID of the product or cluster */
  uuid: string;
  /** The creation date of this product or cluster */
  createdAt?: string;
  /** The last modified date of this product or cluster */
  lastModifiedAt?: string;
  /** The date this product or cluster was indexed */
  indexedAt?: string;
  /** Whether this product or cluster is marked for deleted */
  isDeleted: boolean;
  /** The status of this product or cluster */
  status: ProductStatus;
  /** The effective price for this product/cluster based on priceSheetId priority. Computed at query time using the provided priceSheetIds, falling back to default price. */
  effectivePrice?: number;
  /** The ID of this cluster */
  clusterId: number;
}
