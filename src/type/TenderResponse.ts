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
}