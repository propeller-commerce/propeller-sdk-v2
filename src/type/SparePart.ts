import { LocalizedString } from './LocalizedString';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for SparePart
 */
export class SparePart {
  /** Spare Part identifier */
  id!: string | number;
  /** Spare Part SKU */
  sku!: string;
  /** Spare Part quantity */
  quantity!: number;
  /** Spare Part name */
  name?: LocalizedString[];
  /** product field */
  product?: IBaseProduct;
  constructor(data: Partial<SparePart> = {}) {
    Object.assign(this, data);
  }
}