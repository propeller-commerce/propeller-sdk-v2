/**
 Object class for EmailContact
 */
export class EmailContact {
  /** Email address of the contact */
  private _email?: string;
  /** Name of the contact */
  private _name?: string;
  /** Email address and name are taken from the the contact with the given contactId */
  private _contactId?: number;
  /** Email address and name are taken from the the contact with the given customerId */
  private _customerId?: number;
  /** Email address and name are taken from the the adminUser with the given adminUserId */
  private _adminUserId?: number;
  /**
   Creates a new instance of EmailContact
   */
  constructor(data: Partial<EmailContact> = {}) {
    this._email = data.email;
    this._name = data.name;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
    this._adminUserId = data.adminUserId;
  }
  /**
   Email address of the contact
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   Email address of the contact
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   Name of the contact
   */
  get name(): string | undefined {
    return this._name;
  }
  /**
   Name of the contact
   */
  set name(value: string | undefined) {
    this._name = value;
  }
  /**
   Email address and name are taken from the the contact with the given contactId
   */
  get contactId(): number | undefined {
    return this._contactId;
  }
  /**
   Email address and name are taken from the the contact with the given contactId
   */
  set contactId(value: number | undefined) {
    this._contactId = value;
  }
  /**
   Email address and name are taken from the the contact with the given customerId
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   Email address and name are taken from the the contact with the given customerId
   */
  set customerId(value: number | undefined) {
    this._customerId = value;
  }
  /**
   Email address and name are taken from the the adminUser with the given adminUserId
   */
  get adminUserId(): number | undefined {
    return this._adminUserId;
  }
  /**
   Email address and name are taken from the the adminUser with the given adminUserId
   */
  set adminUserId(value: number | undefined) {
    this._adminUserId = value;
  }
}