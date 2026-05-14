/**
 Object class for BulkResponseData
 */
export interface BulkResponseData {
  /** Number of created items */
  created: number;
  /** Number of updated items */
  updated: number;
  /** Total number of created and updated items */
  total: number;
}