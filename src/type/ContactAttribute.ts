import { AttributeValue } from './AttributeValue';
import { AttributeDescription } from './AttributeDescription';
/**
 Object class for ContactAttribute
 */
export class ContactAttribute {
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
  /** The ID of the contact this attribute belongs to */
  contactId!: number;
  constructor(data: Partial<ContactAttribute> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string {
    return this.id;
  }
  /** Returns `value`. */
  getValue(): AttributeValue {
    return this.value;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
  /** Returns `attributeDescription` as a AttributeDescription instance (coerced on first access). */
  getAttributeDescription(): AttributeDescription | undefined {
    if (this.attributeDescription == null) return undefined;
    if (!(this.attributeDescription instanceof AttributeDescription)) {
      this.attributeDescription = new AttributeDescription(this.attributeDescription as any);
    }
    return this.attributeDescription;
  }
  /** Returns `contactId`. */
  getContactId(): number {
    return this.contactId;
  }
}