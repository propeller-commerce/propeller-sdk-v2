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

  /** Returns `message`. */
  getMessage(): string {
    return this.message;
  }
  /** Returns `success`. */
  getSuccess(): boolean {
    return this.success;
  }
  /** Returns `productId`. */
  getProductId(): number {
    return this.productId;
  }
  /** Returns `action`. */
  getAction(): string {
    return this.action;
  }
}