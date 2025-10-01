import { YesNo } from '../enum/YesNo';
import { CategorySortableFields } from '../enum/CategorySortableFields';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ProductCategorySearchInput
 */
export interface ProductCategorySearchInput {
  /** Find categories by name */
  name?: string;
  /** The language to use when searching categories by name or slug. When omitted the categories default language is used */
  language?: string;
  /** Find categories by one or more slugs */
  slug?: string[];
  /** Find categories by one or more parentCategoryIds */
  parentCategoryId?: number[];
  /** Find categories by their hidden status */
  hidden?: YesNo;
  /** The page number to return */
  page?: number;
  /** The amount of categories return per page */
  offset?: number;
  /** Available sortable fields One of: [name, dateCreated, entityDateChanged] */
  sortField?: CategorySortableFields;
  /** Sort ordering ['desc' or 'asc'] */
  sortOrder: SortOrder;
}