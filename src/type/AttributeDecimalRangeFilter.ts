import { IAttributeDecimalRangeFilter } from './IAttributeDecimalRangeFilter';
/**
 Object class for AttributeDecimalRangeFilter
 */
export interface AttributeDecimalRangeFilter extends IAttributeDecimalRangeFilter {
  /** Minumum value for this attribute */
  min?: number;
  /** The number of products found with this attribute value.  */
  max?: number;
}