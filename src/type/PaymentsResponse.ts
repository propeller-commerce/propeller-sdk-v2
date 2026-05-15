import { Payment } from './Payment';
/**
 Object class for PaymentsResponse
 */
export class PaymentsResponse {
  /** List of items of type Payment */
  items!: Payment[];
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
  constructor(data: Partial<PaymentsResponse> = {}) {
    Object.assign(this, data);
  }
}