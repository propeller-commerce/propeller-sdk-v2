import { AttributeType } from '../enum/AttributeType';
import { AttributeDescriptionClass } from '../enum/AttributeDescriptionClass';
import { LocalizedStringInput } from './LocalizedStringInput';
import { AttributeValueInput } from './AttributeValueInput';
/**
 Input object for AttributeDescriptionCreateInput
 */
export interface AttributeDescriptionCreateInput {
  /** Descriptive identifier (Screaming Snake Case) */
  name: string;
  /** Attribute descriptions per language */
  descriptions: LocalizedStringInput[];
  /** Attribute unit per language */
  units?: LocalizedStringInput[];
  /** Attribute type. One of: [text, enum, color, datetime, integer, decimal] */
  type: AttributeType;
  /** Attribute class. One of: [product, category, cluster, customer, contact, company] */
  attributeClass: AttributeDescriptionClass;
  /** The ID of the connected valueset to use when type is ENUM */
  valuesetId?: number;
  /** The attribute group */
  group?: string;
  /** Flags whether this attribute should be used when generating catalog page filters */
  isSearchable?: boolean;
  /** Flags whether this attribute should be used when generating product specifications */
  isPublic?: boolean;
  /** Flags whether this attribute is only available to system users */
  isSystem?: boolean;
  /** Flags whether this attribute is hidden and should only be used for background operations */
  isHidden?: boolean;
  /** The default value for this attribute */
  defaultValue: AttributeValueInput;
}