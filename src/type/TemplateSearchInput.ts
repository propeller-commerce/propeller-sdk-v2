import { TemplateType } from '../enum/TemplateType';
import { TemplateSortInput } from './TemplateSortInput';
/**
 Input object for TemplateSearchInput
 */
export interface TemplateSearchInput {
  /** Types of templates to filter by, possible values: [EMAIL,DOCUMENT] */
  types?: TemplateType[];
  /** A list of template IDs to filter by */
  ids?: string[];
  /** Search for templates that are used for default order PDF generation true/false, omit to ignore this filter */
  isDefaultOrderPdf?: boolean;
  /** Search for templates that are used for default quote PDF generation true/false, omit to ignore this filter */
  isDefaultQuotePdf?: boolean;
  /** Pagination offset number */
  offset?: number;
  /** Pagination page number */
  page?: number;
  /** Sorting options */
  sortInputs?: TemplateSortInput[];
}