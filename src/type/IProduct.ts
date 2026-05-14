import { ProductClass } from '../enum/ProductClass';
import { YesNo } from '../enum/YesNo';
import { ProductStatus } from '../enum/ProductStatus';
import { ProductContainerClass } from '../enum/ProductContainerClass';
import { LocalizedString } from './LocalizedString';
import { Source } from './Source';
import { ProductOffer } from './ProductOffer';
/**
 Base interface for product entities
 */
export interface IProduct {
  /** Product identifier */
  id: number;
/** Product SKU */
  sku: string;
}