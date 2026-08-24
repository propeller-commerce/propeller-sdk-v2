/**
 * @enum SurchargeType
 Types of surcharges that can be applied to orders or products
 */
export enum SurchargeType {
  /** Flat fee surcharge */
  FlatFee = "FlatFee",
  /** Percentage amount surcharge */
  Percentage = "Percentage"
}