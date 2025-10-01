/**
 Input object for AddSurchargesToProductInput
 */
export interface AddSurchargesToProductInput {
  /** List of surcharge ids */
  surchargeIds: string[];
  /** Product identifier */
  productId: number;
}