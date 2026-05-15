import { Shipment } from './Shipment';
/**
 Object class for ShipmentResponse
 */
export class ShipmentResponse {
  /** List of items of type Shipment */
  items!: Shipment[];
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
  constructor(data: Partial<ShipmentResponse> = {}) {
    Object.assign(this, data);
  }
}