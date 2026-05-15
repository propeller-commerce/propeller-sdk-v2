import { ShopPriceCalculationConfig } from './ShopPriceCalculationConfig';
/**
 Object class for Shop
 */
export class Shop {
  /** shopId field */
  shopId!: number;
  /** name field */
  name!: string;
  /** Shop purchase root id */
  purchaseRootId?: number;
  /** Shop customer root id */
  userRootId?: number;
  /** enableIncentives field */
  enableIncentives!: boolean;
  /** Shop price calculation configuration */
  priceCalculationConfig!: ShopPriceCalculationConfig;
  /** debtorId field */
  debtorId?: string;
  /** cocNumber field */
  cocNumber?: string;
  /** taxNumber field */
  taxNumber?: string;
  constructor(data: Partial<Shop> = {}) {
    Object.assign(this, data);
  }

  /** Returns `shopId`. */
  getShopId(): number {
    return this.shopId;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `purchaseRootId`. */
  getPurchaseRootId(): number | undefined {
    return this.purchaseRootId;
  }
  /** Returns `userRootId`. */
  getUserRootId(): number | undefined {
    return this.userRootId;
  }
  /** Returns `enableIncentives`. */
  getEnableIncentives(): boolean {
    return this.enableIncentives;
  }
  /** Returns `priceCalculationConfig` as a ShopPriceCalculationConfig instance (coerced on first access). */
  getPriceCalculationConfig(): ShopPriceCalculationConfig | undefined {
    if (this.priceCalculationConfig == null) return undefined;
    if (!(this.priceCalculationConfig instanceof ShopPriceCalculationConfig)) {
      this.priceCalculationConfig = new ShopPriceCalculationConfig(this.priceCalculationConfig as any);
    }
    return this.priceCalculationConfig;
  }
  /** Returns `debtorId`. */
  getDebtorId(): string | undefined {
    return this.debtorId;
  }
  /** Returns `cocNumber`. */
  getCocNumber(): string | undefined {
    return this.cocNumber;
  }
  /** Returns `taxNumber`. */
  getTaxNumber(): string | undefined {
    return this.taxNumber;
  }
}