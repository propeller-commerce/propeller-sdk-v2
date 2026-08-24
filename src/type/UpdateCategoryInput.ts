import { SourceInput } from './SourceInput';
import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for UpdateCategoryInput
 */
export interface UpdateCategoryInput {
  /** The category's parent Category when available */
  parent?: number;
  /** [SEO] Metadata title in different languages. */
  metadataTitles?: LocalizedStringInput[];
  /** [SEO] Metadata description in different languages. */
  metadataDescriptions?: LocalizedStringInput[];
  /** [SEO] Metadata keywords in different languages. */
  metadataKeywords?: LocalizedStringInput[];
  /** [SEO] Metadata canonical urls in different languages. */
  metadataCanonicalUrls?: LocalizedStringInput[];
  /** Category hidden status */
  hidden?: YesNo;

  /** Localized names shown to end users in catalog and navigation surfaces. The catalogue's default language must be present.

Every entry must declare a distinct language. Cannot be combined with the single-language counterpart on the same input. */
  names?: LocalizedStringInput[];
  /** Localized long-form descriptions shown on category landing surfaces.

Every entry must declare a distinct language. Each localized value is capped at 300,000 characters. Cannot be combined with the single-language counterpart on the same input. */
  descriptions?: LocalizedStringInput[];
  /** Localized short descriptions surfaced in listings and tiles.

Every entry must declare a distinct language. Each localized value is capped at 300,000 characters. Cannot be combined with the single-language counterpart on the same input. */
  shortDescriptions?: LocalizedStringInput[];
  /** URL-friendly identifiers, one per language, used in human-readable links.

Every entry must declare a distinct language. Each value must be a lowercase URL-friendly slug. Cannot be combined with the single-language counterpart on the same input. */
  slugs?: LocalizedStringInput[];
  /** Globally unique identifier of the parent category. Omitted for root categories.

Cannot be combined with the legacy `parent` field on the same input. */
  parentUuid?: string;
  /** Generates missing slugs from the localized names when set; existing slugs are preserved.

When enabled, slugs are regenerated from the localized names for any language whose slug is not explicitly supplied. */
  autoGenerateSlugs?: boolean;
  /** Pairs of external system names and the identifiers each system assigned to the record.

Replaces the existing list of external sources entirely. */
  sources?: SourceInput[];
}