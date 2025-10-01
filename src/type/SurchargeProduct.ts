import { Surcharge } from './Surcharge';
/**
 Object class for SurchargeProduct
 */
export class SurchargeProduct {
  /** The surcharge identifier */
  private _surchargeId: string;
  /** The product identifier */
  private _productId?: number;
  /** The surcharge object */
  private _surcharge: Surcharge;
  /**
   Creates a new instance of SurchargeProduct
   */
  constructor(data: Partial<SurchargeProduct> = {}) {
    this._surchargeId = data.surchargeId!;
    this._productId = data.productId;
    this._surcharge = data.surcharge!;
  }
  /**
   The surcharge identifier
   */
  get surchargeId(): string {
    return this._surchargeId;
  }
  /**
   The surcharge identifier
   */
  set surchargeId(value: string) {
    this._surchargeId = value;
  }
  /**
   The product identifier
   */
  get productId(): number | undefined {
    return this._productId;
  }
  /**
   The product identifier
   */
  set productId(value: number | undefined) {
    this._productId = value;
  }
  /**
   The surcharge object
   */
  get surcharge(): Surcharge {
    return this._surcharge;
  }
  /**
   The surcharge object
   */
  set surcharge(value: Surcharge) {
    this._surcharge = value;
  }
}