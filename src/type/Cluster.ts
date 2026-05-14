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
export interface Cluster extends IBaseProduct {
  /** Resource primary identifier */
  id: number;
  /** The classID of this cluster */
  clusterId: number;
  /** categoryId field */
  categoryId: number;
  /** Lists attributes for this cluster based on the search input. */
  attributes?: AttributeResultResponse;
  /** All the categories the cluster belongs to */
  categories?: CategoryResponse;
  /** category field */
  category: Category;
  /** categoryPath field */
  categoryPath: Category[];
  /** crossupsellsFrom field */
  crossupsellsFrom: CrossupsellsResponse;
  /** crossupsellsTo field */
  crossupsellsTo: CrossupsellsResponse;
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  orderlists: OrderlistsResponse;
  /** Array of selectable main products for this cluster, when the array contains more than one. Only one can be added per cart/order item */
  products: Product[];
  /** The creation date of this product */
  createdAt: string;
  /** The last modified date of this product */
  lastModifiedAt: string;
  /** options field */
  options: ClusterOption[];
  /** The drilldown configuration for this cluster  */
  /** @deprecated Use config.setting instead */
  drillDowns?: ClusterDrillDown[];
  /** defaultProduct field */
  defaultProduct?: Product;
  /** config field */
  config?: ClusterConfig;
  /** names field */
  names: LocalizedString[];
  /** descriptions field */
  descriptions: LocalizedString[];
  /** shortDescriptions field */
  shortDescriptions: LocalizedString[];
  /** slugs field */
  slugs: LocalizedString[];
  /** The SKU (stock keeping unit) of this product */
  sku: string;
  /** The default language for this product or cluster, this is the language to fall back too, when there is no translation available in a specific language. */
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
  /** Short names for this cluster per language */
  shortNames: LocalizedString[];
  /** sources field */
  sources: Source[];
  /** The requested language for this this resource, default to the
          products default language.
          ISO 639-1 format. */
  language?: string;
  /** The class of the request resource */
  class: ProductClass;
  /** The hidden status of this resource. */
  hidden: YesNo;
}