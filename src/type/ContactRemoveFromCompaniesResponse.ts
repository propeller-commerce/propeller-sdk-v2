import { Contact } from './Contact';
import { ContactActionsResponse } from './ContactActionsResponse';
/**
 Object class for ContactRemoveFromCompaniesResponse
 */
export interface ContactRemoveFromCompaniesResponse {
  /** The contact object */
  contact: Contact;
  /** Output messages about the actions performed. */
  actions: ContactActionsResponse;
}