import { AttributeValueInput } from './AttributeValueInput';
/**
 Input object for AttributeBulkCreateInput
 Input for bulk attribute operations with flexible attribute description referencing.
 Supports bulk attribute creation, updates, and deletion.
 */
export interface AttributeBulkCreateInput {
  /** Unique identifier of the attribute description (reference by ID) */
  attributeDescriptionId?: string;
  /** Name of the attribute description (reference by name) */
  attributeDescriptionName?: string;
  /** The value of the attribute for bulk operations */
  value?: AttributeValueInput;
}
