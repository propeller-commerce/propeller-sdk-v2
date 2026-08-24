import { CompanySearchIndexTemplate } from '../enum/CompanySearchIndexTemplate';
/**
 Input object for CompanySearchReindexInput
 Configuration for reindexing company search data to new index structures.
 */
export interface CompanySearchReindexInput {
  /** Index template to use for the reindexing operation */
  template?: CompanySearchIndexTemplate;
}
