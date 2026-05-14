/**
 Object class for ClusterProductsActionData
 */
export interface ClusterProductsActionData {
  /** Output message response [INFO/WARNING/ERROR] */
  message: string;
  /** Success status */
  success: boolean;
  /** Product key used for lookup */
  productId: number;
  /** Action performed [move] */
  action: string;
}