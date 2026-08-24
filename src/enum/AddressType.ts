/**
 * @enum AddressType
 Types of addresses used in the system
 */
export enum AddressType {
  /** Delivery address for shipping orders */
  delivery = "delivery",
  /** Invoice/billing address for financial transactions */
  invoice = "invoice",
  /** Home address of the customer */
  home = "home",
}