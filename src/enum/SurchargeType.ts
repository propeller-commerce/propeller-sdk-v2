/**
 * @enum SurchargeType
 Types of surcharges that can be applied to orders or products
 */
export enum SurchargeType {
  /** Percentage-based surcharge */
  PERCENTAGE = "PERCENTAGE",
  /** Fixed amount surcharge */
  FIXED_AMOUNT = "FIXED_AMOUNT",
  /** Shipping surcharge */
  SHIPPING = "SHIPPING",
  /** Handling fee surcharge */
  HANDLING = "HANDLING",
  /** Payment processing fee */
  PAYMENT_FEE = "PAYMENT_FEE",
  /** Environmental fee */
  ENVIRONMENTAL = "ENVIRONMENTAL",
  /** Service charge */
  SERVICE = "SERVICE"
}