import { ALLOW_QUOTE_INVALIDATION } from '../enum/ALLOW_QUOTE_INVALIDATION';
import { RESTRICT_SALES_PRICING_VISIBILITY } from '../enum/RESTRICT_SALES_PRICING_VISIBILITY';
import { LocalizedStringInput } from './LocalizedStringInput';
import { ChannelCreateInput } from './ChannelCreateInput';
/**
 Input object for TenantCreateInput
 Input for creating a new tenant with its default channel.
 */
export interface TenantCreateInput {
  /** Unique identifier for the tenant */
  id: string;
  /** Display name for the tenant */
  name: string;
  /** Localized descriptions for the tenant in different languages */
  descriptions?: LocalizedStringInput[];
  /** Configuration for the tenant's default channel */
  channel: ChannelCreateInput;
  /** Controls whether sales pricing information is restricted within this tenant */
  restrictSalesPricingVisibility?: RESTRICT_SALES_PRICING_VISIBILITY;
  /** Controls whether quotes can be invalidated within this tenant */
  allowQuoteInvalidation?: ALLOW_QUOTE_INVALIDATION;
  /** Default number of days before quotes expire within this tenant */
  quoteDefaultExpiryPeriodDays?: number;

  /** [SETTING] Default application UI language for this tenant as a 2-character code (e.g. EN, NL).
Used when no user-specific language preference is available. */
  defaultAppLanguage: string;
  /** [SETTING] Default data language for this tenant as a 2-character code (e.g. EN, NL).
Applied to localized data fields when no explicit language is requested. */
  defaultDataLanguage?: string;
}
