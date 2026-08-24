/**
 Object class for BulkDeleteResponse
 */
export interface BulkDeleteResponse {
  /** List of deleted item ids */
  deletedIds: string[];
  /** List of failed item ids */
  failedIds: string[];
}
