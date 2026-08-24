import { YesNo } from '../enum/YesNo';
import { CategorySortableFields } from '../enum/CategorySortableFields';
import { SortOrder } from '../enum/SortOrder';
/**
 Input object for ClusterCategorySearchInput
 */
export interface ClusterCategorySearchInput {
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

  /** Search by category slugs */
  slugs?: string[];
  /** Filter by parent category IDs */
  parentCategoryIds?: number[];
  /** Filter by category IDs */
  categoryIds?: number[];
  /** Filter by category UUIDs */
  uuids?: string[];
  /** Start date for creation date filtering (ISO 8601 format) */
  createdAtFrom?: string;
  /** End date for creation date filtering (ISO 8601 format) */
  createdAtTo?: string;
  /** Start date for modification date filtering (ISO 8601 format) */
  lastModifiedAtFrom?: string;
  /** End date for modification date filtering (ISO 8601 format) */
  lastModifiedAtTo?: string;
  /** Deprecated: use `createdAtFrom` instead. Start date for creation date filtering (ISO 8601 format) */
  dateCreatedFrom?: string;
  /** Deprecated: use `createdAtTo` instead. End date for creation date filtering (ISO 8601 format) */
  dateCreatedTo?: string;
  /** Deprecated: use `lastModifiedAtFrom` instead. Start date for modification date filtering (ISO 8601 format) */
  dateModifiedFrom?: string;
  /** Deprecated: use `lastModifiedAtTo` instead. End date for modification date filtering (ISO 8601 format) */
  dateModifiedTo?: string;
  /** Source system name (must be used with sourceIds) */
  source?: string;
  /** Source IDs to filter by (must be used with source) */
  sourceIds?: string[];
}