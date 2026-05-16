import { Contact } from './Contact';
import { ContactActionsResponse } from './ContactActionsResponse';
/**
 Object class for ContactAddToCompaniesResponse
 */
export interface ContactAddToCompaniesResponse {
  /** The contact object */
  contact: Contact;
  /** Output messages about the actions performed. */
  actions: ContactActionsResponse;
}