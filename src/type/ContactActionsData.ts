/**
 Object class for ContactActionsData
 */
export class ContactActionsData {
  /** Output message response [INFO/WARNING/ERROR] */
  message!: string;
  /** Success status */
  success!: boolean;
  /** Company ID the action was performed to */
  companyId!: number;
  constructor(data: Partial<ContactActionsData> = {}) {
    Object.assign(this, data);
  }

  /** Returns `message`. */
  getMessage(): string {
    return this.message;
  }
  /** Returns `success`. */
  getSuccess(): boolean {
    return this.success;
  }
  /** Returns `companyId`. */
  getCompanyId(): number {
    return this.companyId;
  }
}