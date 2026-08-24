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

  /** Globally unique identifier for the product or cluster. */
  uuid: string;
  /** Discriminator that distinguishes between a product and a cluster within the shared catalogue. */
  type: ProductClass;
  /** All category IDs this base product belongs to */
  categoryIds: number[];
}