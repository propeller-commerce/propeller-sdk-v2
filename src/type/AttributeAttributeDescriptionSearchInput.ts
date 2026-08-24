import { AttributeType } from '../enum/AttributeType';
/**
 Input object for AttributeAttributeDescriptionSearchInput
 */
export interface AttributeAttributeDescriptionSearchInput {
  /** Array of attributeDescriptionIds to search attributes for */
  ids?: string[];
  /** Array of attributeDescription names to search attributes for */
  names?: string[];
  /** Array of attributeDescription types to search attributes for */
  types?: AttributeType[];
  /** Array of attributeDescription groups to search attributes for */
  groups?: string[];
  /** Search for searchable attributes */
  isSearchable?: boolean;
  /** Search for public attributes */
  isPublic?: boolean;
  /** Search for hidden attributes */
  isHidden?: boolean;
  /** Search for system attributes */
  isSystem?: boolean;
}