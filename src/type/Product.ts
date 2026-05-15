import { IBaseProduct } from './IBaseProduct';
import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
import { ProductStatus } from '../enum/ProductStatus';
import { ProductContainerClass } from '../enum/ProductContainerClass';
import { AttributeResultResponse } from './AttributeResultResponse';
import { Bundle } from './Bundle';
import { Category } from './Category';
import { CategoryResponse } from './CategoryResponse';
import { CrossupsellsResponse } from './CrossupsellsResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { ProductInventory } from './ProductInventory';
import { ProductMedia } from './ProductMedia';
import { OrderlistsResponse } from './OrderlistsResponse';
import { ProductPrice } from './ProductPrice';
import { Price } from './Price';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { ProductOffer } from './ProductOffer';
import { Cluster } from './Cluster';
import { Surcharge } from './Surcharge';
/**
 Object class for Product
 */
export class Product implements IBaseProduct {
  /** Resource primary identifier */
  id!: number;
  /** This product's unique identifier */
  productId!: number;
  /** categoryId field */
  categoryId!: number;
  /** Lists attributes for this product based on the search input. */
  attributes?: AttributeResultResponse;
  /** bundles field */
  bundles?: Bundle[];
  /** Product main category */
  category?: Category;
  /** All the categories the product belongs to */
  categories?: CategoryResponse;
  /** categoryPath field */
  categoryPath!: Category[];
  /** crossupsellsFrom field */
  crossupsellsFrom!: CrossupsellsResponse;
  /** crossupsellsTo field */
  crossupsellsTo!: CrossupsellsResponse;
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** Product inventory */
  inventory?: ProductInventory;
  /** Product media images */
  media?: ProductMedia;
  /** orderlists field */
  orderlists!: OrderlistsResponse;
  /** price field */
  price?: ProductPrice;
  /** priceData field */
  priceData?: Price;
  /** bulkPrices field */
  bulkPrices?: ProductPrice[];
  /** The requested language for this this resource, default to the
          products default language.
          ISO 639-1 format. */
  language?: string;
  /** The class of the request resource */
  class!: ProductClass;
  /** The hidden status of this resource. */
  hidden!: YesNo;
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
  /** sources field */
  sources!: Source[];
  /** Short names for this product per language */
  shortNames!: LocalizedString[];
  /** Additional keywords of this product per language. Added by the supplier */
  keywords?: LocalizedString[];
  /** Additional keywords of this product per language. Added via the PIM */
  customKeywords?: LocalizedString[];
  /** The package description of this product per language */
  packageDescriptions?: LocalizedString[];
  /** The Original Equipment Manufacturer code (OEM) of this product */
  manufacturerCode!: string;
  /** The European Article Number (EAN) code of this product */
  eanCode!: string;
  /** The manufacturer of this product */
  manufacturer!: string;
  /** The supplier of this product */
  supplier!: string;
  /** The supplier code of this product */
  supplierCode!: string;
  /** The status of this product */
  status!: ProductStatus;
  /** The extra status of this product, commonly linked to a custom valueset */
  statusExtra?: string;
  /** The bar code of this product */
  barCode?: string;
  /** The turnover group that classifies the product within the financial structure */
  turnoverGroup?: string;
  /** The taxonomy the product belongs to */
  taxonomy?: string;
  /** The price group the product belongs to, this field can be used for price calculations */
  priceGroup?: string;
  /** Is this product orderable */
  orderable!: YesNo;
  /** Is this product returnable */
  returnable!: YesNo;
  /** Is it a physical product or a service, download or warranty */
  physical!: YesNo;
  /** Is this product part of any product bundles. */
  hasBundle!: YesNo;
  /** Is this product leader of any product bundle. */
  isBundleLeader!: YesNo;
  /** The package type of this product. i.e.: PIECE, BOX, BLISTER */
  package!: string;
  /** Description of what an item within a package looks like, i.e.: PIECE or BOX */
  packageUnit!: string;
  /** Number of items within the package */
  packageUnitQuantity!: string;
  /** The minimum quantity of products that can be ordered */
  minimumQuantity!: number;
  /** The unit in which the product can be ordered */
  unit!: number;
  /** The unit in which the product can be ordered when creating a purchase order */
  purchaseUnit!: number;
  /** The minimum quantity of products that can be ordered when creating a purchase order */
  purchaseMinimumQuantity!: number;
  /** The quantity that provides the best value for money for this product */
  economicOrderQuantity!: number;
  /** The orderable from date of this product */
  orderableFrom?: string;
  /** The orderable to date of this product */
  orderableTo?: string;
  /** The release date of this product */
  releaseDate?: string;
  /** The creation date of this product */
  createdAt!: string;
  /** The last modified date of this product */
  lastModifiedAt!: string;
  /** Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price */
  offers?: ProductOffer[];
  /** The container class of this product. */
  containerClass!: ProductContainerClass;
  /** The cluster ID of the product's container */
  clusterId?: number;
  /** cluster field */
  cluster?: Cluster;
  /** surcharges field */
  surcharges!: Surcharge[];
  constructor(data: Partial<Product> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
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
  /** Returns `bundles` as Bundle instances (coerced on first access). */
  getBundles(): Bundle[] | undefined {
    if (!this.bundles) return undefined;
    this.bundles = this.bundles.map((x: any) => x instanceof Bundle ? x : new Bundle(x));
    return this.bundles;
  }
  /** Returns `category` as a Category instance (coerced on first access). */
  getCategory(): Category | undefined {
    if (this.category == null) return undefined;
    if (!(this.category instanceof Category)) {
      this.category = new Category(this.category as any);
    }
    return this.category;
  }
  /** Returns `categories` as a CategoryResponse instance (coerced on first access). */
  getCategories(): CategoryResponse | undefined {
    if (this.categories == null) return undefined;
    if (!(this.categories instanceof CategoryResponse)) {
      this.categories = new CategoryResponse(this.categories as any);
    }
    return this.categories;
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
  /** Returns `inventory` as a ProductInventory instance (coerced on first access). */
  getInventory(): ProductInventory | undefined {
    if (this.inventory == null) return undefined;
    if (!(this.inventory instanceof ProductInventory)) {
      this.inventory = new ProductInventory(this.inventory as any);
    }
    return this.inventory;
  }
  /** Returns `media` as a ProductMedia instance (coerced on first access). */
  getMedia(): ProductMedia | undefined {
    if (this.media == null) return undefined;
    if (!(this.media instanceof ProductMedia)) {
      this.media = new ProductMedia(this.media as any);
    }
    return this.media;
  }
  /** Returns `orderlists` as a OrderlistsResponse instance (coerced on first access). */
  getOrderlists(): OrderlistsResponse | undefined {
    if (this.orderlists == null) return undefined;
    if (!(this.orderlists instanceof OrderlistsResponse)) {
      this.orderlists = new OrderlistsResponse(this.orderlists as any);
    }
    return this.orderlists;
  }
  /** Returns `price` as a ProductPrice instance (coerced on first access). */
  getPrice(): ProductPrice | undefined {
    if (this.price == null) return undefined;
    if (!(this.price instanceof ProductPrice)) {
      this.price = new ProductPrice(this.price as any);
    }
    return this.price;
  }
  /** Returns `priceData` as a Price instance (coerced on first access). */
  getPriceData(): Price | undefined {
    if (this.priceData == null) return undefined;
    if (!(this.priceData instanceof Price)) {
      this.priceData = new Price(this.priceData as any);
    }
    return this.priceData;
  }
  /** Returns `bulkPrices` as ProductPrice instances (coerced on first access). */
  getBulkPrices(): ProductPrice[] | undefined {
    if (!this.bulkPrices) return undefined;
    this.bulkPrices = this.bulkPrices.map((x: any) => x instanceof ProductPrice ? x : new ProductPrice(x));
    return this.bulkPrices;
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
  /** Returns `sources` as Source instances (coerced on first access). */
  getSources(): Source[] {
    if (!this.sources) return [];
    this.sources = this.sources.map((x: any) => x instanceof Source ? x : new Source(x));
    return this.sources;
  }
  /** Returns the keyword for the given language, falling back to NL. */
  getKeyword(language: string = 'NL'): string | undefined {
    const arr = this.keywords;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the customKeyword for the given language, falling back to NL. */
  getCustomKeyword(language: string = 'NL'): string | undefined {
    const arr = this.customKeywords;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the packageDescription for the given language, falling back to NL. */
  getPackageDescription(language: string = 'NL'): string | undefined {
    const arr = this.packageDescriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `manufacturerCode`. */
  getManufacturerCode(): string {
    return this.manufacturerCode;
  }
  /** Returns `eanCode`. */
  getEanCode(): string {
    return this.eanCode;
  }
  /** Returns `manufacturer`. */
  getManufacturer(): string {
    return this.manufacturer;
  }
  /** Returns `supplier`. */
  getSupplier(): string {
    return this.supplier;
  }
  /** Returns `supplierCode`. */
  getSupplierCode(): string {
    return this.supplierCode;
  }
  /** Returns `status`. */
  getStatus(): ProductStatus {
    return this.status;
  }
  /** Returns `statusExtra`. */
  getStatusExtra(): string | undefined {
    return this.statusExtra;
  }
  /** Returns `barCode`. */
  getBarCode(): string | undefined {
    return this.barCode;
  }
  /** Returns `turnoverGroup`. */
  getTurnoverGroup(): string | undefined {
    return this.turnoverGroup;
  }
  /** Returns `taxonomy`. */
  getTaxonomy(): string | undefined {
    return this.taxonomy;
  }
  /** Returns `priceGroup`. */
  getPriceGroup(): string | undefined {
    return this.priceGroup;
  }
  /** Returns `orderable`. */
  getOrderable(): YesNo {
    return this.orderable;
  }
  /** Returns `returnable`. */
  getReturnable(): YesNo {
    return this.returnable;
  }
  /** Returns `physical`. */
  getPhysical(): YesNo {
    return this.physical;
  }
  /** Returns `hasBundle`. */
  getHasBundle(): YesNo {
    return this.hasBundle;
  }
  /** Returns `isBundleLeader`. */
  getIsBundleLeader(): YesNo {
    return this.isBundleLeader;
  }
  /** Returns `package`. */
  getPackage(): string {
    return this.package;
  }
  /** Returns `packageUnit`. */
  getPackageUnit(): string {
    return this.packageUnit;
  }
  /** Returns `packageUnitQuantity`. */
  getPackageUnitQuantity(): string {
    return this.packageUnitQuantity;
  }
  /** Returns `minimumQuantity`. */
  getMinimumQuantity(): number {
    return this.minimumQuantity;
  }
  /** Returns `unit`. */
  getUnit(): number {
    return this.unit;
  }
  /** Returns `purchaseUnit`. */
  getPurchaseUnit(): number {
    return this.purchaseUnit;
  }
  /** Returns `purchaseMinimumQuantity`. */
  getPurchaseMinimumQuantity(): number {
    return this.purchaseMinimumQuantity;
  }
  /** Returns `economicOrderQuantity`. */
  getEconomicOrderQuantity(): number {
    return this.economicOrderQuantity;
  }
  /** Returns `orderableFrom`. */
  getOrderableFrom(): string | undefined {
    return this.orderableFrom;
  }
  /** Returns `orderableTo`. */
  getOrderableTo(): string | undefined {
    return this.orderableTo;
  }
  /** Returns `releaseDate`. */
  getReleaseDate(): string | undefined {
    return this.releaseDate;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `offers` as ProductOffer instances (coerced on first access). */
  getOffers(): ProductOffer[] | undefined {
    if (!this.offers) return undefined;
    this.offers = this.offers.map((x: any) => x instanceof ProductOffer ? x : new ProductOffer(x));
    return this.offers;
  }
  /** Returns `containerClass`. */
  getContainerClass(): ProductContainerClass {
    return this.containerClass;
  }
  /** Returns `clusterId`. */
  getClusterId(): number | undefined {
    return this.clusterId;
  }
  /** Returns `cluster` as a Cluster instance (coerced on first access). */
  getCluster(): Cluster | undefined {
    if (this.cluster == null) return undefined;
    if (!(this.cluster instanceof Cluster)) {
      this.cluster = new Cluster(this.cluster as any);
    }
    return this.cluster;
  }
  /** Returns `surcharges` as Surcharge instances (coerced on first access). */
  getSurcharges(): Surcharge[] {
    if (!this.surcharges) return [];
    this.surcharges = this.surcharges.map((x: any) => x instanceof Surcharge ? x : new Surcharge(x));
    return this.surcharges;
  }
}