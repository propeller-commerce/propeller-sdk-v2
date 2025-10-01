import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Object class for MagicToken
 */
export class MagicToken {
  /** Magic token primary identifier */
  private _id: string;
  /** Identifier of the associated contact, use either contactId or customerId */
  private _contactId?: number;
  /** Identifier of the associated customer, use either customerId or contactId */
  private _customerId?: number;
  /** Expiration date and time of the magic token */
  private _expiresAt?: string;
  /** Last accessed date and time of the magic token */
  private _lastAccessedAt?: string;
  /** Number of failed login attempts using the magic token */
  private _failedLogins?: number;
  /** Number of successful login attempts using the magic token */
  private _successfulLogins?: number;
  /** Indicates if the magic token is for one-time use only */
  private _oneTimeUse: boolean;
  /** Additional information or metadata associated with the magic token */
  private _extra?: string[];
  /** contact field */
  private _contact?: Contact;
  /** customer field */
  private _customer?: Customer;
  /**
   Creates a new instance of MagicToken
   */
  constructor(data: Partial<MagicToken> = {}) {
    this._id = data.id!;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
    this._expiresAt = data.expiresAt;
    this._lastAccessedAt = data.lastAccessedAt;
    this._failedLogins = data.failedLogins;
    this._successfulLogins = data.successfulLogins;
    this._oneTimeUse = data.oneTimeUse!;
    this._extra = data.extra;
    this._contact = data.contact;
    this._customer = data.customer;
  }
  /**
   Magic token primary identifier
   */
  get id(): string {
    return this._id;
  }
  /**
   Magic token primary identifier
   */
  set id(value: string) {
    this._id = value;
  }
  /**
   Identifier of the associated contact, use either contactId or customerId
   */
  get contactId(): number | undefined {
    return this._contactId;
  }
  /**
   Identifier of the associated contact, use either contactId or customerId
   */
  set contactId(value: number | undefined) {
    this._contactId = value;
  }
  /**
   Identifier of the associated customer, use either customerId or contactId
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   Identifier of the associated customer, use either customerId or contactId
   */
  set customerId(value: number | undefined) {
    this._customerId = value;
  }
  /**
   Expiration date and time of the magic token
   */
  get expiresAt(): string | undefined {
    return this._expiresAt;
  }
  /**
   Expiration date and time of the magic token
   */
  set expiresAt(value: string | undefined) {
    this._expiresAt = value;
  }
  /**
   Last accessed date and time of the magic token
   */
  get lastAccessedAt(): string | undefined {
    return this._lastAccessedAt;
  }
  /**
   Last accessed date and time of the magic token
   */
  set lastAccessedAt(value: string | undefined) {
    this._lastAccessedAt = value;
  }
  /**
   Number of failed login attempts using the magic token
   */
  get failedLogins(): number | undefined {
    return this._failedLogins;
  }
  /**
   Number of failed login attempts using the magic token
   */
  set failedLogins(value: number | undefined) {
    this._failedLogins = value;
  }
  /**
   Number of successful login attempts using the magic token
   */
  get successfulLogins(): number | undefined {
    return this._successfulLogins;
  }
  /**
   Number of successful login attempts using the magic token
   */
  set successfulLogins(value: number | undefined) {
    this._successfulLogins = value;
  }
  /**
   Indicates if the magic token is for one-time use only
   */
  get oneTimeUse(): boolean {
    return this._oneTimeUse;
  }
  /**
   Indicates if the magic token is for one-time use only
   */
  set oneTimeUse(value: boolean) {
    this._oneTimeUse = value;
  }
  /**
   Additional information or metadata associated with the magic token
   */
  get extra(): string[] | undefined {
    return this._extra;
  }
  /**
   Additional information or metadata associated with the magic token
   */
  set extra(value: string[] | undefined) {
    this._extra = value;
  }
  /**
   contact field
   */
  get contact(): Contact | undefined {
    return this._contact;
  }
  /**
   contact field
   */
  set contact(value: Contact | undefined) {
    this._contact = value;
  }
  /**
   customer field
   */
  get customer(): Customer | undefined {
    return this._customer;
  }
  /**
   customer field
   */
  set customer(value: Customer | undefined) {
    this._customer = value;
  }
}