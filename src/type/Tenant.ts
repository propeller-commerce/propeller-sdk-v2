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

  /** [SETTING] Default application UI language for this tenant as a 2-character code (e.g. EN, NL).
Used when no user-specific language preference is available. */
  defaultAppLanguage: string;
  /** [SETTING] Default data language for this tenant as a 2-character code (e.g. EN, NL).
Applied to localized data fields when no explicit language is requested. */
  defaultDataLanguage?: string;
}
