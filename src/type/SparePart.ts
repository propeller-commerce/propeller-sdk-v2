import { LocalizedString } from './LocalizedString';
import { IBaseProduct } from './IBaseProduct';
/**
 Object class for SparePart
 */
export interface SparePart {
  /** Spare Part identifier */
  id: string | number;
  /** Spare Part SKU */
  sku: string;
  /** Spare Part quantity */
  quantity: number;
  /** Spare Part name */
  name?: LocalizedString[];
  /** product field */
  product?: IBaseProduct;
}