import { Warehouse } from './Warehouse';
/**
 Object class for WarehousesResponse
 */
export class WarehousesResponse {
  /** List of items of type Warehouse */
  items!: Warehouse[];
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
  constructor(data: Partial<WarehousesResponse> = {}) {
    Object.assign(this, data);
  }
}