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
import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
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
  private _id: number;
  /** This product's unique identifier */
  private _productId: number;
  /** categoryId field */
  private _categoryId: number;
  /** Lists attributes for this product based on the search input. */
  private _attributes?: AttributeResultResponse;
  /** bundles field */
  private _bundles?: Bundle[];
  /** Product main category */
  private _category?: Category;
  /** All the categories the product belongs to */
  private _categories?: CategoryResponse;
  /** categoryPath field */
  private _categoryPath: Category[];
  /** crossupsellsFrom field */
  private _crossupsellsFrom: CrossupsellsResponse;
  /** crossupsellsTo field */
  private _crossupsellsTo: CrossupsellsResponse;
  /** favoriteLists field */
  private _favoriteLists?: FavoriteListsResponse;
  /** Product inventory */
  private _inventory?: ProductInventory;
  /** Product media images */
  /** @deprecated Deprecated in favor of `media.images` */
  private _mediaImages?: PaginatedMediaImageResponse;
  /** Product media videos */
  /** @deprecated Deprecated in favor of `media.videos` */
  private _mediaVideos?: PaginatedMediaVideoResponse;
  /** Product media documents */
  /** @deprecated Deprecated in favor of `media.documents` */
  private _mediaDocuments?: PaginatedMediaDocumentResponse;
  /** Product media images */
  private _media?: ProductMedia;
  /** orderlists field */
  private _orderlists: OrderlistsResponse;
  /** price field */
  private _price?: ProductPrice;
  /** priceData field */
  private _priceData?: Price;
  /** bulkPrices field */
  private _bulkPrices?: ProductPrice[];
  /** The requested language for this this resource, default to the
          products default language.
          ISO 639-1 format. */
  private _language?: string;
  /** The class of the request resource */
  private _class: ProductClass;
  /** The hidden status of this resource. */
  private _hidden: YesNo;
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
  /** sources field */
  private _sources: Source[];
  /** Short names for this product per language */
  private _shortNames: LocalizedString[];
  /** The short name for the product, used for abbreviated orderlines */
  private _shortName: string;
  /** Additional keywords of this product per language. Added by the supplier */
  private _keywords?: LocalizedString[];
  /** Additional keywords of this product per language. Added via the PIM */
  private _customKeywords?: LocalizedString[];
  /** The package description of this product per language */
  private _packageDescriptions?: LocalizedString[];
  /** The Original Equipment Manufacturer code (OEM) of this product */
  private _manufacturerCode: string;
  /** The European Article Number (EAN) code of this product */
  private _eanCode: string;
  /** The manufacturer of this product */
  private _manufacturer: string;
  /** The supplier of this product */
  private _supplier: string;
  /** The supplier code of this product */
  private _supplierCode: string;
  /** The status of this product */
  private _status: ProductStatus;
  /** The extra status of this product, commonly linked to a custom valueset */
  private _statusExtra?: string;
  /** The bar code of this product */
  private _barCode?: string;
  /** The turnover group that classifies the product within the financial structure */
  private _turnoverGroup?: string;
  /** The taxonomy the product belongs to */
  private _taxonomy?: string;
  /** The price group the product belongs to, this field can be used for price calculations */
  private _priceGroup?: string;
  /** Is this product orderable */
  private _orderable: YesNo;
  /** Is this product returnable */
  private _returnable: YesNo;
  /** Is it a physical product or a service, download or warranty */
  private _physical: YesNo;
  /** Is this product part of any product bundles. */
  private _hasBundle: YesNo;
  /** Is this product leader of any product bundle. */
  private _isBundleLeader: YesNo;
  /** The package type of this product. i.e.: PIECE, BOX, BLISTER */
  private _package: string;
  /** Description of what an item within a package looks like, i.e.: PIECE or BOX */
  private _packageUnit: string;
  /** Number of items within the package */
  private _packageUnitQuantity: string;
  /** The minimum quantity of products that can be ordered */
  private _minimumQuantity: number;
  /** The unit in which the product can be ordered */
  private _unit: number;
  /** The unit in which the product can be ordered when creating a purchase order */
  private _purchaseUnit: number;
  /** The minimum quantity of products that can be ordered when creating a purchase order */
  private _purchaseMinimumQuantity: number;
  /** The quantity that provides the best value for money for this product */
  private _economicOrderQuantity: number;
  /** The orderable from date of this product */
  private _orderableFrom?: string;
  /** The orderable to date of this product */
  private _orderableTo?: string;
  /** The release date of this product */
  private _releaseDate?: string;
  /** The creation date of this product */
  private _createdAt: string;
  /** The last modified date of this product */
  private _lastModifiedAt: string;
  /** Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price */
  private _offers?: ProductOffer[];
  /** The container class of this product. */
  private _containerClass: ProductContainerClass;
  /** The cluster ID of the product's container */
  private _clusterId?: number;
  /** cluster field */
  private _cluster?: Cluster;
  /** surcharges field */
  private _surcharges: Surcharge[];
  /**
   Creates a new instance of Product
   */
  constructor(data: Partial<Product> = {}) {
    this._id = data.id!;
    this._productId = data.productId!;
    this._categoryId = data.categoryId!;
    this._attributes = data.attributes;
    this._bundles = data.bundles;
    this._category = data.category;
    this._categories = data.categories;
    this._categoryPath = data.categoryPath!;
    this._crossupsellsFrom = data.crossupsellsFrom!;
    this._crossupsellsTo = data.crossupsellsTo!;
    this._favoriteLists = data.favoriteLists;
    this._inventory = data.inventory;
    this._mediaImages = data.mediaImages;
    this._mediaVideos = data.mediaVideos;
    this._mediaDocuments = data.mediaDocuments;
    this._media = data.media;
    this._orderlists = data.orderlists!;
    this._price = data.price;
    this._priceData = data.priceData;
    this._bulkPrices = data.bulkPrices;
    this._language = data.language;
    this._class = data.class!;
    this._hidden = data.hidden!;
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
    this._sources = data.sources!;
    this._shortNames = data.shortNames!;
    this._shortName = data.shortName!;
    this._keywords = data.keywords;
    this._customKeywords = data.customKeywords;
    this._packageDescriptions = data.packageDescriptions;
    this._manufacturerCode = data.manufacturerCode!;
    this._eanCode = data.eanCode!;
    this._manufacturer = data.manufacturer!;
    this._supplier = data.supplier!;
    this._supplierCode = data.supplierCode!;
    this._status = data.status!;
    this._statusExtra = data.statusExtra;
    this._barCode = data.barCode;
    this._turnoverGroup = data.turnoverGroup;
    this._taxonomy = data.taxonomy;
    this._priceGroup = data.priceGroup;
    this._orderable = data.orderable!;
    this._returnable = data.returnable!;
    this._physical = data.physical!;
    this._hasBundle = data.hasBundle!;
    this._isBundleLeader = data.isBundleLeader!;
    this._package = data.package!;
    this._packageUnit = data.packageUnit!;
    this._packageUnitQuantity = data.packageUnitQuantity!;
    this._minimumQuantity = data.minimumQuantity!;
    this._unit = data.unit!;
    this._purchaseUnit = data.purchaseUnit!;
    this._purchaseMinimumQuantity = data.purchaseMinimumQuantity!;
    this._economicOrderQuantity = data.economicOrderQuantity!;
    this._orderableFrom = data.orderableFrom;
    this._orderableTo = data.orderableTo;
    this._releaseDate = data.releaseDate;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._offers = data.offers;
    this._containerClass = data.containerClass!;
    this._clusterId = data.clusterId;
    this._cluster = data.cluster;
    this._surcharges = data.surcharges!;
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
   This product's unique identifier
   */
  get productId(): number {
    return this._productId;
  }
  /**
   This product's unique identifier
   */
  set productId(value: number) {
    this._productId = value;
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
   Lists attributes for this product based on the search input.
   */
  get attributes(): AttributeResultResponse | undefined {
    return this._attributes;
  }
  /**
   Lists attributes for this product based on the search input.
   */
  set attributes(value: AttributeResultResponse | undefined) {
    this._attributes = value;
  }
  /**
   bundles field
   */
  get bundles(): Bundle[] | undefined {
    return this._bundles;
  }
  /**
   bundles field
   */
  set bundles(value: Bundle[] | undefined) {
    this._bundles = value;
  }
  /**
   Product main category
   */
  get category(): Category | undefined {
    return this._category;
  }
  /**
   Product main category
   */
  set category(value: Category | undefined) {
    this._category = value;
  }
  /**
   All the categories the product belongs to
   */
  get categories(): CategoryResponse | undefined {
    return this._categories;
  }
  /**
   All the categories the product belongs to
   */
  set categories(value: CategoryResponse | undefined) {
    this._categories = value;
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
   Product inventory
   */
  get inventory(): ProductInventory | undefined {
    return this._inventory;
  }
  /**
   Product inventory
   */
  set inventory(value: ProductInventory | undefined) {
    this._inventory = value;
  }
  /**
   Product media images
   */
  get mediaImages(): PaginatedMediaImageResponse | undefined {
    return this._mediaImages;
  }
  /**
   Product media images
   */
  set mediaImages(value: PaginatedMediaImageResponse | undefined) {
    this._mediaImages = value;
  }
  /**
   Product media videos
   */
  get mediaVideos(): PaginatedMediaVideoResponse | undefined {
    return this._mediaVideos;
  }
  /**
   Product media videos
   */
  set mediaVideos(value: PaginatedMediaVideoResponse | undefined) {
    this._mediaVideos = value;
  }
  /**
   Product media documents
   */
  get mediaDocuments(): PaginatedMediaDocumentResponse | undefined {
    return this._mediaDocuments;
  }
  /**
   Product media documents
   */
  set mediaDocuments(value: PaginatedMediaDocumentResponse | undefined) {
    this._mediaDocuments = value;
  }
  /**
   Product media images
   */
  get media(): ProductMedia | undefined {
    return this._media;
  }
  /**
   Product media images
   */
  set media(value: ProductMedia | undefined) {
    this._media = value;
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
   price field
   */
  get price(): ProductPrice | undefined {
    return this._price;
  }
  /**
   price field
   */
  set price(value: ProductPrice | undefined) {
    this._price = value;
  }
  /**
   priceData field
   */
  get priceData(): Price | undefined {
    return this._priceData;
  }
  /**
   priceData field
   */
  set priceData(value: Price | undefined) {
    this._priceData = value;
  }
  /**
   bulkPrices field
   */
  get bulkPrices(): ProductPrice[] | undefined {
    return this._bulkPrices;
  }
  /**
   bulkPrices field
   */
  set bulkPrices(value: ProductPrice[] | undefined) {
    this._bulkPrices = value;
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
   Short names for this product per language
   */
  get shortNames(): LocalizedString[] {
    return this._shortNames;
  }
  /**
   Short names for this product per language
   */
  set shortNames(value: LocalizedString[]) {
    this._shortNames = value;
  }
  /**
   The short name for the product, used for abbreviated orderlines
   */
  get shortName(): string {
    return this._shortName;
  }
  /**
   The short name for the product, used for abbreviated orderlines
   */
  set shortName(value: string) {
    this._shortName = value;
  }
  /**
   Additional keywords of this product per language. Added by the supplier
   */
  get keywords(): LocalizedString[] | undefined {
    return this._keywords;
  }
  /**
   Additional keywords of this product per language. Added by the supplier
   */
  set keywords(value: LocalizedString[] | undefined) {
    this._keywords = value;
  }
  /**
   Additional keywords of this product per language. Added via the PIM
   */
  get customKeywords(): LocalizedString[] | undefined {
    return this._customKeywords;
  }
  /**
   Additional keywords of this product per language. Added via the PIM
   */
  set customKeywords(value: LocalizedString[] | undefined) {
    this._customKeywords = value;
  }
  /**
   The package description of this product per language
   */
  get packageDescriptions(): LocalizedString[] | undefined {
    return this._packageDescriptions;
  }
  /**
   The package description of this product per language
   */
  set packageDescriptions(value: LocalizedString[] | undefined) {
    this._packageDescriptions = value;
  }
  /**
   The Original Equipment Manufacturer code (OEM) of this product
   */
  get manufacturerCode(): string {
    return this._manufacturerCode;
  }
  /**
   The Original Equipment Manufacturer code (OEM) of this product
   */
  set manufacturerCode(value: string) {
    this._manufacturerCode = value;
  }
  /**
   The European Article Number (EAN) code of this product
   */
  get eanCode(): string {
    return this._eanCode;
  }
  /**
   The European Article Number (EAN) code of this product
   */
  set eanCode(value: string) {
    this._eanCode = value;
  }
  /**
   The manufacturer of this product
   */
  get manufacturer(): string {
    return this._manufacturer;
  }
  /**
   The manufacturer of this product
   */
  set manufacturer(value: string) {
    this._manufacturer = value;
  }
  /**
   The supplier of this product
   */
  get supplier(): string {
    return this._supplier;
  }
  /**
   The supplier of this product
   */
  set supplier(value: string) {
    this._supplier = value;
  }
  /**
   The supplier code of this product
   */
  get supplierCode(): string {
    return this._supplierCode;
  }
  /**
   The supplier code of this product
   */
  set supplierCode(value: string) {
    this._supplierCode = value;
  }
  /**
   The status of this product
   */
  get status(): ProductStatus {
    return this._status;
  }
  /**
   The status of this product
   */
  set status(value: ProductStatus) {
    this._status = value;
  }
  /**
   The extra status of this product, commonly linked to a custom valueset
   */
  get statusExtra(): string | undefined {
    return this._statusExtra;
  }
  /**
   The extra status of this product, commonly linked to a custom valueset
   */
  set statusExtra(value: string | undefined) {
    this._statusExtra = value;
  }
  /**
   The bar code of this product
   */
  get barCode(): string | undefined {
    return this._barCode;
  }
  /**
   The bar code of this product
   */
  set barCode(value: string | undefined) {
    this._barCode = value;
  }
  /**
   The turnover group that classifies the product within the financial structure
   */
  get turnoverGroup(): string | undefined {
    return this._turnoverGroup;
  }
  /**
   The turnover group that classifies the product within the financial structure
   */
  set turnoverGroup(value: string | undefined) {
    this._turnoverGroup = value;
  }
  /**
   The taxonomy the product belongs to
   */
  get taxonomy(): string | undefined {
    return this._taxonomy;
  }
  /**
   The taxonomy the product belongs to
   */
  set taxonomy(value: string | undefined) {
    this._taxonomy = value;
  }
  /**
   The price group the product belongs to, this field can be used for price calculations
   */
  get priceGroup(): string | undefined {
    return this._priceGroup;
  }
  /**
   The price group the product belongs to, this field can be used for price calculations
   */
  set priceGroup(value: string | undefined) {
    this._priceGroup = value;
  }
  /**
   Is this product orderable
   */
  get orderable(): YesNo {
    return this._orderable;
  }
  /**
   Is this product orderable
   */
  set orderable(value: YesNo) {
    this._orderable = value;
  }
  /**
   Is this product returnable
   */
  get returnable(): YesNo {
    return this._returnable;
  }
  /**
   Is this product returnable
   */
  set returnable(value: YesNo) {
    this._returnable = value;
  }
  /**
   Is it a physical product or a service, download or warranty
   */
  get physical(): YesNo {
    return this._physical;
  }
  /**
   Is it a physical product or a service, download or warranty
   */
  set physical(value: YesNo) {
    this._physical = value;
  }
  /**
   Is this product part of any product bundles.
   */
  get hasBundle(): YesNo {
    return this._hasBundle;
  }
  /**
   Is this product part of any product bundles.
   */
  set hasBundle(value: YesNo) {
    this._hasBundle = value;
  }
  /**
   Is this product leader of any product bundle.
   */
  get isBundleLeader(): YesNo {
    return this._isBundleLeader;
  }
  /**
   Is this product leader of any product bundle.
   */
  set isBundleLeader(value: YesNo) {
    this._isBundleLeader = value;
  }
  /**
   The package type of this product. i.e.: PIECE, BOX, BLISTER
   */
  get package(): string {
    return this._package;
  }
  /**
   The package type of this product. i.e.: PIECE, BOX, BLISTER
   */
  set package(value: string) {
    this._package = value;
  }
  /**
   Description of what an item within a package looks like, i.e.: PIECE or BOX
   */
  get packageUnit(): string {
    return this._packageUnit;
  }
  /**
   Description of what an item within a package looks like, i.e.: PIECE or BOX
   */
  set packageUnit(value: string) {
    this._packageUnit = value;
  }
  /**
   Number of items within the package
   */
  get packageUnitQuantity(): string {
    return this._packageUnitQuantity;
  }
  /**
   Number of items within the package
   */
  set packageUnitQuantity(value: string) {
    this._packageUnitQuantity = value;
  }
  /**
   The minimum quantity of products that can be ordered
   */
  get minimumQuantity(): number {
    return this._minimumQuantity;
  }
  /**
   The minimum quantity of products that can be ordered
   */
  set minimumQuantity(value: number) {
    this._minimumQuantity = value;
  }
  /**
   The unit in which the product can be ordered
   */
  get unit(): number {
    return this._unit;
  }
  /**
   The unit in which the product can be ordered
   */
  set unit(value: number) {
    this._unit = value;
  }
  /**
   The unit in which the product can be ordered when creating a purchase order
   */
  get purchaseUnit(): number {
    return this._purchaseUnit;
  }
  /**
   The unit in which the product can be ordered when creating a purchase order
   */
  set purchaseUnit(value: number) {
    this._purchaseUnit = value;
  }
  /**
   The minimum quantity of products that can be ordered when creating a purchase order
   */
  get purchaseMinimumQuantity(): number {
    return this._purchaseMinimumQuantity;
  }
  /**
   The minimum quantity of products that can be ordered when creating a purchase order
   */
  set purchaseMinimumQuantity(value: number) {
    this._purchaseMinimumQuantity = value;
  }
  /**
   The quantity that provides the best value for money for this product
   */
  get economicOrderQuantity(): number {
    return this._economicOrderQuantity;
  }
  /**
   The quantity that provides the best value for money for this product
   */
  set economicOrderQuantity(value: number) {
    this._economicOrderQuantity = value;
  }
  /**
   The orderable from date of this product
   */
  get orderableFrom(): string | undefined {
    return this._orderableFrom;
  }
  /**
   The orderable from date of this product
   */
  set orderableFrom(value: string | undefined) {
    this._orderableFrom = value;
  }
  /**
   The orderable to date of this product
   */
  get orderableTo(): string | undefined {
    return this._orderableTo;
  }
  /**
   The orderable to date of this product
   */
  set orderableTo(value: string | undefined) {
    this._orderableTo = value;
  }
  /**
   The release date of this product
   */
  get releaseDate(): string | undefined {
    return this._releaseDate;
  }
  /**
   The release date of this product
   */
  set releaseDate(value: string | undefined) {
    this._releaseDate = value;
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
   Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price
   */
  get offers(): ProductOffer[] | undefined {
    return this._offers;
  }
  /**
   Available offers for this Product and Customer/Contact. First item in the array should be regarded as the active price
   */
  set offers(value: ProductOffer[] | undefined) {
    this._offers = value;
  }
  /**
   The container class of this product.
   */
  get containerClass(): ProductContainerClass {
    return this._containerClass;
  }
  /**
   The container class of this product.
   */
  set containerClass(value: ProductContainerClass) {
    this._containerClass = value;
  }
  /**
   The cluster ID of the product's container
   */
  get clusterId(): number | undefined {
    return this._clusterId;
  }
  /**
   The cluster ID of the product's container
   */
  set clusterId(value: number | undefined) {
    this._clusterId = value;
  }
  /**
   cluster field
   */
  get cluster(): Cluster | undefined {
    return this._cluster;
  }
  /**
   cluster field
   */
  set cluster(value: Cluster | undefined) {
    this._cluster = value;
  }
  /**
   surcharges field
   */
  get surcharges(): Surcharge[] {
    return this._surcharges;
  }
  /**
   surcharges field
   */
  set surcharges(value: Surcharge[]) {
    this._surcharges = value;
  }
}