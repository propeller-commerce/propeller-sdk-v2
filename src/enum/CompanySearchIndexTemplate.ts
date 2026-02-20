/**
 * @enum CompanySearchIndexTemplate
 * Available search index templates for data reindexing and mapping operations
 */
export enum CompanySearchIndexTemplate {
  /** Main company search index template for comprehensive company data */
  COMPANY_SEARCH = "COMPANY_SEARCH",
  /** Independent contact search index template for contact data */
  CONTACT_SEARCH = "CONTACT_SEARCH",
  /** Address search index template for address data */
  TEMP_ADDRESS = "TEMP_ADDRESS",
  /** Contact-company relationship search index template for contact-company associations */
  TEMP_CONTACT_COMPANY = "TEMP_CONTACT_COMPANY",
  /** Attribute search index template for orphaned attribute data */
  TEMP_ATTRIBUTE = "TEMP_ATTRIBUTE",
}
