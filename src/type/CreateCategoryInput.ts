import { YesNo } from '../enum/YesNo';
import { LocalizedStringInput } from './LocalizedStringInput';
/**
 Input object for CreateCategoryInput
 */
export interface CreateCategoryInput {
  /** Localized category name as it is available in
    the supported language defaults to the category's default language. */
  name: LocalizedStringInput[];
  /** The long description for this category,
    this field can contain html formatting,
    this field can be translated is case of multilingual catalog. */
  description: LocalizedStringInput[];
  /** The short description for this category,
    this field can contain html formatting,
    this field can be translated is case of multilingual catalog. */
  shortDescription: LocalizedStringInput[];
  /** The category's parent Category when available */
  parent?: number;
  /** The default language for the category */
  defaultLanguage: string;
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
}