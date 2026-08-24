/**
 * @enum RESTRICT_SALES_PRICING_VISIBILITY
 * Controls visibility of sales pricing information within the tenant.
 * This setting affects what pricing data users can access and view.
 */
export enum RESTRICT_SALES_PRICING_VISIBILITY {
  /** Sales pricing information is restricted. */
  YES = "YES",
  /** Sales pricing information is visible to all users. No restrictions on accessing pricing data within the tenant. */
  NO = "NO",
}
