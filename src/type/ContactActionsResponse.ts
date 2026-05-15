import { ContactActionsData } from './ContactActionsData';
/**
 Object class for ContactActionsResponse
 */
export class ContactActionsResponse {
  /** List of output messaged for actions performed */
  data!: ContactActionsData[];
  /** List of extra messages */
  messages!: string[];
  constructor(data: Partial<ContactActionsResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `data` as ContactActionsData instances (coerced on first access). */
  getData(): ContactActionsData[] {
    if (!this.data) return [];
    this.data = this.data.map((x: any) => x instanceof ContactActionsData ? x : new ContactActionsData(x));
    return this.data;
  }
  /** Returns `messages`. */
  getMessages(): string[] {
    return this.messages;
  }
}