import { AttributeValue } from './AttributeValue';
import { AttributeDescription } from './AttributeDescription';
/**
 Object class for ClusterAttribute
 */
export class ClusterAttribute {
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
  /** The ID of the cluster this attribute belongs to */
  clusterId!: number;
  constructor(data: Partial<ClusterAttribute> = {}) {
    Object.assign(this, data);
  }
}