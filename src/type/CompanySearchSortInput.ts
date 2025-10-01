import { CompanySearchSortField } from '../enum/CompanySearchSortField';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for CompanySearchSortInput
 */
export interface CompanySearchSortInput {
  /** Field to sort by */
  field: CompanySearchSortField;
  /** Order option to sort by. [Default to `ASC`] */
  order: SortOrder;
}