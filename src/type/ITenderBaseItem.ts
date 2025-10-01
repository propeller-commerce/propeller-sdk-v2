import { Taxcode } from '../enum/Taxcode';
import { TenderItemIncentive } from './TenderItemIncentive';
import { TenderItemSurcharge } from './TenderItemSurcharge';
/**
 Base interface for tender base item entities
 */
export interface ITenderBaseItem {
  /** Item identifier */
  uuid: string;
  /** Product identifier */
  productId?: number;
  /** Item quantity */
  quantity: number;
  /** Item price */
  price: number;
  /** Item description */
  description?: string;
}