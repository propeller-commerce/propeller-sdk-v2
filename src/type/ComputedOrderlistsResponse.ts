/**
 Object class for ComputedOrderlistsResponse
 Computed orderlists result containing merged positive and negative product/cluster IDs.
 Positive orderlists are filtered to exclude any IDs that appear in negative orderlists.
 */
export class ComputedOrderlistsResponse {
  /** Merged product IDs from positive orderlists, excluding any IDs from negative orderlists */
  private _positiveOrderlistsProductIds: number[];
  /** Merged product IDs from negative orderlists */
  private _negativeOrderListsProductIds: number[];
  /** Merged cluster IDs from positive orderlists, excluding any IDs from negative orderlists */
  private _positiveOrderListsClusterIds: number[];
  /** Merged cluster IDs from negative orderlists */
  private _negativeOrderListsClusterIds: number[];
  /** Count of positive orderlists that were merged */
  private _positiveOrderlistsCount: number;
  /** Count of negative orderlists that were merged */
  private _negativeOrderlistsCount: number;
  /**
   Creates a new instance of ComputedOrderlistsResponse
   */
  constructor(data: Partial<ComputedOrderlistsResponse> = {}) {
    this._positiveOrderlistsProductIds = data.positiveOrderlistsProductIds!;
    this._negativeOrderListsProductIds = data.negativeOrderListsProductIds!;
    this._positiveOrderListsClusterIds = data.positiveOrderListsClusterIds!;
    this._negativeOrderListsClusterIds = data.negativeOrderListsClusterIds!;
    this._positiveOrderlistsCount = data.positiveOrderlistsCount!;
    this._negativeOrderlistsCount = data.negativeOrderlistsCount!;
  }
  /**
   Merged product IDs from positive orderlists, excluding any IDs from negative orderlists
   */
  get positiveOrderlistsProductIds(): number[] {
    return this._positiveOrderlistsProductIds;
  }
  /**
   Merged product IDs from positive orderlists, excluding any IDs from negative orderlists
   */
  set positiveOrderlistsProductIds(value: number[]) {
    this._positiveOrderlistsProductIds = value;
  }
  /**
   Merged product IDs from negative orderlists
   */
  get negativeOrderListsProductIds(): number[] {
    return this._negativeOrderListsProductIds;
  }
  /**
   Merged product IDs from negative orderlists
   */
  set negativeOrderListsProductIds(value: number[]) {
    this._negativeOrderListsProductIds = value;
  }
  /**
   Merged cluster IDs from positive orderlists, excluding any IDs from negative orderlists
   */
  get positiveOrderListsClusterIds(): number[] {
    return this._positiveOrderListsClusterIds;
  }
  /**
   Merged cluster IDs from positive orderlists, excluding any IDs from negative orderlists
   */
  set positiveOrderListsClusterIds(value: number[]) {
    this._positiveOrderListsClusterIds = value;
  }
  /**
   Merged cluster IDs from negative orderlists
   */
  get negativeOrderListsClusterIds(): number[] {
    return this._negativeOrderListsClusterIds;
  }
  /**
   Merged cluster IDs from negative orderlists
   */
  set negativeOrderListsClusterIds(value: number[]) {
    this._negativeOrderListsClusterIds = value;
  }
  /**
   Count of positive orderlists that were merged
   */
  get positiveOrderlistsCount(): number {
    return this._positiveOrderlistsCount;
  }
  /**
   Count of positive orderlists that were merged
   */
  set positiveOrderlistsCount(value: number) {
    this._positiveOrderlistsCount = value;
  }
  /**
   Count of negative orderlists that were merged
   */
  get negativeOrderlistsCount(): number {
    return this._negativeOrderlistsCount;
  }
  /**
   Count of negative orderlists that were merged
   */
  set negativeOrderlistsCount(value: number) {
    this._negativeOrderlistsCount = value;
  }
}
