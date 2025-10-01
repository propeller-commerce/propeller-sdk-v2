import { LocalizedStringInput } from './LocalizedStringInput';
import { AttributeValueInput } from './AttributeValueInput';
/**
 Input object for AttributeDescriptionUpdateInput
 */
export interface AttributeDescriptionUpdateInput {
  /** Attribute names per language */
  descriptions?: LocalizedStringInput[];
  /** Attribute unit per language */
  units?: LocalizedStringInput[];
  /** The attribute group */
  group?: string;
  /** Flags whether this attribute should be used when generating
      catalog page filters */
  isSearchable?: boolean;
  /** Flags whether this attribute should be used when generating
      product specifications. */
  isPublic?: boolean;
  /** Flags whether this attribute is only available to system users */
  isSystem?: boolean;
  /** Flags whether this attribute is hidden and should
      only be used for background  operations. */
  isHidden?: boolean;
  /** The default value for this attribute */
  defaultValue?: AttributeValueInput;
}