/**
 Object class for ProductClusterOptionRelationship
 */
export interface ProductClusterOptionRelationship {
  /** Globally unique identifier for the product or cluster. */
  uuid: string;
  /** Product UUID */
  productUuid: string;
  /** Cluster option UUID */
  clusterOptionUuid: string;
  /** Whether this is the default product for the cluster option */
  isDefault: boolean;
  /** Sort order within the cluster option */
  sortOrder?: number;
  /** Timestamp marking when the record was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Timestamp marking the last modification of the record, in UTC ISO 8601 format. */
  lastModifiedAt: string;
}
