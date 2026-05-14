/**
 Object class for ClaimsResetAllResponse
 Response for bulk user claims reset operations. Provides detailed statistics about
 the batch claims reset process, including success and failure counts.
 */
export class ClaimsResetAllResponse {
  /** Number of users whose claims were successfully reset */
  successCount!: number;
  /** Number of users whose claims reset failed */
  errorCount!: number;
  /** Total number of users processed in the batch operation */
  totalProcessed!: number;
  /** Whether the entire batch operation completed successfully */
  completed!: boolean;
  constructor(data: Partial<ClaimsResetAllResponse> = {}) {
    Object.assign(this, data);
  }
}
