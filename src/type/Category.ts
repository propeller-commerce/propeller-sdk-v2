import { YesNo } from '../enum/YesNo';
import { AttributeResultResponse } from './AttributeResultResponse';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { ProductsResponse } from './ProductsResponse';
/**
 Object class for Category
 */
export class Category {
  /** categoryId field */
  categoryId!: number;
  /** Lists attributes for this category based on the search input. */
  attributes?: AttributeResultResponse;
  /** Localized category name as it is available in
        the supported language defaults to the category's default language. */
  name!: LocalizedString[];
  /** The long description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog */
  description!: LocalizedString[];
  /** The short description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog */
  shortDescription!: LocalizedString[];
  /** The slug for this category,
            each available language contains a different slug */
  slug!: LocalizedString[];
  /** The path in id's to the root of the inheritance tree,
    can be passed as parameter to the productsearch API */
  path!: string;
  /** categories field */
  categories?: Category[];
  /** The category's parent Category when available */
  parent?: Category;
  /** defaultLanguage field */
  defaultLanguage!: string;
  /** [SEO] Localized Metadata title available in multiple languages */
  metadataTitles?: LocalizedString[];
  /** [SEO] Localized Metadata description available in multiple languages */
  metadataDescriptions?: LocalizedString[];
  /** [SEO] Localized Metadata keywords available in multiple languages */
  metadataKeywords?: LocalizedString[];
  /** [SEO] Localized Metadata canonical url available in multiple languages */
  metadataCanonicalUrls?: LocalizedString[];
  /** The hidden status of the category */
  hidden!: YesNo;
  /** categoryPath field */
  categoryPath!: Category[];
  /** sources field */
  sources!: Source[];
  /** products field */
  products!: ProductsResponse;
  constructor(data: Partial<Category> = {}) {
    Object.assign(this, data);
  }
}