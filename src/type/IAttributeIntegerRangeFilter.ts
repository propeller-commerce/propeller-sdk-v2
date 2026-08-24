/**
 Interface for integer range filters on attributes
 */
export interface IAttributeIntegerRangeFilter {
  /** Minimum value for the range */
  min?: number;
  /** Maximum value for the range */
  max?: number;
}