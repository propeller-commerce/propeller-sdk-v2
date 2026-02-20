/**
 Object class for BulkDeleteResponse
 */
export class BulkDeleteResponse {
  /** List of deleted item ids */
  private _deletedIds: string[];
  /** List of failed item ids */
  private _failedIds: string[];
  /**
   Creates a new instance of BulkDeleteResponse
   */
  constructor(data: Partial<BulkDeleteResponse> = {}) {
    this._deletedIds = data.deletedIds!;
    this._failedIds = data.failedIds!;
  }
  /**
   List of deleted item ids
   */
  get deletedIds(): string[] {
    return this._deletedIds;
  }
  /**
   List of deleted item ids
   */
  set deletedIds(value: string[]) {
    this._deletedIds = value;
  }
  /**
   List of failed item ids
   */
  get failedIds(): string[] {
    return this._failedIds;
  }
  /**
   List of failed item ids
   */
  set failedIds(value: string[]) {
    this._failedIds = value;
  }
}
