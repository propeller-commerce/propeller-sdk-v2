/**
 Object class for ProductSearchAttributeIntegerRangeFilter
 */
export interface ProductSearchAttributeIntegerRangeFilter {
  /** Minimum integer value found for this attribute in current results.

The lowest integer value present in the search results for this attribute, used as the lower bound for range filtering controls. */
  min?: number;
  /** Maximum integer value found for this attribute in current results.

The highest integer value present in the search results for this attribute, used as the upper bound for range filtering controls. */
  max?: number;
}
