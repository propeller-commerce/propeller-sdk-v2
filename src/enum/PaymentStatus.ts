/**
 * @enum PaymentStatus
 Available payment statuses
 */
export enum PaymentStatus {
  /** Payment is open and awaiting action */
  OPEN = "OPEN",
  /** Payment is pending confirmation */
  PENDING = "PENDING",
  /** Payment has been authorized but not yet captured */
  AUTHORIZED = "AUTHORIZED",
  /** Payment has been cancelled */
  CANCELLED = "CANCELLED",
  /** Payment authorization has expired */
  EXPIRED = "EXPIRED",
  /** Payment has failed */
  FAILED = "FAILED",
  /** Payment has been successfully completed */
  PAID = "PAID",
  /** Payment has been refunded */
  REFUNDED = "REFUNDED",
  /** Payment has been charged back */
  CHARGEBACK = "CHARGEBACK"
}