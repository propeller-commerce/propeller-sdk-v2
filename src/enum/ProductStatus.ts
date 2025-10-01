/**
 * @enum ProductStatus
 Product status enumeration for inventory management
 */
export enum ProductStatus {
  /** Active - Product is available and active */
  A = "A",
  /** New - Product is newly added */
  N = "N",
  /** Pending - Product is pending approval */
  P = "P",
  /** Suspended - Product is temporarily suspended */
  S = "S",
  /** Restricted - Product has restricted access */
  R = "R",
  /** Terminated - Product is no longer available */
  T = "T",
}