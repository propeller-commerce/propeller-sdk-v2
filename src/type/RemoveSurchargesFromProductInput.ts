/**
 Input object for RemoveSurchargesFromProductInput
 */
export interface RemoveSurchargesFromProductInput {
  /** List of surcharge ids */
  surchargeIds: string[];
  /** Product identifier */
  productId: number;
}