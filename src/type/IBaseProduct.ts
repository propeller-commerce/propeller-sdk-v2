import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
/**
 Interface for the BaseProduct Type, where both Products and clusters derive from
 */
export interface IBaseProduct {
  /** Resource primary identifier */
  id: number;
  /** The requested language for this resource, default to the products default language. ISO 639-1 format. */
  language?: string;
  /** The class of the request resource */
  class: ProductClass;
  /** The hidden status of this resource. */
  hidden: YesNo;
  /** The names of this product per language */
  names: LocalizedString[];
  /** The descriptions of this product per language */
  descriptions: LocalizedString[];
  /** The short descriptions of this product per language */
  shortDescriptions: LocalizedString[];
  /** The slugs for this product per language */
  slugs: LocalizedString[];
  /** The SKU (stock keeping unit) of this product */
  sku: string;
  /** categoryId field */
  categoryId: number;
  /** The default language for this product or cluster */
  defaultLanguage: string;
  /** priority field */
  priority?: number;
  /** [SEO] Localized Metadata title available in multiple languages */
  metadataTitles?: LocalizedString[];
  /** [SEO] Localized Metadata description available in multiple languages */
  metadataDescriptions?: LocalizedString[];
  /** [SEO] Localized Metadata keywords available in multiple languages */
  metadataKeywords?: LocalizedString[];
  /** [SEO] Localized Metadata canonical url available in multiple languages */
  metadataCanonicalUrls?: LocalizedString[];
  /** sources field */
  sources: Source[];
}