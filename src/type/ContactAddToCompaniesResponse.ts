import { Contact } from './Contact';
import { ContactActionsResponse } from './ContactActionsResponse';
/**
 Object class for ContactAddToCompaniesResponse
 */
export class ContactAddToCompaniesResponse {
  /** The contact object */
  contact!: Contact;
  /** Output messages about the actions performed. */
  actions!: ContactActionsResponse;
  constructor(data: Partial<ContactAddToCompaniesResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `contact` as a Contact instance (coerced on first access). */
  getContact(): Contact | undefined {
    if (this.contact == null) return undefined;
    if (!(this.contact instanceof Contact)) {
      this.contact = new Contact(this.contact as any);
    }
    return this.contact;
  }
  /** Returns `actions` as a ContactActionsResponse instance (coerced on first access). */
  getActions(): ContactActionsResponse | undefined {
    if (this.actions == null) return undefined;
    if (!(this.actions instanceof ContactActionsResponse)) {
      this.actions = new ContactActionsResponse(this.actions as any);
    }
    return this.actions;
  }
}