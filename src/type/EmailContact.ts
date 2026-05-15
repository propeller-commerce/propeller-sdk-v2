/**
 Object class for EmailContact
 */
export class EmailContact {
  /** Email address of the contact */
  email?: string;
  /** Name of the contact */
  name?: string;
  /** Email address and name are taken from the the contact with the given contactId */
  contactId?: number;
  /** Email address and name are taken from the the contact with the given customerId */
  customerId?: number;
  /** Email address and name are taken from the the adminUser with the given adminUserId */
  adminUserId?: number;
  constructor(data: Partial<EmailContact> = {}) {
    Object.assign(this, data);
  }

  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `name`. */
  getName(): string | undefined {
    return this.name;
  }
  /** Returns `contactId`. */
  getContactId(): number | undefined {
    return this.contactId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
  /** Returns `adminUserId`. */
  getAdminUserId(): number | undefined {
    return this.adminUserId;
  }
}