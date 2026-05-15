import { Tender } from './Tender';
import { TenderResponseData } from './TenderResponseData';
/**
 Object class for TenderResponse
 */
export class TenderResponse {
  /** Tender */
  tender!: Tender;
  /** Tender response data */
  response!: TenderResponseData;
  constructor(data: Partial<TenderResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `tender` as a Tender instance (coerced on first access). */
  getTender(): Tender | undefined {
    if (this.tender == null) return undefined;
    if (!(this.tender instanceof Tender)) {
      this.tender = new Tender(this.tender as any);
    }
    return this.tender;
  }
  /** Returns `response` as a TenderResponseData instance (coerced on first access). */
  getResponse(): TenderResponseData | undefined {
    if (this.response == null) return undefined;
    if (!(this.response instanceof TenderResponseData)) {
      this.response = new TenderResponseData(this.response as any);
    }
    return this.response;
  }
}