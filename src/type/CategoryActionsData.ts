/**
 Object class for CategoryActionsData
 */
export class CategoryActionsData {
  /** Output message response [INFO/WARNING/ERROR] */
  private _message: string;
  /** Success status */
  private _success: boolean;
  /** Product ID the action was performed to */
  private _productId?: number;
  /** Cluster ID the action was performed to */
  private _clusterId?: number;
  /**
   Creates a new instance of CategoryActionsData
   */
  constructor(data: Partial<CategoryActionsData> = {}) {
    this._message = data.message!;
    this._success = data.success!;
    this._productId = data.productId;
    this._clusterId = data.clusterId;
  }
  /**
   Output message response [INFO/WARNING/ERROR]
   */
  get message(): string {
    return this._message;
  }
  /**
   Output message response [INFO/WARNING/ERROR]
   */
  set message(value: string) {
    this._message = value;
  }
  /**
   Success status
   */
  get success(): boolean {
    return this._success;
  }
  /**
   Success status
   */
  set success(value: boolean) {
    this._success = value;
  }
  /**
   Product ID the action was performed to
   */
  get productId(): number | undefined {
    return this._productId;
  }
  /**
   Product ID the action was performed to
   */
  set productId(value: number | undefined) {
    this._productId = value;
  }
  /**
   Cluster ID the action was performed to
   */
  get clusterId(): number | undefined {
    return this._clusterId;
  }
  /**
   Cluster ID the action was performed to
   */
  set clusterId(value: number | undefined) {
    this._clusterId = value;
  }
}