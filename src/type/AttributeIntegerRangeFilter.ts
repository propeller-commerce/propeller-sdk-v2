import { IAttributeIntegerRangeFilter } from './IAttributeIntegerRangeFilter';
/**
 Object class for AttributeIntegerRangeFilter
 */
export interface AttributeIntegerRangeFilter extends IAttributeIntegerRangeFilter {
  /** Minumum value for this attribute */
  min?: number;
  /** The number of products found with this attribute value.  */
  max?: number;
}