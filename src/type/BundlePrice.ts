/**
 Object class for BundlePrice
 */
export class BundlePrice {
  /** Net price of the bundle after discounts applied */
  net?: number;
  /** Gross price of the bundle after discounts applied */
  gross?: number;
  /** Original net price of the bundle before discounts applied */
  originalNet?: number;
  /** Original gross price of the bundle before discounts applied */
  originalGross?: number;
  constructor(data: Partial<BundlePrice> = {}) {
    Object.assign(this, data);
  }

  /** Returns `net`. */
  getNet(): number | undefined {
    return this.net;
  }
  /** Returns `gross`. */
  getGross(): number | undefined {
    return this.gross;
  }
  /** Returns `originalNet`. */
  getOriginalNet(): number | undefined {
    return this.originalNet;
  }
  /** Returns `originalGross`. */
  getOriginalGross(): number | undefined {
    return this.originalGross;
  }
}