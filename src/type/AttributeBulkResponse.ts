import { AttributeValue } from './AttributeValue';
/**
 Object class for AttributeBulkResponse
 */
export class AttributeBulkResponse {
  /** ID of the created or updated attribute description */
  id?: string;
  /** Name of the created or updated attribute description */
  name!: string;
  /** Success or error message */
  message?: string;
  /** Name of the attribute description the attribute is created for */
  key!: string;
  /** The value for this attribute */
  value?: AttributeValue;
  /** Action performed on the attribute description */
  action!: AttributeBulkResponse;
  /** Whether the action was successful or not */
  success!: boolean;
  /** The productId of the attribute value */
  productId?: number;
  /** The categoryId of the attribute value */
  categoryId?: number;
  /** The clusterId of the attribute value */
  clusterId?: number;
  /** The companyId of the attribute value */
  companyId?: number;
  /** The contactId of the attribute value */
  contactId?: number;
  /** The customerId of the attribute value */
  customerId?: number;
  constructor(data: Partial<AttributeBulkResponse> = {}) {
    Object.assign(this, data);
  }
}