import { AttributeType } from '../enum/AttributeType';
import { AttributeDescription } from './AttributeDescription';
import { AttributeTextFilter } from './AttributeTextFilter';
import { AttributeIntegerRangeFilter } from './AttributeIntegerRangeFilter';
import { AttributeDecimalRangeFilter } from './AttributeDecimalRangeFilter';
import { IAttributeFilter } from './IAttributeFilter';
/**
 Object class for AttributeFilter
 */
export class AttributeFilter implements IAttributeFilter {
  /** Attribute filter id */
  id!: string;
  /** attributeDescription field */
  attributeDescription?: AttributeDescription;
  /** The type of the attribute.
        Possible values:
        - text
        - list
        - enum
        - enumlist
        - color
        - date
        - datetime
        - object
        - integer
        - decimal */
  type!: AttributeType;
  /** All available attribute text values within this search result for this particular attribute. */
  textFilters?: AttributeTextFilter[];
  /** Minimum and maximum value range for integer attributes */
  integerRangeFilter?: AttributeIntegerRangeFilter;
  /** Minimum and maximum value range for decimal attributes */
  decimalRangeFilter?: AttributeDecimalRangeFilter;
  constructor(data: Partial<AttributeFilter> = {}) {
    Object.assign(this, data);
  }
}