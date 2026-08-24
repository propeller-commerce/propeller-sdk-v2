import { Source } from './Source';
import { YesNo } from '../enum/YesNo';
import { Product } from './Product';
import { LocalizedString } from './LocalizedString';
/**
 Object class for ClusterOption
 */
export interface ClusterOption {
  /** id field */
  id: number;
  /** The classID of the cluster that represents this cluster */
  clusterOptionId: number;
  /** Indicates whether an option is required or not */
  isRequired?: YesNo;
  /** Indicates whether an option is hidden or not */
  hidden?: YesNo;
  /** defaultProduct field */
  defaultProduct?: Product;
  /** products field */
  products?: Product[];
  /** names field */
  names: LocalizedString[];
  /** descriptions field */
  descriptions: LocalizedString[];
  /** shortDescriptions field */
  shortDescriptions: LocalizedString[];

  /** Globally unique identifier for the cluster option. */
  uuid: string;
  /** Identifier of the tenant the cluster option belongs to. */
  tenant: string;
  /** Timestamp marking when the cluster option was created, in UTC ISO 8601 format. */
  createdAt: string;
  /** Identifier of the user account that created the cluster option. */
  createdBy: number;
  /** Timestamp marking the last modification of the cluster option, in UTC ISO 8601 format. */
  lastModifiedAt: string;
  /** Identifier of the user account that last modified the cluster option. */
  lastModifiedBy: number;
  /** Reference to the cluster that owns the option. */
  clusterId: number;
  /** Identifier of the product preselected as the default choice for the option. */
  defaultProductId?: number;
  /** Sort order within the cluster */
  sortOrder?: number;
  /** Pairs of external system names and the identifiers each system assigned to the cluster option. */
  sources: Source[];
}