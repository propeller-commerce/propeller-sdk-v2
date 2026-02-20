import { IBaseProduct } from './IBaseProduct';
import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
import { AttributeResultResponse } from './AttributeResultResponse';
import { CategoryResponse } from './CategoryResponse';
import { Category } from './Category';
import { CrossupsellsResponse } from './CrossupsellsResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Product } from './Product';
import { ClusterOption } from './ClusterOption';
import { ClusterDrillDown } from './ClusterDrillDown';
import { ClusterConfig } from './ClusterConfig';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
/**
 Object class for Cluster
 */
export class Cluster implements IBaseProduct {
  /** Resource primary identifier */
  private _id: number;
  /** The classID of this cluster */
  private _clusterId: number;
  /** categoryId field */
  private _categoryId: number;
  /** Lists attributes for this cluster based on the search input. */
  private _attributes?: AttributeResultResponse;
  /** All the categories the cluster belongs to */
  private _categories?: CategoryResponse;
  /** category field */
  private _category: Category;
  /** categoryPath field */
  private _categoryPath: Category[];
  /** crossupsellsFrom field */
  private _crossupsellsFrom: CrossupsellsResponse;
  /** crossupsellsTo field */
  private _crossupsellsTo: CrossupsellsResponse;
  /** favoriteLists field */
  private _favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  private _orderlists: OrderlistsResponse;
  /** Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item */
  private _products: Product[];
  /** The creation date of this product */
  private _createdAt: string;
  /** The last modified date of this product */
  private _lastModifiedAt: string;
  /** options field */
  private _options: ClusterOption[];
  /** The drilldown configuration for this cluster  */
  /** @deprecated Use config.setting instead */
  private _drillDowns?: ClusterDrillDown[];
  /** defaultProduct field */
  private _defaultProduct?: Product;
  /** config field */
  private _config?: ClusterConfig;
  /** names field */
  private _names: LocalizedString[];
  /** descriptions field */
  private _descriptions: LocalizedString[];
  /** shortDescriptions field */
  private _shortDescriptions: LocalizedString[];
  /** slugs field */
  private _slugs: LocalizedString[];
  /** The SKU (stock keeping unit) of this product */
  private _sku: string;
  /** The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language. */
  private _defaultLanguage: string;
  /** priority field */
  private _priority?: number;
  /** [SEO] Localized Metadata title available in multiple languages */
  private _metadataTitles?: LocalizedString[];
  /** [SEO] Localized Metadata description available in multiple languages */
  private _metadataDescriptions?: LocalizedString[];
  /** [SEO] Localized Metadata keywords available in multiple languages */
  private _metadataKeywords?: LocalizedString[];
  /** [SEO] Localized Metadata canonical url available in multiple languages */
  private _metadataCanonicalUrls?: LocalizedString[];
  /** Short names for this cluster per language */
  private _shortNames: LocalizedString[];
  /** sources field */
  private _sources: Source[];
  /** The requested language for this this resource, default to the
          products default language.
          ISO 639-1 format. */
  private _language?: string;
  /** The class of the request resource */
  private _class: ProductClass;
  /** The hidden status of this resource. */
  private _hidden: YesNo;
  /**
   Creates a new instance of Cluster
   */
  constructor(data: Partial<Cluster> = {}) {
    this._id = data.id!;
    this._clusterId = data.clusterId!;
    this._categoryId = data.categoryId!;
    this._attributes = data.attributes;
    this._categories = data.categories;
    this._category = data.category!;
    this._categoryPath = data.categoryPath!;
    this._crossupsellsFrom = data.crossupsellsFrom!;
    this._crossupsellsTo = data.crossupsellsTo!;
    this._favoriteLists = data.favoriteLists;
    this._orderlists = data.orderlists!;
    this._products = data.products!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._options = data.options!;
    this._drillDowns = data.drillDowns;
    this._defaultProduct = data.defaultProduct;
    this._config = data.config;
    this._names = data.names!;
    this._descriptions = data.descriptions!;
    this._shortDescriptions = data.shortDescriptions!;
    this._slugs = data.slugs!;
    this._sku = data.sku!;
    this._defaultLanguage = data.defaultLanguage!;
    this._priority = data.priority;
    this._metadataTitles = data.metadataTitles;
    this._metadataDescriptions = data.metadataDescriptions;
    this._metadataKeywords = data.metadataKeywords;
    this._metadataCanonicalUrls = data.metadataCanonicalUrls;
    this._shortNames = data.shortNames!;
    this._sources = data.sources!;
    this._language = data.language;
    this._class = data.class!;
    this._hidden = data.hidden!;
  }
  /**
   Resource primary identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Resource primary identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   The classID of this cluster
   */
  get clusterId(): number {
    return this._clusterId;
  }
  /**
   The classID of this cluster
   */
  set clusterId(value: number) {
    this._clusterId = value;
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
   Lists attributes for this cluster based on the search input.
   */
  get attributes(): AttributeResultResponse | undefined {
    return this._attributes;
  }
  /**
   Lists attributes for this cluster based on the search input.
   */
  set attributes(value: AttributeResultResponse | undefined) {
    this._attributes = value;
  }
  /**
   All the categories the cluster belongs to
   */
  get categories(): CategoryResponse | undefined {
    return this._categories;
  }
  /**
   All the categories the cluster belongs to
   */
  set categories(value: CategoryResponse | undefined) {
    this._categories = value;
  }
  /**
   category field
   */
  get category(): Category {
    return this._category;
  }
  /**
   category field
   */
  set category(value: Category) {
    this._category = value;
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
   crossupsellsFrom field
   */
  get crossupsellsFrom(): CrossupsellsResponse {
    return this._crossupsellsFrom;
  }
  /**
   crossupsellsFrom field
   */
  set crossupsellsFrom(value: CrossupsellsResponse) {
    this._crossupsellsFrom = value;
  }
  /**
   crossupsellsTo field
   */
  get crossupsellsTo(): CrossupsellsResponse {
    return this._crossupsellsTo;
  }
  /**
   crossupsellsTo field
   */
  set crossupsellsTo(value: CrossupsellsResponse) {
    this._crossupsellsTo = value;
  }
  /**
   favoriteLists field
   */
  get favoriteLists(): FavoriteListsResponse | undefined {
    return this._favoriteLists;
  }
  /**
   favoriteLists field
   */
  set favoriteLists(value: FavoriteListsResponse | undefined) {
    this._favoriteLists = value;
  }
  /**
   orderlists field
   */
  get orderlists(): OrderlistsResponse {
    return this._orderlists;
  }
  /**
   orderlists field
   */
  set orderlists(value: OrderlistsResponse) {
    this._orderlists = value;
  }
  /**
   Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item
   */
  get products(): Product[] {
    return this._products;
  }
  /**
   Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item
   */
  set products(value: Product[]) {
    this._products = value;
  }
  /**
   The creation date of this product
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   The creation date of this product
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   The last modified date of this product
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   The last modified date of this product
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   options field
   */
  get options(): ClusterOption[] {
    return this._options;
  }
  /**
   options field
   */
  set options(value: ClusterOption[]) {
    this._options = value;
  }
  /**
   The drilldown configuration for this cluster
   */
  get drillDowns(): ClusterDrillDown[] | undefined {
    return this._drillDowns;
  }
  /**
   The drilldown configuration for this cluster
   */
  set drillDowns(value: ClusterDrillDown[] | undefined) {
    this._drillDowns = value;
  }
  /**
   defaultProduct field
   */
  get defaultProduct(): Product | undefined {
    return this._defaultProduct;
  }
  /**
   defaultProduct field
   */
  set defaultProduct(value: Product | undefined) {
    this._defaultProduct = value;
  }
  /**
   config field
   */
  get config(): ClusterConfig | undefined {
    return this._config;
  }
  /**
   config field
   */
  set config(value: ClusterConfig | undefined) {
    this._config = value;
  }
  /**
   names field
   */
  get names(): LocalizedString[] {
    return this._names;
  }
  /**
   names field
   */
  set names(value: LocalizedString[]) {
    this._names = value;
  }
  /**
   descriptions field
   */
  get descriptions(): LocalizedString[] {
    return this._descriptions;
  }
  /**
   descriptions field
   */
  set descriptions(value: LocalizedString[]) {
    this._descriptions = value;
  }
  /**
   shortDescriptions field
   */
  get shortDescriptions(): LocalizedString[] {
    return this._shortDescriptions;
  }
  /**
   shortDescriptions field
   */
  set shortDescriptions(value: LocalizedString[]) {
    this._shortDescriptions = value;
  }
  /**
   slugs field
   */
  get slugs(): LocalizedString[] {
    return this._slugs;
  }
  /**
   slugs field
   */
  set slugs(value: LocalizedString[]) {
    this._slugs = value;
  }
  /**
   The SKU (stock keeping unit) of this product
   */
  get sku(): string {
    return this._sku;
  }
  /**
   The SKU (stock keeping unit) of this product
   */
  set sku(value: string) {
    this._sku = value;
  }
  /**
   The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language.
   */
  get defaultLanguage(): string {
    return this._defaultLanguage;
  }
  /**
   The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language.
   */
  set defaultLanguage(value: string) {
    this._defaultLanguage = value;
  }
  /**
   priority field
   */
  get priority(): number | undefined {
    return this._priority;
  }
  /**
   priority field
   */
  set priority(value: number | undefined) {
    this._priority = value;
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
   Short names for this cluster per language
   */
  get shortNames(): LocalizedString[] {
    return this._shortNames;
  }
  /**
   Short names for this cluster per language
   */
  set shortNames(value: LocalizedString[]) {
    this._shortNames = value;
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
   The requested language for this this resource, default to the
          products default language.
          ISO 639-1 format.
   */
  get language(): string | undefined {
    return this._language;
  }
  /**
   The requested language for this this resource, default to the
          products default language.
          ISO 639-1 format.
   */
  set language(value: string | undefined) {
    this._language = value;
  }
  /**
   The class of the request resource
   */
  get class(): ProductClass {
    return this._class;
  }
  /**
   The class of the request resource
   */
  set class(value: ProductClass) {
    this._class = value;
  }
  /**
   The hidden status of this resource.
   */
  get hidden(): YesNo {
    return this._hidden;
  }
  /**
   The hidden status of this resource.
   */
  set hidden(value: YesNo) {
    this._hidden = value;
  }
}