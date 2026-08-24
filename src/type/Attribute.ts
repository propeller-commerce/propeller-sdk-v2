import { AttributeValue } from './AttributeValue';
import { AttributeDescription } from './AttributeDescription';
import { AttributeType } from '../enum/AttributeType';
/**
 Base interface for attribute entities
 */
export interface Attribute {
  /** Attribute identifier */
  id: string;
/** Attribute value */
  value?: any;
  /** The date when the attribute was created */
  createdAt: string;
  /** The date when the attribute was last modified */
  lastModifiedAt: string;
  /** The ID of the user that created the attribute */
  createdBy?: number;
  /** The ID of the user that last modified the attribute */
  lastModifiedBy?: number;
  /** attributeDescription field */
  attributeDescription?: AttributeDescription;
}