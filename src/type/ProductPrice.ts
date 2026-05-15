import { PriceElementType } from '../enum/PriceElementType';
import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Taxcode } from '../enum/Taxcode';
import { IDiscount } from './IDiscount';
/**
 Object class for ProductPrice
 */
export class ProductPrice {
  /** productId field */
  productId!: number;
  /** type field */
  type!: PriceElementType;
  /** discountType field */
  discountType!: PriceDiscountType;
  /** list field */
  list?: number;
  /** cost field */
  cost?: number;
  /** net field */
  net?: number;
  /** gross field */
  gross?: number;
  /** discount field */
  discount?: IDiscount;
  /** taxCode field */
  taxCode?: Taxcode;
  /** quantity field */
  quantity!: number;
  constructor(data: Partial<ProductPrice> = {}) {
    Object.assign(this, data);
  }

  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `type`. */
  getType(): PriceElementType {
    return this.type;
  }
  /** Returns `discountType`. */
  getDiscountType(): PriceDiscountType {
    return this.discountType;
  }
  /** Returns `list`. */
  getList(): number | undefined {
    return this.list;
  }
  /** Returns `cost`. */
  getCost(): number | undefined {
    return this.cost;
  }
  /** Returns `net`. */
  getNet(): number | undefined {
    return this.net;
  }
  /** Returns `gross`. */
  getGross(): number | undefined {
    return this.gross;
  }
  /** Returns `discount`. */
  getDiscount(): IDiscount | undefined {
    return this.discount;
  }
  /** Returns `taxCode`. */
  getTaxCode(): Taxcode | undefined {
    return this.taxCode;
  }
  /** Returns `quantity`. */
  getQuantity(): number {
    return this.quantity;
  }
}