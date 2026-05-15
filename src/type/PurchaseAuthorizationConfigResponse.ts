import { PurchaseAuthorizationConfig } from './PurchaseAuthorizationConfig';
/**
 Object class for PurchaseAuthorizationConfigResponse
 */
export class PurchaseAuthorizationConfigResponse {
  /** List of items of type PurchaseAuthorizationConfig */
  items!: PurchaseAuthorizationConfig[];
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
  constructor(data: Partial<PurchaseAuthorizationConfigResponse> = {}) {
    Object.assign(this, data);
  }
}