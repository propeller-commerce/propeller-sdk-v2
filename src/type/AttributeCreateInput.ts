import { AttributeValueInput } from './AttributeValueInput';
/**
 Input object for AttributeCreateInput
 */
export interface AttributeCreateInput {
  /** The ID of the AttributeDescription */
  attributeDescriptionId: string;
  /** The value of the attribute */
  value: AttributeValueInput;
  /** The ID of the customer the attribute belongs to */
  customerId?: number;
  /** The ID of the contact the attribute belongs to */
  contactId?: number;
  /** The ID of the company the attribute belongs to */
  companyId?: number;
  /** The ID of the product the attribute belongs to */
  productId?: number;
  /** The ID of the cluster the attribute belongs to */
  clusterId?: number;
  /** The ID of the category the attribute belongs to */
  categoryId?: number;
}