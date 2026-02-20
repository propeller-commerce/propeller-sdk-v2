import { ALLOW_QUOTE_INVALIDATION } from '../enum/ALLOW_QUOTE_INVALIDATION';
import { RESTRICT_SALES_PRICING_VISIBILITY } from '../enum/RESTRICT_SALES_PRICING_VISIBILITY';
import { LocalizedString } from './LocalizedString';
import { Channel } from './Channel';
/**
 Object class for Tenant
 Represents a tenant - the top-level organizational unit in the system.
 Tenants contain channels and have their own configuration settings.
 */
export class Tenant {
  /** Unique identifier for the tenant */
  private _id: string;
  /** Display name of the tenant */
  private _name: string;
  /** Localized descriptions of the tenant in different languages */
  private _descriptions?: LocalizedString[];
  /** Timestamp when the tenant was created */
  private _createdAt: string;
  /** Timestamp when the tenant was last modified */
  private _lastModifiedAt: string;
  /** Controls whether sales pricing information is restricted within this tenant */
  private _restrictSalesPricingVisibility: RESTRICT_SALES_PRICING_VISIBILITY;
  /** Controls whether quotes can be manually invalidated within this tenant */
  private _allowQuoteInvalidation: ALLOW_QUOTE_INVALIDATION;
  /** Default number of days before quotes expire within this tenant */
  private _quoteDefaultExpiryPeriodDays?: number;
  /** All channels belonging to this tenant */
  private _channels: Channel[];
  /**
   Creates a new instance of Tenant
   */
  constructor(data: Partial<Tenant> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._descriptions = data.descriptions;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._restrictSalesPricingVisibility = data.restrictSalesPricingVisibility!;
    this._allowQuoteInvalidation = data.allowQuoteInvalidation!;
    this._quoteDefaultExpiryPeriodDays = data.quoteDefaultExpiryPeriodDays;
    this._channels = data.channels!;
  }
  /**
   Unique identifier for the tenant
   */
  get id(): string {
    return this._id;
  }
  /**
   Unique identifier for the tenant
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Display name of the tenant
   */
  get name(): string {
    return this._name;
  }
  /**
   Display name of the tenant
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Localized descriptions of the tenant in different languages
   */
  get descriptions(): LocalizedString[] | undefined {
    return this._descriptions;
  }
  /**
   Localized descriptions of the tenant in different languages
   */
  set descriptions(value: LocalizedString[] | undefined) {
    this._descriptions = value;
  }
  /**
   Timestamp when the tenant was created
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Timestamp when the tenant was created
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Timestamp when the tenant was last modified
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Timestamp when the tenant was last modified
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Controls whether sales pricing information is restricted within this tenant
   */
  get restrictSalesPricingVisibility(): RESTRICT_SALES_PRICING_VISIBILITY {
    return this._restrictSalesPricingVisibility;
  }
  /**
   Controls whether sales pricing information is restricted within this tenant
   */
  set restrictSalesPricingVisibility(value: RESTRICT_SALES_PRICING_VISIBILITY) {
    this._restrictSalesPricingVisibility = value;
  }
  /**
   Controls whether quotes can be manually invalidated within this tenant
   */
  get allowQuoteInvalidation(): ALLOW_QUOTE_INVALIDATION {
    return this._allowQuoteInvalidation;
  }
  /**
   Controls whether quotes can be manually invalidated within this tenant
   */
  set allowQuoteInvalidation(value: ALLOW_QUOTE_INVALIDATION) {
    this._allowQuoteInvalidation = value;
  }
  /**
   Default number of days before quotes expire within this tenant
   */
  get quoteDefaultExpiryPeriodDays(): number | undefined {
    return this._quoteDefaultExpiryPeriodDays;
  }
  /**
   Default number of days before quotes expire within this tenant
   */
  set quoteDefaultExpiryPeriodDays(value: number | undefined) {
    this._quoteDefaultExpiryPeriodDays = value;
  }
  /**
   All channels belonging to this tenant
   */
  get channels(): Channel[] {
    return this._channels;
  }
  /**
   All channels belonging to this tenant
   */
  set channels(value: Channel[]) {
    this._channels = value;
  }
}
