import { Contact } from './Contact';
import { ContactActionsResponse } from './ContactActionsResponse';
/**
 Object class for ContactRemoveFromCompaniesResponse
 */
export class ContactRemoveFromCompaniesResponse {
  /** The contact object */
  private _contact: Contact;
  /** Output messages about the actions performed. */
  private _actions: ContactActionsResponse;
  /**
   Creates a new instance of ContactRemoveFromCompaniesResponse
   */
  constructor(data: Partial<ContactRemoveFromCompaniesResponse> = {}) {
    this._contact = data.contact!;
    this._actions = data.actions!;
  }
  /**
   The contact object
   */
  get contact(): Contact {
    return this._contact;
  }
  /**
   The contact object
   */
  set contact(value: Contact) {
    this._contact = value;
  }
  /**
   Output messages about the actions performed.
   */
  get actions(): ContactActionsResponse {
    return this._actions;
  }
  /**
   Output messages about the actions performed.
   */
  set actions(value: ContactActionsResponse) {
    this._actions = value;
  }
}