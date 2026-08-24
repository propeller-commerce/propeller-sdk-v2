/**
 Input object for ClusterOptionPaginatedSearchInput
 */
export interface ClusterOptionPaginatedSearchInput {
  /** Search term to match against option names */
  term?: string;
  /** Specific cluster IDs to filter by */
  clusterIds?: number[];
  /** Specific cluster option IDs to filter by */
  clusterOptionIds?: number[];
  /** Filter by required options only */
  isRequired?: boolean;
  /** Include hidden options in results */
  includeHidden: boolean;
  /** Page number for pagination */
  page: number;
  /** Number of items per page */
  offset: number;
}
