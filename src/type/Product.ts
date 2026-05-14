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
  /** @deprecated Deprecated in favor of `media.images` */
  mediaImages?: PaginatedMediaImageResponse;
  /** Product media videos */
  /** @deprecated Deprecated in favor of `media.videos` */
  mediaVideos?: PaginatedMediaVideoResponse;
  /** Product media documents */
  /** @deprecated Deprecated in favor of `media.documents` */
  mediaDocuments?: PaginatedMediaDocumentResponse;
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
  /** The short name for the product, used for abbreviated orderlines */
  shortName!: string;
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
}