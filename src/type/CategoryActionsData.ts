/**
 Object class for CategoryActionsData
 */
export class CategoryActionsData {
  /** Output message response [INFO/WARNING/ERROR] */
  message!: string;
  /** Success status */
  success!: boolean;
  /** Product ID the action was performed to */
  productId?: number;
  /** Cluster ID the action was performed to */
  clusterId?: number;
  constructor(data: Partial<CategoryActionsData> = {}) {
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
  getProductId(): number | undefined {
    return this.productId;
  }
  /** Returns `clusterId`. */
  getClusterId(): number | undefined {
    return this.clusterId;
  }
}