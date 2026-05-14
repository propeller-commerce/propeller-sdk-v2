import { IAttributeDecimalRangeFilter } from './IAttributeDecimalRangeFilter';
/**
 Object class for AttributeDecimalRangeFilter
 */
export class AttributeDecimalRangeFilter implements IAttributeDecimalRangeFilter {
  /** Minumum value for this attribute */
  min?: number;
  /** The number of products found with this attribute value.  */
  max?: number;
  constructor(data: Partial<AttributeDecimalRangeFilter> = {}) {
    Object.assign(this, data);
  }
}