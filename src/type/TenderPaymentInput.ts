/**
 Input object for TenderPaymentInput
 */
export interface TenderPaymentInput {
  /** The costs associated with the selected paymethod on this tender/order. VAT excluding. If omitted, payment costs are automatically calculated */
  price?: number;
  /** Payment method for this tender/order */
  method?: string;
  /** Payment status for this tender/order */
  status?: string;
  /** Accounting ID for this tender/order */
  accountingId?: string;
}