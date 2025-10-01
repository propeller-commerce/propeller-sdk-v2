/**
 Interface for text filters on attributes
 */
export interface IAttributeTextFilter {
  /** Text value to filter by */
  value?: string;
  /** Whether to use case-sensitive matching */
  caseSensitive?: boolean;
  /** Whether to use exact matching or partial matching */
  exactMatch?: boolean;
}