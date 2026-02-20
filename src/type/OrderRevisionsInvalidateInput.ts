/**
 Input object for OrderRevisionsInvalidateInput
 */
export interface OrderRevisionsInvalidateInput {
  /** ID of the order whose revisions should be invalidated */
  orderId: number;
  /** List of revision numbers to invalidate for this order */
  revisionNumbers: number[];
  /** Reason for invalidation */
  reason?: string;
}
