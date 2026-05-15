import { YesNo } from '../enum/YesNo';
/**
 Object class for TenderPayment
 */
export class TenderPayment {
  /** The costs associated with the selected paymethod on this tender/order. VAT including */
  price!: number;
  /** The costs associated with the selected paymethod on this tender/order. VAT excluding */
  priceNet!: number;
  /** If false, shipping costs are automatically calculated */
  overruled?: YesNo;
  /** The tax associated with the selected paymethod on this tender/order */
  tax!: number;
  /** The tax percentage associated with the selected paymethod on this tender/order */
  taxPercentage!: number;
  /** The selected payment method for this tender/order */
  method!: string;
  /** Payment status for this tender/order */
  status?: string;
  /** Payment status change date for this tender/order */
  statusDate?: string;
  /** Accounting ID for this tender/order */
  accountingId?: string;
  constructor(data: Partial<TenderPayment> = {}) {
    Object.assign(this, data);
  }

  /** Returns `price`. */
  getPrice(): number {
    return this.price;
  }
  /** Returns `priceNet`. */
  getPriceNet(): number {
    return this.priceNet;
  }
  /** Returns `overruled`. */
  getOverruled(): YesNo | undefined {
    return this.overruled;
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
}