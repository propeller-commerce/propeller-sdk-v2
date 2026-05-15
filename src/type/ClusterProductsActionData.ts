/**
 Object class for ClusterProductsActionData
 */
export class ClusterProductsActionData {
  /** Output message response [INFO/WARNING/ERROR] */
  message!: string;
  /** Success status */
  success!: boolean;
  /** Product key used for lookup */
  productId!: number;
  /** Action performed [move] */
  action!: string;
  constructor(data: Partial<ClusterProductsActionData> = {}) {
    Object.assign(this, data);
  }
}