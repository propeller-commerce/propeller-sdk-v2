/**
 Object class for ClaimsResetAllResponse
 Response for bulk user claims reset operations. Provides detailed statistics about
 the batch claims reset process, including success and failure counts.
 */
export class ClaimsResetAllResponse {
  /** Number of users whose claims were successfully reset */
  private _successCount: number;
  /** Number of users whose claims reset failed */
  private _errorCount: number;
  /** Total number of users processed in the batch operation */
  private _totalProcessed: number;
  /** Whether the entire batch operation completed successfully */
  private _completed: boolean;
  /**
   Creates a new instance of ClaimsResetAllResponse
   */
  constructor(data: Partial<ClaimsResetAllResponse> = {}) {
    this._successCount = data.successCount!;
    this._errorCount = data.errorCount!;
    this._totalProcessed = data.totalProcessed!;
    this._completed = data.completed!;
  }
  /**
   Number of users whose claims were successfully reset
   */
  get successCount(): number {
    return this._successCount;
  }
  /**
   Number of users whose claims were successfully reset
   */
  set successCount(value: number) {
    this._successCount = value;
  }
  /**
   Number of users whose claims reset failed
   */
  get errorCount(): number {
    return this._errorCount;
  }
  /**
   Number of users whose claims reset failed
   */
  set errorCount(value: number) {
    this._errorCount = value;
  }
  /**
   Total number of users processed in the batch operation
   */
  get totalProcessed(): number {
    return this._totalProcessed;
  }
  /**
   Total number of users processed in the batch operation
   */
  set totalProcessed(value: number) {
    this._totalProcessed = value;
  }
  /**
   Whether the entire batch operation completed successfully
   */
  get completed(): boolean {
    return this._completed;
  }
  /**
   Whether the entire batch operation completed successfully
   */
  set completed(value: boolean) {
    this._completed = value;
  }
}
