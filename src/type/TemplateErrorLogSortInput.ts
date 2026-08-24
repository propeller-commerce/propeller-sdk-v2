import { TemplateErrorLogSortField } from '../enum/TemplateErrorLogSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for TemplateErrorLogSortInput
 Sorting configuration for template error log search results.
 */
export interface TemplateErrorLogSortInput {
  /** Error log field to use for sorting */
  field: TemplateErrorLogSortField;
  /** Direction of sorting operation */
  order: SortOrder;
}
