/**
 Carrier information for tender shipping options
 */
export class TenderCarrier {
  /** Unique identifier for the carrier */
  id!: number;
  /** Price for this carrier service */
  price!: number;
  /** Carrier name */
  name!: string;
  /** Carrier description */
  description?: string;
  /** Carrier's logo */
  logo?: string;
  /** Costs for delivery through this carrier. Use the costs as an indication, the actual costs are calculated through business rules */
  /** @deprecated Deprecated, please use price instead */
  amount!: number;
  /** Expected delivery deadline for this carrier */
  deliveryDeadline?: string;
  constructor(data: Partial<TenderCarrier> = {}) {
    Object.assign(this, data);
  }
}
