import { IAttributeIntegerRangeFilter } from './IAttributeIntegerRangeFilter';
/**
 Object class for AttributeIntegerRangeFilter
 */
export class AttributeIntegerRangeFilter implements IAttributeIntegerRangeFilter {
  /** Minumum value for this attribute */
  min?: number;
  /** The number of products found with this attribute value.  */
  max?: number;
  constructor(data: Partial<AttributeIntegerRangeFilter> = {}) {
    Object.assign(this, data);
  }
}