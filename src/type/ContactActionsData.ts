/**
 Object class for ContactActionsData
 */
export class ContactActionsData {
  /** Output message response [INFO/WARNING/ERROR] */
  private _message: string;
  /** Success status */
  private _success: boolean;
  /** Company ID the action was performed to */
  private _companyId: number;
  /**
   Creates a new instance of ContactActionsData
   */
  constructor(data: Partial<ContactActionsData> = {}) {
    this._message = data.message!;
    this._success = data.success!;
    this._companyId = data.companyId!;
  }
  /**
   Output message response [INFO/WARNING/ERROR]
   */
  get message(): string {
    return this._message;
  }
  /**
   Output message response [INFO/WARNING/ERROR]
   */
  set message(value: string) {
    this._message = value;
  }
  /**
   Success status
   */
  get success(): boolean {
    return this._success;
  }
  /**
   Success status
   */
  set success(value: boolean) {
    this._success = value;
  }
  /**
   Company ID the action was performed to
   */
  get companyId(): number {
    return this._companyId;
  }
  /**
   Company ID the action was performed to
   */
  set companyId(value: number) {
    this._companyId = value;
  }
}