import { YesNo } from '../enum/YesNo';
/**
 Object class for OrderPaymentData
 */
export class OrderPaymentData {
  /** The transaction cost including tax */
  net!: number;
  /** The transaction cost excluding tax */
  gross!: number;
  /** The tax on the transaction costs */
  tax!: number;
  /** The transaction costs tax percentage */
  taxPercentage!: number;
  /** The paymethod for this Order */
  method!: string;
  /** The transaction status */
  status?: string;
  /** Last time the transaction status was changed */
  statusDate?: string;
  /** The accountingId that belongs to this order */
  accountingId?: string;
  /** Whether the transaction costs for this order are overruled, if N, the shipping costs will be recalculated on every mutation */
  overruled?: YesNo;
  constructor(data: Partial<OrderPaymentData> = {}) {
    Object.assign(this, data);
  }

  /** Returns `net`. */
  getNet(): number {
    return this.net;
  }
  /** Returns `gross`. */
  getGross(): number {
    return this.gross;
  }
  /** Returns `tax`. */
  getTax(): number {
    return this.tax;
  }
  /** Returns `taxPercentage`. */
  getTaxPercentage(): number {
    return this.taxPercentage;
  }
  /** Returns `method`. */
  getMethod(): string {
    return this.method;
  }
  /** Returns `status`. */
  getStatus(): string | undefined {
    return this.status;
  }
  /** Returns `statusDate`. */
  getStatusDate(): string | undefined {
    return this.statusDate;
  }
  /** Returns `accountingId`. */
  getAccountingId(): string | undefined {
    return this.accountingId;
  }
  /** Returns `overruled`. */
  getOverruled(): YesNo | undefined {
    return this.overruled;
  }
}