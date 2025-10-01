import { AttributeType } from '../enum/AttributeType';
/**
 Base interface for all attribute value types
 */
export interface AttributeValue {
  /** The type of the attribute */
  type: AttributeType;
  /** The actual value */
  value: any;
}