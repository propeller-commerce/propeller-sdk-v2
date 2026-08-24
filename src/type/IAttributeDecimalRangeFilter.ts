/**
 Interface for decimal range filters on attributes
 */
export interface IAttributeDecimalRangeFilter {
  /** Minimum value for the range */
  min?: number;
  /** Maximum value for the range */
  max?: number;
}