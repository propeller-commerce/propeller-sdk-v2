/**
 * @enum Taxcode
 * Tax classification codes that determine the applicable tax rates and regulations
 */
export enum Taxcode {
  /** High tax rate classification */
  H = "H",
  /** Low tax rate classification */
  L = "L",
  /** No tax classification */
  N = "N",
  M = "M",
  CUST = "CUST",
}

/** Alias for Taxcode - Tax classification codes (capital C variant) */
export { Taxcode as TaxCode };
