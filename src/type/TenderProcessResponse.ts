/**
 Object class for TenderProcessResponse
 */
export class TenderProcessResponse {
  /** orderId field */
  orderId!: number;
  constructor(data: Partial<TenderProcessResponse> = {}) {
    Object.assign(this, data);
  }
}