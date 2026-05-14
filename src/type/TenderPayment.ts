import { YesNo } from '../enum/YesNo';
/**
 Object class for TenderPayment
 */
export interface TenderPayment {
  /** The costs associated with the selected paymethod on this tender/order. VAT including */
  price: number;
  /** The costs associated with the selected paymethod on this tender/order. VAT excluding */
  priceNet: number;
  /** If false, shipping costs are automatically calculated */
  overruled?: YesNo;
  /** The tax associated with the selected paymethod on this tender/order */
  tax: number;
  /** The tax percentage associated with the selected paymethod on this tender/order */
  taxPercentage: number;
  /** The selected payment method for this tender/order */
  method: string;
  /** Payment status for this tender/order */
  status?: string;
  /** Payment status change date for this tender/order */
  statusDate?: string;
  /** Accounting ID for this tender/order */
  accountingId?: string;
}