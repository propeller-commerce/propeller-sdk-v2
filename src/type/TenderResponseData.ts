/**
 Object class for TenderResponseData
 */
export class TenderResponseData {
  /** Response data */
  data!: any;
  /** Error */
  error!: boolean;
  /** Response message(s) */
  messages?: string[];
  constructor(data: Partial<TenderResponseData> = {}) {
    Object.assign(this, data);
  }
}