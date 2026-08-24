/**
 * @enum OrderType
 Types of orders in the e-commerce system
 */
export enum OrderType {
  /** Dropshipment order - shipped directly from supplier */
  dropshipment = "dropshipment",
  /** Purchase order - standard buying transaction */
  purchase = "purchase",
  /** Quotation order - price quote request */
  quotation = "quotation",
  /** Stock order - from available inventory */
  stock = "stock",
}