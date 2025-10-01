/**
 Object class for ClusterProductsActionData
 */
export class ClusterProductsActionData {
  /** Output message response [INFO/WARNING/ERROR] */
  private _message: string;
  /** Success status */
  private _success: boolean;
  /** Product key used for lookup */
  private _productId: number;
  /** Action performed [move] */
  private _action: string;
  /**
   Creates a new instance of ClusterProductsActionData
   */
  constructor(data: Partial<ClusterProductsActionData> = {}) {
    this._message = data.message!;
    this._success = data.success!;
    this._productId = data.productId!;
    this._action = data.action!;
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
   Product key used for lookup
   */
  get productId(): number {
    return this._productId;
  }
  /**
   Product key used for lookup
   */
  set productId(value: number) {
    this._productId = value;
  }
  /**
   Action performed [move]
   */
  get action(): string {
    return this._action;
  }
  /**
   Action performed [move]
   */
  set action(value: string) {
    this._action = value;
  }
}