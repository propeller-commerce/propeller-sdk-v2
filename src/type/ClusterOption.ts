import { YesNo } from '../enum/YesNo';
import { Product } from './Product';
import { LocalizedString } from './LocalizedString';
/**
 Object class for ClusterOption
 */
export class ClusterOption {
  /** id field */
  id!: number;
  /** The classID of the cluster that represents this cluster */
  clusterOptionId!: number;
  /** Indicates whether an option is required or not */
  isRequired?: YesNo;
  /** Indicates whether an option is hidden or not */
  hidden?: YesNo;
  /** defaultProduct field */
  defaultProduct?: Product;
  /** products field */
  products?: Product[];
  /** names field */
  names!: LocalizedString[];
  /** descriptions field */
  descriptions!: LocalizedString[];
  /** shortDescriptions field */
  shortDescriptions!: LocalizedString[];
  constructor(data: Partial<ClusterOption> = {}) {
    Object.assign(this, data);
  }
}