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
}