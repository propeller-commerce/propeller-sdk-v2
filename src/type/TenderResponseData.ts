/**
 Object class for TenderResponseData
 */
export class TenderResponseData {
  /** Response data */
  private _data: any;
  /** Error */
  private _error: boolean;
  /** Response message(s) */
  private _messages?: string[];
  /**
   Creates a new instance of TenderResponseData
   */
  constructor(data: Partial<TenderResponseData> = {}) {
    this._data = data.data!;
    this._error = data.error!;
    this._messages = data.messages;
  }
  /**
   Response data
   */
  get data(): any {
    return this._data;
  }
  /**
   Response data
   */
  set data(value: any) {
    this._data = value;
  }
  /**
   Error
   */
  get error(): boolean {
    return this._error;
  }
  /**
   Error
   */
  set error(value: boolean) {
    this._error = value;
  }
  /**
   Response message(s)
   */
  get messages(): string[] | undefined {
    return this._messages;
  }
  /**
   Response message(s)
   */
  set messages(value: string[] | undefined) {
    this._messages = value;
  }
}