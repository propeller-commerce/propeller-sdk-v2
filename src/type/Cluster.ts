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
  id!: number;
  /** The classID of this cluster */
  clusterId!: number;
  /** categoryId field */
  categoryId!: number;
  /** Lists attributes for this cluster based on the search input. */
  attributes?: AttributeResultResponse;
  /** All the categories the cluster belongs to */
  categories?: CategoryResponse;
  /** category field */
  category!: Category;
  /** categoryPath field */
  categoryPath!: Category[];
  /** crossupsellsFrom field */
  crossupsellsFrom!: CrossupsellsResponse;
  /** crossupsellsTo field */
  crossupsellsTo!: CrossupsellsResponse;
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  orderlists!: OrderlistsResponse;
  /** Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item */
  products!: Product[];
  /** The creation date of this product */
  createdAt!: string;
  /** The last modified date of this product */
  lastModifiedAt!: string;
  /** options field */
  options!: ClusterOption[];
  /** The drilldown configuration for this cluster  */
  /** @deprecated Use config.setting instead */
  drillDowns?: ClusterDrillDown[];
  /** defaultProduct field */
  defaultProduct?: Product;
  /** config field */
  config?: ClusterConfig;
  /** names field */
  names!: LocalizedString[];
  /** descriptions field */
  descriptions!: LocalizedString[];
  /** shortDescriptions field */
  shortDescriptions!: LocalizedString[];
  /** slugs field */
  slugs!: LocalizedString[];
  /** The SKU (stock keeping unit) of this product */
  sku!: string;
  /** The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language. */
  defaultLanguage!: string;
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
  /** Short names for this cluster per language */
  shortNames!: LocalizedString[];
  /** sources field */
  sources!: Source[];
  /** The requested language for this this resource, default to the
          products default language.
          ISO 639-1 format. */
  language?: string;
  /** The class of the request resource */
  class!: ProductClass;
  /** The hidden status of this resource. */
  hidden!: YesNo;
  constructor(data: Partial<Cluster> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `clusterId`. */
  getClusterId(): number {
    return this.clusterId;
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
  /** Returns `categories` as a CategoryResponse instance (coerced on first access). */
  getCategories(): CategoryResponse | undefined {
    if (this.categories == null) return undefined;
    if (!(this.categories instanceof CategoryResponse)) {
      this.categories = new CategoryResponse(this.categories as any);
    }
    return this.categories;
  }
  /** Returns `category` as a Category instance (coerced on first access). */
  getCategory(): Category | undefined {
    if (this.category == null) return undefined;
    if (!(this.category instanceof Category)) {
      this.category = new Category(this.category as any);
    }
    return this.category;
  }
  /** Returns `categoryPath` as Category instances (coerced on first access). */
  getCategoryPath(): Category[] {
    if (!this.categoryPath) return [];
    this.categoryPath = this.categoryPath.map((x: any) => x instanceof Category ? x : new Category(x));
    return this.categoryPath;
  }
  /** Returns `crossupsellsFrom` as a CrossupsellsResponse instance (coerced on first access). */
  getCrossupsellsFrom(): CrossupsellsResponse | undefined {
    if (this.crossupsellsFrom == null) return undefined;
    if (!(this.crossupsellsFrom instanceof CrossupsellsResponse)) {
      this.crossupsellsFrom = new CrossupsellsResponse(this.crossupsellsFrom as any);
    }
    return this.crossupsellsFrom;
  }
  /** Returns `crossupsellsTo` as a CrossupsellsResponse instance (coerced on first access). */
  getCrossupsellsTo(): CrossupsellsResponse | undefined {
    if (this.crossupsellsTo == null) return undefined;
    if (!(this.crossupsellsTo instanceof CrossupsellsResponse)) {
      this.crossupsellsTo = new CrossupsellsResponse(this.crossupsellsTo as any);
    }
    return this.crossupsellsTo;
  }
  /** Returns `favoriteLists` as a FavoriteListsResponse instance (coerced on first access). */
  getFavoriteLists(): FavoriteListsResponse | undefined {
    if (this.favoriteLists == null) return undefined;
    if (!(this.favoriteLists instanceof FavoriteListsResponse)) {
      this.favoriteLists = new FavoriteListsResponse(this.favoriteLists as any);
    }
    return this.favoriteLists;
  }
  /** Returns `orderlists` as a OrderlistsResponse instance (coerced on first access). */
  getOrderlists(): OrderlistsResponse | undefined {
    if (this.orderlists == null) return undefined;
    if (!(this.orderlists instanceof OrderlistsResponse)) {
      this.orderlists = new OrderlistsResponse(this.orderlists as any);
    }
    return this.orderlists;
  }
  /** Returns `products` as Product instances (coerced on first access). */
  getProducts(): Product[] {
    if (!this.products) return [];
    this.products = this.products.map((x: any) => x instanceof Product ? x : new Product(x));
    return this.products;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `options` as ClusterOption instances (coerced on first access). */
  getOptions(): ClusterOption[] {
    if (!this.options) return [];
    this.options = this.options.map((x: any) => x instanceof ClusterOption ? x : new ClusterOption(x));
    return this.options;
  }
  /** Returns `drillDowns` as ClusterDrillDown instances (coerced on first access). */
  getDrillDowns(): ClusterDrillDown[] | undefined {
    if (!this.drillDowns) return undefined;
    this.drillDowns = this.drillDowns.map((x: any) => x instanceof ClusterDrillDown ? x : new ClusterDrillDown(x));
    return this.drillDowns;
  }
  /** Returns `defaultProduct` as a Product instance (coerced on first access). */
  getDefaultProduct(): Product | undefined {
    if (this.defaultProduct == null) return undefined;
    if (!(this.defaultProduct instanceof Product)) {
      this.defaultProduct = new Product(this.defaultProduct as any);
    }
    return this.defaultProduct;
  }
  /** Returns `config` as a ClusterConfig instance (coerced on first access). */
  getConfig(): ClusterConfig | undefined {
    if (this.config == null) return undefined;
    if (!(this.config instanceof ClusterConfig)) {
      this.config = new ClusterConfig(this.config as any);
    }
    return this.config;
  }
  /** Returns the name for the given language, falling back to NL. */
  getName(language: string = 'NL'): string | undefined {
    const arr = this.names;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the shortDescription for the given language, falling back to NL. */
  getShortDescription(language: string = 'NL'): string | undefined {
    const arr = this.shortDescriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the slug for the given language, falling back to NL. */
  getSlug(language: string = 'NL'): string | undefined {
    const arr = this.slugs;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `sku`. */
  getSku(): string {
    return this.sku;
  }
  /** Returns `defaultLanguage`. */
  getDefaultLanguage(): string {
    return this.defaultLanguage;
  }
  /** Returns `priority`. */
  getPriority(): number | undefined {
    return this.priority;
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
  /** Returns the shortName for the given language, falling back to NL. */
  getShortName(language: string = 'NL'): string | undefined {
    const arr = this.shortNames;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `sources` as Source instances (coerced on first access). */
  getSources(): Source[] {
    if (!this.sources) return [];
    this.sources = this.sources.map((x: any) => x instanceof Source ? x : new Source(x));
    return this.sources;
  }
  /** Returns `language`. */
  getLanguage(): string | undefined {
    return this.language;
  }
  /** Returns `class`. */
  getClass(): ProductClass {
    return this.class;
  }
  /** Returns `hidden`. */
  getHidden(): YesNo {
    return this.hidden;
  }
}