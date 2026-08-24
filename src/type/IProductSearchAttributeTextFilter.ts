/**
 Object class for IProductSearchAttributeTextFilter
 */
export interface IProductSearchAttributeTextFilter {
  /** Attribute value text for filtering.

The actual text value of the attribute that customers can select to filter products. This is the display value shown in filter interfaces. */
  value: string;
  /** Number of products matching this value with current filters applied.

Count of products that have this attribute value and also match all currently applied search filters and criteria. Used for showing relevant filter options. */
  count: number;
  /** Total number of products with this value across all results.

Count of products that have this attribute value without any filters applied, representing the complete availability of this value in the catalog. */
  countTotal?: number;
  /** Number of products with this value excluding other attribute filters.

Count of products that have this attribute value with all other attribute filters removed but keeping search terms and category filters. Used for showing filter impact. */
  countActive?: number;
  /** Selection status of this attribute value in current search.

Indicates whether this attribute value is currently selected as an active filter in the customer's search criteria. */
  isSelected: boolean;
}
