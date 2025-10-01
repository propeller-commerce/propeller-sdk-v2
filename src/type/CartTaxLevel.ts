/**
 Object class for CartTaxLevel
 */
export class CartTaxLevel {
  /** Tax level's percentage */
  private _taxPercentage: number;
  /** Total tax added for to the cart for the tax level's tax code */
  private _price: number;
  /** Total discount for the tax level's code */
  private _discount?: number;
  /**
   Creates a new instance of CartTaxLevel
   */
  constructor(data: Partial<CartTaxLevel> = {}) {
    this._taxPercentage = data.taxPercentage!;
    this._price = data.price!;
    this._discount = data.discount;
  }
  /**
   Tax level's percentage
   */
  get taxPercentage(): number {
    return this._taxPercentage;
  }
  /**
   Tax level's percentage
   */
  set taxPercentage(value: number) {
    this._taxPercentage = value;
  }
  /**
   Total tax added for to the cart for the tax level's tax code
   */
  get price(): number {
    return this._price;
  }
  /**
   Total tax added for to the cart for the tax level's tax code
   */
  set price(value: number) {
    this._price = value;
  }
  /**
   Total discount for the tax level's code
   */
  get discount(): number | undefined {
    return this._discount;
  }
  /**
   Total discount for the tax level's code
   */
  set discount(value: number | undefined) {
    this._discount = value;
  }
}