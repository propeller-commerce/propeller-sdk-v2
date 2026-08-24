/**
 Input object for PricesheetsEffectiveInput
 Input parameters for retrieving effective pricesheets for a customer or contact.
 */
export interface PricesheetsEffectiveInput {
  /** Contact identifier to retrieve effective pricesheets for */
  contactId?: number;
  /** Company identifier to retrieve company-specific pricesheets */
  companyId?: number;
  /** Customer identifier to retrieve effective pricesheets for */
  customerId?: number;
  /** Number of pricesheet records to return per page */
  offset?: number;
  /** Page number for pagination results */
  page?: number;
}
