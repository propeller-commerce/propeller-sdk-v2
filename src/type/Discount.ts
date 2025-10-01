import { PriceDiscountType } from '../enum/PriceDiscountType';
import { Category } from './Category';
import { Pricesheet } from './Pricesheet';
import { Product } from './Product';
/**
 Object class for Discount
 */
export class Discount {
  /** Category Id */
  private _categoryId?: number;
  /** category field */
  private _category?: Category;
  /** Primary identifier */
  private _id: string;
  /** Creation date */
  private _createdAt: string;
  /** Last modified date */
  private _lastModifiedAt: string;
  /** Discount value, either percentage or fixed amount */
  private _value: number;
  /** Indicates the minimum quantity threshold needed to qualify for the bulk price. */
  private _quantityFrom: number;
  /** Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string. */
  private _validFrom?: string;
  /** End date of the bulk pricing offer. Must be a valid ISO 8601 date string. */
  private _validTo?: string;
  /** pricesheet foreign identifier */
  private _pricesheetId: string;
  /** Product Id */
  private _productId?: number;
  /** Price group */
  private _priceGroup?: string;
  /** The method used to apply discounts for bulk prices / volume discounts. */
  private _discountType: PriceDiscountType;
  /** AUTH: Role=[pricing.OWNER] */
  private _pricesheet?: Pricesheet;
  /** product field */
  private _product?: Product;
  /**
   Creates a new instance of Discount
   */
  constructor(data: Partial<Discount> = {}) {
    this._categoryId = data.categoryId;
    this._category = data.category;
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._value = data.value!;
    this._quantityFrom = data.quantityFrom!;
    this._validFrom = data.validFrom;
    this._validTo = data.validTo;
    this._pricesheetId = data.pricesheetId!;
    this._productId = data.productId;
    this._priceGroup = data.priceGroup;
    this._discountType = data.discountType!;
    this._pricesheet = data.pricesheet;
    this._product = data.product;
  }
  /**
   Category Id
   */
  get categoryId(): number | undefined {
    return this._categoryId;
  }
  /**
   Category Id
   */
  set categoryId(value: number | undefined) {
    this._categoryId = value;
  }
  /**
   category field
   */
  get category(): Category | undefined {
    return this._category;
  }
  /**
   category field
   */
  set category(value: Category | undefined) {
    this._category = value;
  }
  /**
   Primary identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Primary identifier
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Discount value, either percentage or fixed amount
   */
  get value(): number {
    return this._value;
  }
  /**
   Discount value, either percentage or fixed amount
   */
  set value(value: number) {
    this._value = value;
  }
  /**
   Indicates the minimum quantity threshold needed to qualify for the bulk price.
   */
  get quantityFrom(): number {
    return this._quantityFrom;
  }
  /**
   Indicates the minimum quantity threshold needed to qualify for the bulk price.
   */
  set quantityFrom(value: number) {
    this._quantityFrom = value;
  }
  /**
   Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
   */
  get validFrom(): string | undefined {
    return this._validFrom;
  }
  /**
   Start date from which the bulk pricing is effective. Must be a valid ISO 8601 date string.
   */
  set validFrom(value: string | undefined) {
    this._validFrom = value;
  }
  /**
   End date of the bulk pricing offer. Must be a valid ISO 8601 date string.
   */
  get validTo(): string | undefined {
    return this._validTo;
  }
  /**
   End date of the bulk pricing offer. Must be a valid ISO 8601 date string.
   */
  set validTo(value: string | undefined) {
    this._validTo = value;
  }
  /**
   pricesheet foreign identifier
   */
  get pricesheetId(): string {
    return this._pricesheetId;
  }
  /**
   pricesheet foreign identifier
   */
  set pricesheetId(value: string) {
    this._pricesheetId = value;
  }
  /**
   Product Id
   */
  get productId(): number | undefined {
    return this._productId;
  }
  /**
   Product Id
   */
  set productId(value: number | undefined) {
    this._productId = value;
  }
  /**
   Price group
   */
  get priceGroup(): string | undefined {
    return this._priceGroup;
  }
  /**
   Price group
   */
  set priceGroup(value: string | undefined) {
    this._priceGroup = value;
  }
  /**
   The method used to apply discounts for bulk prices / volume discounts.
   */
  get discountType(): PriceDiscountType {
    return this._discountType;
  }
  /**
   The method used to apply discounts for bulk prices / volume discounts.
   */
  set discountType(value: PriceDiscountType) {
    this._discountType = value;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  get pricesheet(): Pricesheet | undefined {
    return this._pricesheet;
  }
  /**
   AUTH: Role=[pricing.OWNER]
   */
  set pricesheet(value: Pricesheet | undefined) {
    this._pricesheet = value;
  }
  /**
   product field
   */
  get product(): Product | undefined {
    return this._product;
  }
  /**
   product field
   */
  set product(value: Product | undefined) {
    this._product = value;
  }
}