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

  /** Returns `data`. */
  getData(): any {
    return this.data;
  }
  /** Returns `error`. */
  getError(): boolean {
    return this.error;
  }
  /** Returns `messages`. */
  getMessages(): string[] | undefined {
    return this.messages;
  }
}