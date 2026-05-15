import { AttributeValue } from './AttributeValue';
import { AttributeDescription } from './AttributeDescription';
/**
 Object class for CustomerAttribute
 */
export class CustomerAttribute {
  /** The ID of the attribute */
  id!: string;
  /** The value of the attribute */
  value!: AttributeValue;
  /** The date when the attribute was created */
  createdAt!: string;
  /** The date when the attribute was last modified */
  lastModifiedAt!: string;
  /** The ID of the user that created the attribute */
  createdBy?: number;
  /** The ID of the user that last modified the attribute */
  lastModifiedBy?: number;
  /** attributeDescription field */
  attributeDescription?: AttributeDescription;
  /** The ID of the customer this attribute belongs to */
  customerId!: number;
  constructor(data: Partial<CustomerAttribute> = {}) {
    Object.assign(this, data);
  }
}