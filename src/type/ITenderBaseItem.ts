import { TaxCode } from '../enum/TaxCode';
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
  /** The tax percentage for this tender/order item, with decimals (e.g. 8.1) */
  taxPercentageDecimal: number;
}