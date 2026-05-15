import { IAttributeTextFilter } from './IAttributeTextFilter';
/**
 Object class for AttributeTextFilter
 */
export class AttributeTextFilter implements IAttributeTextFilter {
  /** The value of the attribute */
  value!: string;
  /** The number of products found with this attribute value with all attributes applied.     */
  count!: number;
  /** The number of products found with this attribute value  without any attribute filters applied.  */
  countTotal?: number;
  /** The number of products found with this attribute value without all attributes except it's own applied.
    This can be used to display the active filter's totals  */
  countActive?: number;
  /** Indicates whehter this values is currently selected */
  isSelected!: boolean;
  constructor(data: Partial<AttributeTextFilter> = {}) {
    Object.assign(this, data);
  }
}