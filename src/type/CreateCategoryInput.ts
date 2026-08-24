import { SourceInput } from './SourceInput';
import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for CreateCategoryInput
 */
export interface CreateCategoryInput {
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
  /** Category hidden status, defaults to N */
  hidden: YesNo;

  /** Localized names shown to end users in catalog and navigation surfaces. The catalogue's default language must be present. */
  names?: LocalizedStringInput[];
  /** Localized long-form descriptions shown on category landing surfaces. */
  descriptions?: LocalizedStringInput[];
  /** Localized short descriptions surfaced in listings and tiles. */
  shortDescriptions?: LocalizedStringInput[];
  /** URL-friendly identifiers, one per language, used in human-readable links. */
  slugs?: LocalizedStringInput[];
  /** Globally unique identifier of the parent category. Omitted for root categories. */
  parentUuid?: string;
  /** Generates missing slugs from the localized names when set; existing slugs are preserved.

When enabled, slugs are regenerated from the localized names for any language whose slug is not explicitly supplied. */
  autoGenerateSlugs?: boolean;
  /** Pairs of external system names and the identifiers each system assigned to the record. */
  sources?: SourceInput[];
}