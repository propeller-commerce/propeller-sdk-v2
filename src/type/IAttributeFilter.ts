import { AttributeType } from '../enum/AttributeType';
import { AttributeTextFilter } from './AttributeTextFilter';
import { AttributeIntegerRangeFilter } from './AttributeIntegerRangeFilter';
import { AttributeDecimalRangeFilter } from './AttributeDecimalRangeFilter';
/**
 Base interface for attribute filters
 */
export interface IAttributeFilter {
  /** The ID of the attributeDescription this attribute filter is for */
  id: string;
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
  type: AttributeType;
  /** All available attribute text values within this search result for this particular attribute. */
  textFilters?: AttributeTextFilter[];
  /** Minimum and maximum value range for integer attributes */
  integerRangeFilter?: AttributeIntegerRangeFilter;
  /** Minimum and maximum value range for decimal attributes */
  decimalRangeFilter?: AttributeDecimalRangeFilter;
  /** Whether this filter is enabled */
  enabled?: boolean;
}