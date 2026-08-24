/**
 Input object for PricesheetsEffectivePaginationInput
 Pagination and filtering parameters for field resolver effective pricesheets.
 */
export interface PricesheetsEffectivePaginationInput {
  /** Company identifier to retrieve company-specific pricesheets */
  companyId?: number;
  /** Number of pricesheet records to return per page */
  offset?: number;
  /** Page number for pagination results */
  page?: number;
}
