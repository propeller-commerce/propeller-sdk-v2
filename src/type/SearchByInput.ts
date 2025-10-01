/**
 Input object for SearchByInput
 */
export interface SearchByInput {
  /** Propeller payment identifier */
  id?: string | number;
  /** PSP payment identifier */
  paymentId?: string;
  /** Propeller orderId unique payment identifier */
  orderId?: number;
}