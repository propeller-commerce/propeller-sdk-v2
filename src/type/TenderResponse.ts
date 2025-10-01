import { Tender } from './Tender';
import { TenderResponseData } from './TenderResponseData';
/**
 Object class for TenderResponse
 */
export class TenderResponse {
  /** Tender */
  private _tender: Tender;
  /** Tender response data */
  private _response: TenderResponseData;
  /**
   Creates a new instance of TenderResponse
   */
  constructor(data: Partial<TenderResponse> = {}) {
    this._tender = data.tender!;
    this._response = data.response!;
  }
  /**
   Tender
   */
  get tender(): Tender {
    return this._tender;
  }
  /**
   Tender
   */
  set tender(value: Tender) {
    this._tender = value;
  }
  /**
   Tender response data
   */
  get response(): TenderResponseData {
    return this._response;
  }
  /**
   Tender response data
   */
  set response(value: TenderResponseData) {
    this._response = value;
  }
}