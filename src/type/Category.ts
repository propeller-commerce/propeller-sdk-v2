import { BaseProductsResponse } from './BaseProductsResponse';
import { YesNo } from '../enum/YesNo';
import { AttributeResultResponse } from './AttributeResultResponse';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { ProductsResponse } from './ProductsResponse';
/**
 Object class for Category
 */
export interface Category {
  /** categoryId field */
  categoryId: number;
  /** Lists attributes for this category based on the search input. */
  attributes?: AttributeResultResponse;
  /** categories field */
  categories?: Category[];
  /** The category's parent Category when available */
  parent?: Category;
  /** defaultLanguage field */
  defaultLanguage: string;
  /** [SEO] Localized Metadata title available in multiple languages */
  metadataTitles?: LocalizedString[];
  /** [SEO] Localized Metadata description available in multiple languages */
  metadataDescriptions?: LocalizedString[];
  /** [SEO] Localized Metadata keywords available in multiple languages */
  metadataKeywords?: LocalizedString[];
  /** [SEO] Localized Metadata canonical url available in multiple languages */
  metadataCanonicalUrls?: LocalizedString[];
  /** The hidden status of the category */
  hidden: YesNo;
  /** categoryPath field */
  categoryPath: Category[];
  /** sources field */
  sources: Source[];
  /** products field */
  products: ProductsResponse;

  /** Globally unique identifier for the category. */
  uuid: string;
  /** The ID of the root category this category belongs to */
  rootCategoryId: number;
  /** Globally unique identifier of the parent category. Omitted for root categories. */
  parentUuid?: string;
  /** Sort order within the parent category */
  sortOrder?: number;
  /** Localized names shown to end users in catalog and navigation surfaces. The catalogue's default language must be present. */
  names: LocalizedString[];
  /** Localized long-form descriptions shown on category landing surfaces. */
  descriptions: LocalizedString[];
  /** Localized short descriptions surfaced in listings and tiles. */
  shortDescriptions: LocalizedString[];
  /** URL-friendly identifiers, one per language, used in human-readable links. */
  slugs: LocalizedString[];
  /** Timestamp marking when the record was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Timestamp marking the last modification of the record, in UTC ISO 8601 format. */
  lastModifiedAt: string;
  /** Products and clusters attached to the category, returned through a single page of results. */
  baseProducts: BaseProductsResponse;
}