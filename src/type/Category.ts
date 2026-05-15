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

  /** Returns `categoryId`. */
  getCategoryId(): number {
    return this.categoryId;
  }
  /** Returns `attributes` as a AttributeResultResponse instance (coerced on first access). */
  getAttributes(): AttributeResultResponse | undefined {
    if (this.attributes == null) return undefined;
    if (!(this.attributes instanceof AttributeResultResponse)) {
      this.attributes = new AttributeResultResponse(this.attributes as any);
    }
    return this.attributes;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.name;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.description;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the shortDescription for the given language, falling back to NL. */
  getShortDescription(language: string = 'NL'): string | undefined {
    const arr = this.shortDescription;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the slug for the given language, falling back to NL. */
  getSlug(language: string = 'NL'): string | undefined {
    const arr = this.slug;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `path`. */
  getPath(): string {
    return this.path;
  }
  /** Returns `categories` as Category instances (coerced on first access). */
  getCategories(): Category[] | undefined {
    if (!this.categories) return undefined;
    this.categories = this.categories.map((x: any) => x instanceof Category ? x : new Category(x));
    return this.categories;
  }
  /** Returns `parent` as a Category instance (coerced on first access). */
  getParent(): Category | undefined {
    if (this.parent == null) return undefined;
    if (!(this.parent instanceof Category)) {
      this.parent = new Category(this.parent as any);
    }
    return this.parent;
  }
  /** Returns `defaultLanguage`. */
  getDefaultLanguage(): string {
    return this.defaultLanguage;
  }
  /** Returns the metadataTitle for the given language, falling back to NL. */
  getMetadataTitle(language: string = 'NL'): string | undefined {
    const arr = this.metadataTitles;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the metadataDescription for the given language, falling back to NL. */
  getMetadataDescription(language: string = 'NL'): string | undefined {
    const arr = this.metadataDescriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the metadataKeyword for the given language, falling back to NL. */
  getMetadataKeyword(language: string = 'NL'): string | undefined {
    const arr = this.metadataKeywords;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the metadataCanonicalUrl for the given language, falling back to NL. */
  getMetadataCanonicalUrl(language: string = 'NL'): string | undefined {
    const arr = this.metadataCanonicalUrls;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `hidden`. */
  getHidden(): YesNo {
    return this.hidden;
  }
  /** Returns `categoryPath` as Category instances (coerced on first access). */
  getCategoryPath(): Category[] {
    if (!this.categoryPath) return [];
    this.categoryPath = this.categoryPath.map((x: any) => x instanceof Category ? x : new Category(x));
    return this.categoryPath;
  }
  /** Returns `sources` as Source instances (coerced on first access). */
  getSources(): Source[] {
    if (!this.sources) return [];
    this.sources = this.sources.map((x: any) => x instanceof Source ? x : new Source(x));
    return this.sources;
  }
  /** Returns `products` as a ProductsResponse instance (coerced on first access). */
  getProducts(): ProductsResponse | undefined {
    if (this.products == null) return undefined;
    if (!(this.products instanceof ProductsResponse)) {
      this.products = new ProductsResponse(this.products as any);
    }
    return this.products;
  }
}