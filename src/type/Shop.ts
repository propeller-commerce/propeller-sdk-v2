import { ShopPriceCalculationConfig } from './ShopPriceCalculationConfig';
/**
 Object class for Shop
 */
export class Shop {
  /** shopId field */
  private _shopId: number;
  /** name field */
  private _name: string;
  /** Shop purchase root id */
  private _purchaseRootId?: number;
  /** Shop customer root id */
  private _userRootId?: number;
  /** enableIncentives field */
  private _enableIncentives: boolean;
  /** Shop price calculation configuration */
  private _priceCalculationConfig: ShopPriceCalculationConfig;
  /** debtorId field */
  private _debtorId?: string;
  /** cocNumber field */
  private _cocNumber?: string;
  /** taxNumber field */
  private _taxNumber?: string;
  /**
   Creates a new instance of Shop
   */
  constructor(data: Partial<Shop> = {}) {
    this._shopId = data.shopId!;
    this._name = data.name!;
    this._purchaseRootId = data.purchaseRootId;
    this._userRootId = data.userRootId;
    this._enableIncentives = data.enableIncentives!;
    this._priceCalculationConfig = data.priceCalculationConfig!;
    this._debtorId = data.debtorId;
    this._cocNumber = data.cocNumber;
    this._taxNumber = data.taxNumber;
  }
  /**
   shopId field
   */
  get shopId(): number {
    return this._shopId;
  }
  /**
   shopId field
   */
  set shopId(value: number) {
    this._shopId = value;
  }
  /**
   name field
   */
  get name(): string {
    return this._name;
  }
  /**
   name field
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Shop purchase root id
   */
  get purchaseRootId(): number | undefined {
    return this._purchaseRootId;
  }
  /**
   Shop purchase root id
   */
  set purchaseRootId(value: number | undefined) {
    this._purchaseRootId = value;
  }
  /**
   Shop customer root id
   */
  get userRootId(): number | undefined {
    return this._userRootId;
  }
  /**
   Shop customer root id
   */
  set userRootId(value: number | undefined) {
    this._userRootId = value;
  }
  /**
   enableIncentives field
   */
  get enableIncentives(): boolean {
    return this._enableIncentives;
  }
  /**
   enableIncentives field
   */
  set enableIncentives(value: boolean) {
    this._enableIncentives = value;
  }
  /**
   Shop price calculation configuration
   */
  get priceCalculationConfig(): ShopPriceCalculationConfig {
    return this._priceCalculationConfig;
  }
  /**
   Shop price calculation configuration
   */
  set priceCalculationConfig(value: ShopPriceCalculationConfig) {
    this._priceCalculationConfig = value;
  }
  /**
   debtorId field
   */
  get debtorId(): string | undefined {
    return this._debtorId;
  }
  /**
   debtorId field
   */
  set debtorId(value: string | undefined) {
    this._debtorId = value;
  }
  /**
   cocNumber field
   */
  get cocNumber(): string | undefined {
    return this._cocNumber;
  }
  /**
   cocNumber field
   */
  set cocNumber(value: string | undefined) {
    this._cocNumber = value;
  }
  /**
   taxNumber field
   */
  get taxNumber(): string | undefined {
    return this._taxNumber;
  }
  /**
   taxNumber field
   */
  set taxNumber(value: string | undefined) {
    this._taxNumber = value;
  }
}