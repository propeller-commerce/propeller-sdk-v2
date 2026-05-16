import { ALLOW_QUOTE_INVALIDATION } from '../enum/ALLOW_QUOTE_INVALIDATION';
import { RESTRICT_SALES_PRICING_VISIBILITY } from '../enum/RESTRICT_SALES_PRICING_VISIBILITY';
import { LocalizedString } from './LocalizedString';
import { Channel } from './Channel';
/**
 Object class for Tenant
 Represents a tenant - the top-level organizational unit in the system.
 Tenants contain channels and have their own configuration settings.
 */
export interface Tenant {
  /** Unique identifier for the tenant */
  id: string;
  /** Display name of the tenant */
  name: string;
  /** Localized descriptions of the tenant in different languages */
  descriptions?: LocalizedString[];
  /** Timestamp when the tenant was created */
  createdAt: string;
  /** Timestamp when the tenant was last modified */
  lastModifiedAt: string;
  /** Controls whether sales pricing information is restricted within this tenant */
  restrictSalesPricingVisibility: RESTRICT_SALES_PRICING_VISIBILITY;
  /** Controls whether quotes can be manually invalidated within this tenant */
  allowQuoteInvalidation: ALLOW_QUOTE_INVALIDATION;
  /** Default number of days before quotes expire within this tenant */
  quoteDefaultExpiryPeriodDays?: number;
  /** All channels belonging to this tenant */
  channels: Channel[];
}
