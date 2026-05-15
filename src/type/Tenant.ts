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
  id!: string;
  /** Display name of the tenant */
  name!: string;
  /** Localized descriptions of the tenant in different languages */
  descriptions?: LocalizedString[];
  /** Timestamp when the tenant was created */
  createdAt!: string;
  /** Timestamp when the tenant was last modified */
  lastModifiedAt!: string;
  /** Controls whether sales pricing information is restricted within this tenant */
  restrictSalesPricingVisibility!: RESTRICT_SALES_PRICING_VISIBILITY;
  /** Controls whether quotes can be manually invalidated within this tenant */
  allowQuoteInvalidation!: ALLOW_QUOTE_INVALIDATION;
  /** Default number of days before quotes expire within this tenant */
  quoteDefaultExpiryPeriodDays?: number;
  /** All channels belonging to this tenant */
  channels!: Channel[];
  constructor(data: Partial<Tenant> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `restrictSalesPricingVisibility`. */
  getRestrictSalesPricingVisibility(): RESTRICT_SALES_PRICING_VISIBILITY {
    return this.restrictSalesPricingVisibility;
  }
  /** Returns `allowQuoteInvalidation`. */
  getAllowQuoteInvalidation(): ALLOW_QUOTE_INVALIDATION {
    return this.allowQuoteInvalidation;
  }
  /** Returns `quoteDefaultExpiryPeriodDays`. */
  getQuoteDefaultExpiryPeriodDays(): number | undefined {
    return this.quoteDefaultExpiryPeriodDays;
  }
  /** Returns `channels` as Channel instances (coerced on first access). */
  getChannels(): Channel[] {
    if (!this.channels) return [];
    this.channels = this.channels.map((x: any) => x instanceof Channel ? x : new Channel(x));
    return this.channels;
  }
}
