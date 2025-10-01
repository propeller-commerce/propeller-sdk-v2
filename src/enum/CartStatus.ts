/**
 * @enum CartStatus
 Status enumeration for shopping carts
 */
export enum CartStatus {
  /** Cart is open and items can be added/modified */
  OPEN = "OPEN",
  /** Cart is awaiting purchase authorization */
  PENDING_PURCHASE_AUTHORIZATION = "PENDING_PURCHASE_AUTHORIZATION",
}