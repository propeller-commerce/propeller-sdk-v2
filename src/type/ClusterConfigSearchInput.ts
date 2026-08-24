/**
 Input object for ClusterConfigSearchInput
 */
export interface ClusterConfigSearchInput {
  /** Search term to match against configuration names */
  term?: string;
  /** Specific configuration names to search for */
  names?: string[];
  /** Page number for pagination */
  page: number;
  /** Number of items per page */
  offset: number;
}
