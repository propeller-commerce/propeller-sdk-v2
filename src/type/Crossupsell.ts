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

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `type`. */
  getType(): CrossupsellType {
    return this.type;
  }
  /** Returns `subType`. */
  getSubType(): string | undefined {
    return this.subType;
  }
  /** Returns `productTo`. */
  getProductTo(): IBaseProduct | undefined {
    return this.productTo;
  }
  /** Returns `productFrom`. */
  getProductFrom(): IBaseProduct | undefined {
    return this.productFrom;
  }
  /** Returns `clusterTo`. */
  getClusterTo(): IBaseProduct | undefined {
    return this.clusterTo;
  }
  /** Returns `clusterFrom`. */
  getClusterFrom(): IBaseProduct | undefined {
    return this.clusterFrom;
  }
}