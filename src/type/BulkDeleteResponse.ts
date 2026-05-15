/**
 Object class for BulkDeleteResponse
 */
export class BulkDeleteResponse {
  /** List of deleted item ids */
  deletedIds!: string[];
  /** List of failed item ids */
  failedIds!: string[];
  constructor(data: Partial<BulkDeleteResponse> = {}) {
    Object.assign(this, data);
  }
}
