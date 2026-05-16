/**
 Carrier information for tender shipping options
 */
export interface TenderCarrier {
  /** Unique identifier for the carrier */
  id: number;
  /** Price for this carrier service */
  price: number;
  /** Carrier name */
  name: string;
  /** Carrier description */
  description?: string;
  /** Carrier's logo */
  logo?: string;
  /** Expected delivery deadline for this carrier */
  deliveryDeadline?: string;
}
