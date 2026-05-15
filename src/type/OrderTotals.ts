import { OrderDiscountType } from '../enum/OrderDiscountType';
import { OrderTotalTaxPercentage } from './OrderTotalTaxPercentage';
/**
 Object class for OrderTotals
 */
export class OrderTotals {
  /** The total of this Order excluding tax */
  gross!: number;
  /** The total of this Order including tax */
  net!: number;
  /** The total amount of tax for this Order */
  tax!: number;
  /** The type of global discount */
  discountType!: OrderDiscountType;
  /** The discount value, can be absolute or a percentage depending on the discountType */
  discountValue!: number;
  /** The totals per tax percentage */
  taxPercentages!: OrderTotalTaxPercentage[];
  constructor(data: Partial<OrderTotals> = {}) {
    Object.assign(this, data);
  }

  /** Returns `gross`. */
  getGross(): number {
    return this.gross;
  }
  /** Returns `net`. */
  getNet(): number {
    return this.net;
  }
  /** Returns `tax`. */
  getTax(): number {
    return this.tax;
  }
  /** Returns `discountType`. */
  getDiscountType(): OrderDiscountType {
    return this.discountType;
  }
  /** Returns `discountValue`. */
  getDiscountValue(): number {
    return this.discountValue;
  }
  /** Returns `taxPercentages` as OrderTotalTaxPercentage instances (coerced on first access). */
  getTaxPercentages(): OrderTotalTaxPercentage[] {
    if (!this.taxPercentages) return [];
    this.taxPercentages = this.taxPercentages.map((x: any) => x instanceof OrderTotalTaxPercentage ? x : new OrderTotalTaxPercentage(x));
    return this.taxPercentages;
  }
}