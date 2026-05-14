/**
 Object class for TenderResponseData
 */
export interface TenderResponseData {
  /** Response data */
  data: any;
  /** Error */
  error: boolean;
  /** Response message(s) */
  messages?: string[];
}