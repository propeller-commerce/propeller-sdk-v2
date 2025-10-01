/**
 * @enum InvoiceStatus
 Status enumeration for invoices in the system
 */
export enum InvoiceStatus {
  /** Invoice has been created but not yet sent */
  DRAFT = "DRAFT",
  /** Invoice has been sent to customer */
  SENT = "SENT",
  /** Invoice payment is pending */
  PENDING = "PENDING",
  /** Invoice has been paid in full */
  PAID = "PAID",
  /** Invoice is partially paid */
  PARTIALLY_PAID = "PARTIALLY_PAID",
  /** Invoice is overdue */
  OVERDUE = "OVERDUE",
  /** Invoice has been cancelled */
  CANCELLED = "CANCELLED",
  /** Invoice has been refunded */
  REFUNDED = "REFUNDED"
}