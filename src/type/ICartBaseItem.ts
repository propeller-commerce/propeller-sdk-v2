import { Product } from './Product';
/**
 Interface for ICartBaseItem
 */
export interface ICartBaseItem {

  /** itemId field */
  itemId: string;
  /** productId field */
  productId?: number;
  /** bundleId field */
  bundleId?: string;
}