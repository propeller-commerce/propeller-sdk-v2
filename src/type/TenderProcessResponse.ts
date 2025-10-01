/**
 Object class for TenderProcessResponse
 */
export class TenderProcessResponse {
  /** orderId field */
  private _orderId: number;
  /**
   Creates a new instance of TenderProcessResponse
   */
  constructor(data: Partial<TenderProcessResponse> = {}) {
    this._orderId = data.orderId!;
  }
  /**
   orderId field
   */
  get orderId(): number {
    return this._orderId;
  }
  /**
   orderId field
   */
  set orderId(value: number) {
    this._orderId = value;
  }
}