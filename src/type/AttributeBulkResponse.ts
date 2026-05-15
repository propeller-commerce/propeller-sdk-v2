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

  /** Returns `id`. */
  getId(): string | undefined {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `message`. */
  getMessage(): string | undefined {
    return this.message;
  }
  /** Returns `key`. */
  getKey(): string {
    return this.key;
  }
  /** Returns `value`. */
  getValue(): AttributeValue | undefined {
    return this.value;
  }
  /** Returns `action` as a AttributeBulkResponse instance (coerced on first access). */
  getAction(): AttributeBulkResponse | undefined {
    if (this.action == null) return undefined;
    if (!(this.action instanceof AttributeBulkResponse)) {
      this.action = new AttributeBulkResponse(this.action as any);
    }
    return this.action;
  }
  /** Returns `success`. */
  getSuccess(): boolean {
    return this.success;
  }
  /** Returns `productId`. */
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `categoryId`. */
  getCategoryId(): number | undefined {
    return this.categoryId;
  }
  /** Returns `clusterId`. */
  getClusterId(): number | undefined {
    return this.clusterId;
  }
  /** Returns `companyId`. */
  getCompanyId(): number | undefined {
    return this.companyId;
  }
  /** Returns `contactId`. */
  getContactId(): number | undefined {
    return this.contactId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
}