import { SurchargeProduct } from './SurchargeProduct';
/**
 Object class for SurchargeProductResponse
 */
export class SurchargeProductResponse {
  /** List of items of type SurchargeProduct */
  items!: SurchargeProduct[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /** The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  constructor(data: Partial<SurchargeProductResponse> = {}) {
    Object.assign(this, data);
  }
}