import { AttributeDescriptionClass } from '../enum/AttributeDescriptionClass';
import { AttributeType } from '../enum/AttributeType';
import { AttributeDescriptionSortInput } from './AttributeDescriptionSortInput';
/**
 Input object for AttributeDescriptionSearchInput
 */
export interface AttributeDescriptionSearchInput {
  /** List of attribute ids to search for */
  ids?: string[];
  /** List of attribute names to search for */
  names?: string[];
  /** List of attribute classes to search for */
  classes?: AttributeDescriptionClass[];
  /** List of attribute types to search for */
  types?: AttributeType[];
  /** List of group names to search for */
  groups?: string[];
  /** Search for the attribute if it is searchable */
  isSearchable?: boolean;
  /** Search for the attribute if it is public */
  isPublic?: boolean;
  /** Search for the attribute if it is hidden */
  isHidden?: boolean;
  /** Search for the attribute if it is a system attribute */
  isSystem?: boolean;
  /** Pagination offset number */
  offset?: number;
  /** Pagination page number */
  page?: number;
  /** List of sorting options */
  sortInputs?: AttributeDescriptionSortInput[];
}