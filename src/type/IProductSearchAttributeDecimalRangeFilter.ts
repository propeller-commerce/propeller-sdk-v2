/**
 Object class for IProductSearchAttributeDecimalRangeFilter
 */
export interface IProductSearchAttributeDecimalRangeFilter {
  /** Minimum decimal value found for this attribute in current results.

The lowest decimal value present in the search results for this attribute, used as the lower bound for precise range filtering controls. */
  min?: number;
  /** Maximum decimal value found for this attribute in current results.

The highest decimal value present in the search results for this attribute, used as the upper bound for precise range filtering controls. */
  max?: number;
}
