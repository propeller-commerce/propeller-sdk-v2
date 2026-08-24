import { CompanySearchIndexTemplate } from '../enum/CompanySearchIndexTemplate';
/**
 Input object for CompanySearchIndexUpdateMappingInput
 Configuration for updating search index mapping definitions.
 */
export interface CompanySearchIndexUpdateMappingInput {
  /** Search index template to update with new mapping configuration */
  template: CompanySearchIndexTemplate;
}
