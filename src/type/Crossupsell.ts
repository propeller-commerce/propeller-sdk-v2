import { CrossupsellType } from '../enum/CrossupsellType';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for Crossupsell
 */
export class Crossupsell {
  /** Primary identifier */
  id!: string;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** Cross/Upsell type */
  type!: CrossupsellType;
  /** Cross/Up Sell subtype */
  subType?: string;
  /** productTo field */
  productTo?: IBaseProduct;
  /** productFrom field */
  productFrom?: IBaseProduct;
  /** clusterTo field */
  clusterTo?: IBaseProduct;
  /** clusterFrom field */
  clusterFrom?: IBaseProduct;
  constructor(data: Partial<Crossupsell> = {}) {
    Object.assign(this, data);
  }
}