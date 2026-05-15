/**
 Object class for CartCarrier
 */
export class CartCarrier {
  /** Carrier unique identifier */
  id!: number;
  /** Carrier name */
  name!: string;
  /** Carrier's logo */
  logo?: string;
  /** Targeted costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules */
  price!: number;
  /** Carrier's delivery deadline */
  deliveryDeadline?: string;
  constructor(data: Partial<CartCarrier> = {}) {
    Object.assign(this, data);
  }
}