import { AttributeType } from '../enum/AttributeType';
import { IProductSearchAttributeDecimalRangeFilter } from './IProductSearchAttributeDecimalRangeFilter';
import { IProductSearchAttributeIntegerRangeFilter } from './IProductSearchAttributeIntegerRangeFilter';
import { IProductSearchAttributeTextFilter } from './IProductSearchAttributeTextFilter';
/**
 Object class for ProductSearchAttributeFilter
 */
export interface ProductSearchAttributeFilter {
  /** Unique identifier of the product attribute.

System-generated ID that uniquely identifies this attribute across the catalog, used for referencing the attribute in filters and search operations. */
  id: string;
  /** Data type of the attribute values.

Specifies the format for attribute values, determining how the attribute should be processed, displayed, and filtered in search interfaces. */
  type?: AttributeType;
  /** Available text-based filter values for this attribute.

Collection of distinct text values found in the current search results for this attribute, along with their occurrence counts. Used for building checkbox or list-based filters in search interfaces. */
  textFilters?: IProductSearchAttributeTextFilter[];
  /** Numeric range boundaries for integer-type attributes.

Minimum and maximum integer values found in the current search results for this attribute, used for building range slider or numeric input filters. */
  integerRangeFilter?: IProductSearchAttributeIntegerRangeFilter;
  /** Numeric range boundaries for decimal-type attributes.

Minimum and maximum decimal values found in the current search results for this attribute, used for building precise range filters for measurements and prices. */
  decimalRangeFilter?: IProductSearchAttributeDecimalRangeFilter;
}
