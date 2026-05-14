import { ClusterBulkMoveError } from './ClusterBulkMoveError';
/**
 Object class for ClusterBulkMoveResponse
 Response for bulk cluster move operations.
 Contains the count of successfully moved clusters and any errors that occurred.
 */
export interface ClusterBulkMoveResponse {
  /** Number of clusters successfully moved */
  movedCount: number;
  /** List of errors that occurred during the operation */
  errors: ClusterBulkMoveError[];
}
