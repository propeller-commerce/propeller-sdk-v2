import { Tender } from './Tender';
import { TenderResponseData } from './TenderResponseData';
/**
 Object class for TenderResponse
 */
export interface TenderResponse {
  /** Tender */
  tender: Tender;
  /** Tender response data */
  response: TenderResponseData;
}