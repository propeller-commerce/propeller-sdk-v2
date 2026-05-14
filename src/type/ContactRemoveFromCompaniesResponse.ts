import { Contact } from './Contact';
import { ContactActionsResponse } from './ContactActionsResponse';
/**
 Object class for ContactRemoveFromCompaniesResponse
 */
export class ContactRemoveFromCompaniesResponse {
  /** The contact object */
  contact!: Contact;
  /** Output messages about the actions performed. */
  actions!: ContactActionsResponse;
  constructor(data: Partial<ContactRemoveFromCompaniesResponse> = {}) {
    Object.assign(this, data);
  }
}