import { ShopPriceCalculationConfig } from './ShopPriceCalculationConfig';
/**
 Object class for Shop
 */
export interface Shop {
  /** shopId field */
  shopId: number;
  /** name field */
  name: string;
  /** Shop purchase root id */
  purchaseRootId?: number;
  /** Shop customer root id */
  userRootId?: number;
  /** enableIncentives field */
  enableIncentives: boolean;
  /** Shop price calculation configuration */
  priceCalculationConfig: ShopPriceCalculationConfig;
  /** debtorId field */
  debtorId?: string;
  /** cocNumber field */
  cocNumber?: string;
  /** taxNumber field */
  taxNumber?: string;
}