import { YesNo } from '../enum/YesNo';
/**
 Input object for OrderPaymentInput
 */
export interface OrderPaymentInput {
  /** The transaction cost including tax */
  net: number;
  /** The transaction cost excluding tax */
  gross: number;
  /** The transaction cost tax */
  tax: number;
  /** The transaction costs tax percentage */
  taxPercentage: number;
  /** The paymethod for this Order */
  method: string;
  /** The transaction status */
  status?: string;
  /** Last time the transaction status was changed */
  statusDate?: string;
  /** The accountingId that belongs to this order */
  accountingId?: string;
  /** Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
  overruled?: YesNo;
}