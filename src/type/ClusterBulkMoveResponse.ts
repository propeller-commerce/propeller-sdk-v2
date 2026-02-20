import { ClusterBulkMoveError } from './ClusterBulkMoveError';
/**
 Object class for ClusterBulkMoveResponse
 Response for bulk cluster move operations.
 Contains the count of successfully moved clusters and any errors that occurred.
 */
export class ClusterBulkMoveResponse {
  /** Number of clusters successfully moved */
  private _movedCount: number;
  /** List of errors that occurred during the operation */
  private _errors: ClusterBulkMoveError[];
  /**
   Creates a new instance of ClusterBulkMoveResponse
   */
  constructor(data: Partial<ClusterBulkMoveResponse> = {}) {
    this._movedCount = data.movedCount!;
    this._errors = data.errors!;
  }
  /**
   Number of clusters successfully moved
   */
  get movedCount(): number {
    return this._movedCount;
  }
  /**
   Number of clusters successfully moved
   */
  set movedCount(value: number) {
    this._movedCount = value;
  }
  /**
   List of errors that occurred during the operation
   */
  get errors(): ClusterBulkMoveError[] {
    return this._errors;
  }
  /**
   List of errors that occurred during the operation
   */
  set errors(value: ClusterBulkMoveError[]) {
    this._errors = value;
  }
}
