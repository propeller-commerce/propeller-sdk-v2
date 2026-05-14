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
}