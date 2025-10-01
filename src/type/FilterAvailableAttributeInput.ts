import { AttributeType } from '../enum/AttributeType';
/**
 Input object for FilterAvailableAttributeInput
 */
export interface FilterAvailableAttributeInput {
  /** isPublic input field */
  isPublic?: boolean;
  /** isSearchable input field */
  isSearchable?: boolean;
  /** ids input field */
  ids?: string[];
  /** types input field */
  types?: AttributeType[];
}