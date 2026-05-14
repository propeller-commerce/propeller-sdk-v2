/**
 * @enum OrderItemClass
 Class enumeration for OrderItem categorization
 */
export enum OrderItemClass {
  product = "product",
  incentive = "incentive",
  surcharge = "surcharge",
  /** @deprecated Unused. To be removed in a future version */
  postage = "postage",
  payment = "payment",
}