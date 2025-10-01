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
  private _categoryId: number;
  /** Lists attributes for this category based on the search input. */
  private _attributes?: AttributeResultResponse;
  /** Localized category name as it is available in
        the supported language defaults to the category's default language. */
  private _name: LocalizedString[];
  /** The long description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog */
  private _description: LocalizedString[];
  /** The short description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog */
  private _shortDescription: LocalizedString[];
  /** The slug for this category,
            each available language contains a different slug */
  private _slug: LocalizedString[];
  /** The path in id's to the root of the inheritance tree,
    can be passed as parameter to the productsearch API */
  private _path: string;
  /** categories field */
  private _categories?: Category[];
  /** The category's parent Category when available */
  private _parent?: Category;
  /** defaultLanguage field */
  private _defaultLanguage: string;
  /** [SEO] Localized Metadata title available in multiple languages */
  private _metadataTitles?: LocalizedString[];
  /** [SEO] Localized Metadata description available in multiple languages */
  private _metadataDescriptions?: LocalizedString[];
  /** [SEO] Localized Metadata keywords available in multiple languages */
  private _metadataKeywords?: LocalizedString[];
  /** [SEO] Localized Metadata canonical url available in multiple languages */
  private _metadataCanonicalUrls?: LocalizedString[];
  /** The hidden status of the category */
  private _hidden: YesNo;
  /** categoryPath field */
  private _categoryPath: Category[];
  /** sources field */
  private _sources: Source[];
  /** products field */
  private _products: ProductsResponse;
  /**
   Creates a new instance of Category
   */
  constructor(data: Partial<Category> = {}) {
    this._categoryId = data.categoryId!;
    this._attributes = data.attributes;
    this._name = data.name!;
    this._description = data.description!;
    this._shortDescription = data.shortDescription!;
    this._slug = data.slug!;
    this._path = data.path!;
    this._categories = data.categories;
    this._parent = data.parent;
    this._defaultLanguage = data.defaultLanguage!;
    this._metadataTitles = data.metadataTitles;
    this._metadataDescriptions = data.metadataDescriptions;
    this._metadataKeywords = data.metadataKeywords;
    this._metadataCanonicalUrls = data.metadataCanonicalUrls;
    this._hidden = data.hidden!;
    this._categoryPath = data.categoryPath!;
    this._sources = data.sources!;
    this._products = data.products!;
  }
  /**
   categoryId field
   */
  get categoryId(): number {
    return this._categoryId;
  }
  /**
   categoryId field
   */
  set categoryId(value: number) {
    this._categoryId = value;
  }
  /**
   Lists attributes for this category based on the search input.
   */
  get attributes(): AttributeResultResponse | undefined {
    return this._attributes;
  }
  /**
   Lists attributes for this category based on the search input.
   */
  set attributes(value: AttributeResultResponse | undefined) {
    this._attributes = value;
  }
  /**
   Localized category name as it is available in
        the supported language defaults to the category's default language.
   */
  get name(): LocalizedString[] {
    return this._name;
  }
  /**
   Localized category name as it is available in
        the supported language defaults to the category's default language.
   */
  set name(value: LocalizedString[]) {
    this._name = value;
  }
  /**
   The long description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog
   */
  get description(): LocalizedString[] {
    return this._description;
  }
  /**
   The long description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog
   */
  set description(value: LocalizedString[]) {
    this._description = value;
  }
  /**
   The short description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog
   */
  get shortDescription(): LocalizedString[] {
    return this._shortDescription;
  }
  /**
   The short description for this category,
            this field can contain html formatting,
            this field can be translated is case of multilingual catalog
   */
  set shortDescription(value: LocalizedString[]) {
    this._shortDescription = value;
  }
  /**
   The slug for this category,
            each available language contains a different slug
   */
  get slug(): LocalizedString[] {
    return this._slug;
  }
  /**
   The slug for this category,
            each available language contains a different slug
   */
  set slug(value: LocalizedString[]) {
    this._slug = value;
  }
  /**
   The path in id's to the root of the inheritance tree,
    can be passed as parameter to the productsearch API
   */
  get path(): string {
    return this._path;
  }
  /**
   The path in id's to the root of the inheritance tree,
    can be passed as parameter to the productsearch API
   */
  set path(value: string) {
    this._path = value;
  }
  /**
   categories field
   */
  get categories(): Category[] | undefined {
    return this._categories;
  }
  /**
   categories field
   */
  set categories(value: Category[] | undefined) {
    this._categories = value;
  }
  /**
   The category's parent Category when available
   */
  get parent(): Category | undefined {
    return this._parent;
  }
  /**
   The category's parent Category when available
   */
  set parent(value: Category | undefined) {
    this._parent = value;
  }
  /**
   defaultLanguage field
   */
  get defaultLanguage(): string {
    return this._defaultLanguage;
  }
  /**
   defaultLanguage field
   */
  set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  /**
   [SEO] Localized Metadata title available in multiple languages
   */
  get metadataTitles(): LocalizedString[] | undefined {
    return this._metadataTitles;
  }
  /**
   [SEO] Localized Metadata title available in multiple languages
   */
  set metadataTitles(value: LocalizedString[] | undefined) {
    this._metadataTitles = value;
  }
  /**
   [SEO] Localized Metadata description available in multiple languages
   */
  get metadataDescriptions(): LocalizedString[] | undefined {
    return this._metadataDescriptions;
  }
  /**
   [SEO] Localized Metadata description available in multiple languages
   */
  set metadataDescriptions(value: LocalizedString[] | undefined) {
    this._metadataDescriptions = value;
  }
  /**
   [SEO] Localized Metadata keywords available in multiple languages
   */
  get metadataKeywords(): LocalizedString[] | undefined {
    return this._metadataKeywords;
  }
  /**
   [SEO] Localized Metadata keywords available in multiple languages
   */
  set metadataKeywords(value: LocalizedString[] | undefined) {
    this._metadataKeywords = value;
  }
  /**
   [SEO] Localized Metadata canonical url available in multiple languages
   */
  get metadataCanonicalUrls(): LocalizedString[] | undefined {
    return this._metadataCanonicalUrls;
  }
  /**
   [SEO] Localized Metadata canonical url available in multiple languages
   */
  set metadataCanonicalUrls(value: LocalizedString[] | undefined) {
    this._metadataCanonicalUrls = value;
  }
  /**
   The hidden status of the category
   */
  get hidden(): YesNo {
    return this._hidden;
  }
  /**
   The hidden status of the category
   */
  set hidden(value: YesNo) {
    this._hidden = value;
  }
  /**
   categoryPath field
   */
  get categoryPath(): Category[] {
    return this._categoryPath;
  }
  /**
   categoryPath field
   */
  set categoryPath(value: Category[]) {
    this._categoryPath = value;
  }
  /**
   sources field
   */
  get sources(): Source[] {
    return this._sources;
  }
  /**
   sources field
   */
  set sources(value: Source[]) {
    this._sources = value;
  }
  /**
   products field
   */
  get products(): ProductsResponse {
    return this._products;
  }
  /**
   products field
   */
  set products(value: ProductsResponse) {
    this._products = value;
  }
}