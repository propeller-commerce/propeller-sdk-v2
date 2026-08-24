/**
 * @enum TicketSortField
 * Available fields for sorting ticket search results.
 * Enables ordering by various ticket attributes for better organization and analysis.
 */
export enum TicketSortField {
  /** Sort by the unique identifier of the ticket. */
  ID = "ID",
  /** Sort by the type of the ticket. */
  TYPE = "TYPE",
  /** Sort by the status of the ticket. */
  STATUS = "STATUS",
  /** Sort by the identifier of the order associated with the ticket. */
  ORDER_ID = "ORDER_ID",
  /** Sort by the identifier of the product associated with the ticket. */
  PRODUCT_ID = "PRODUCT_ID",
  /** Sort by the identifier of the cluster associated with the ticket. */
  CLUSTER_ID = "CLUSTER_ID",
  /** Sort by the identifier of the contact associated with the ticket. */
  CONTACT_ID = "CONTACT_ID",
  /** Sort by the identifier of the customer associated with the ticket. */
  CUSTOMER_ID = "CUSTOMER_ID",
  /** Sort by the identifier of the company associated with the ticket. */
  COMPANY_ID = "COMPANY_ID",
  /** Sort by the email address of the contact associated with the ticket. */
  EMAIL = "EMAIL",
  /** Sort by the phone number of the contact associated with the ticket. */
  PHONE = "PHONE",
  /** Sort by the external URL associated with the ticket. */
  EXTERNAL_URL = "EXTERNAL_URL",
  /** Sort by the timestamp when the ticket was picked up by an admin user. */
  PICKED_UP_AT = "PICKED_UP_AT",
  /** Sort by the timestamp when the ticket was completed. */
  COMPLETED_AT = "COMPLETED_AT",
  /** Sort by the timestamp when the ticket was created. */
  CREATED_AT = "CREATED_AT",
  /** Sort by the timestamp when the ticket was last modified. */
  LAST_MODIFIED_AT = "LAST_MODIFIED_AT",
  /** Sort by the identifier of the admin user the ticket is assigned to. */
  ASSIGNED_TO_ADMIN_USER_ID = "ASSIGNED_TO_ADMIN_USER_ID",
  /** Sort by the identifier of the admin user who created the ticket. */
  CREATED_BY_ADMIN_USER_ID = "CREATED_BY_ADMIN_USER_ID",
  /** Sort by the identifier of the admin user who last modified the ticket. */
  LAST_MODIFIED_BY_ADMIN_USER_ID = "LAST_MODIFIED_BY_ADMIN_USER_ID",
}
