/**
 Input object for PriceCalculateProductInput
 */
export interface PriceCalculateProductInput {
  /** Tax zone */
  taxZone?: string;
  /** Contact id to calculate the price for */
  contactId?: number;
  /** Customer id to calculate the price for */
  customerId?: number;
  /** Company id to calculate the price for */
  companyId?: number;
}