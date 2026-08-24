import { Cluster } from './Cluster';
import { Product } from './Product';
/**
 Object class for BaseProductClusterRelationship
 */
export interface BaseProductClusterRelationship {
  /** Globally unique identifier for the product or cluster. */
  uuid: string;
  /** Product UUID */
  productUuid: string;
  /** Cluster UUID */
  clusterUuid: string;
  /** Whether this is the default product for the cluster */
  isDefault: boolean;
  /** Sort order within the cluster */
  sortOrder: number;
  /** Timestamp marking when the record was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Timestamp marking the last modification of the record, in UTC ISO 8601 format. */
  lastModifiedAt: string;
  /** The product in this relationship */
  product: Product;
  /** The cluster in this relationship */
  cluster: Cluster;
}
