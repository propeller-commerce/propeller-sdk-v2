import { IAttributeIntegerRangeFilter } from './IAttributeIntegerRangeFilter';
/**
 Object class for AttributeIntegerRangeFilter
 */
export class AttributeIntegerRangeFilter implements IAttributeIntegerRangeFilter {
  /** Minumum value for this attribute */
  private _min?: number;
  /** The number of products found with this attribute value.  */
  private _max?: number;
  /**
   Creates a new instance of AttributeIntegerRangeFilter
   */
  constructor(data: Partial<AttributeIntegerRangeFilter> = {}) {
    this._min = data.min;
    this._max = data.max;
  }
  /**
   Minumum value for this attribute
   */
  get min(): number | undefined {
    return this._min;
  }
  /**
   Minumum value for this attribute
   */
  set min(value: number | undefined) {
    this._min = value;
  }
  /**
   The number of products found with this attribute value.
   */
  get max(): number | undefined {
    return this._max;
  }
  /**
   The number of products found with this attribute value.
   */
  set max(value: number | undefined) {
    this._max = value;
  }
}