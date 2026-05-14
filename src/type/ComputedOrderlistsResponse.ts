/**
 Object class for ComputedOrderlistsResponse
 Computed orderlists result containing merged positive and negative product/cluster IDs.
 Positive orderlists are filtered to exclude any IDs that appear in negative orderlists.
 */
export interface ComputedOrderlistsResponse {
  /** Merged product IDs from positive orderlists, excluding any IDs from negative orderlists */
  positiveOrderlistsProductIds: number[];
  /** Merged product IDs from negative orderlists */
  negativeOrderListsProductIds: number[];
  /** Merged cluster IDs from positive orderlists, excluding any IDs from negative orderlists */
  positiveOrderListsClusterIds: number[];
  /** Merged cluster IDs from negative orderlists */
  negativeOrderListsClusterIds: number[];
  /** Count of positive orderlists that were merged */
  positiveOrderlistsCount: number;
  /** Count of negative orderlists that were merged */
  negativeOrderlistsCount: number;
}
