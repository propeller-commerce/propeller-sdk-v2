import { BaseProductCategoryRelationship } from './BaseProductCategoryRelationship';
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
  /** The hidden status of this resource. */
  hidden: YesNo;

  /** Globally unique identifier for the product or cluster. */
  uuid: string;
  /** Discriminator that distinguishes between a product and a cluster within the shared catalogue. */
  type: ProductClass;
  /** Identifiers of every category the product belongs to. */
  categoryIds: number[];
  /** Cluster code. Uniquely identifies a cluster within the catalogue and is only meaningful on cluster records. */
  code?: string;
  /** clusterConfig field */
  clusterConfig?: ClusterConfig;
  /** categoryRelations field */
  categoryRelations: BaseProductCategoryRelationship[];
}