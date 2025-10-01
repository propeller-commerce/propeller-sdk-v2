import { CompanyAttributeSearch } from './CompanyAttributeSearch';
/**
 Object class for CompanyContactSearch
 */
export class CompanyContactSearch {
  /** Contact id */
  private _id: number;
  /** First name of the contact. */
  private _firstName: string;
  /** Last name of the contact. */
  private _lastName?: string;
  /** Middle name of the contact. */
  private _middleName?: string;
  /** Phone number of the contact. */
  private _phone?: string;
  /** Mobile number of the contact. */
  private _mobile?: string;
  /** Email of the contact. */
  private _email: string;
  /** International Bank Account Number of the contact */
  private _iban?: string;
  /** Bank Account Number of the contact */
  private _bankAccount?: string;
  /** Bank Identification Code of the contact */
  private _bic?: string;
  /** Contact notes */
  private _notes?: string;
  /** Contact debtor identifier */
  /** @deprecated Deprecated in favor of company debtorId */
  private _debtorId?: string;
  /** Date of birth of the contact. */
  private _dateOfBirth?: string;
  /** Contract creation date */
  private _createdAt: string;
  /** Contact last modified date */
  private _lastModifiedAt: string;
  /** Attributes of the contact */
  private _attributes: CompanyAttributeSearch[];
  /**
   Creates a new instance of CompanyContactSearch
   */
  constructor(data: Partial<CompanyContactSearch> = {}) {
    this._id = data.id!;
    this._firstName = data.firstName!;
    this._lastName = data.lastName;
    this._middleName = data.middleName;
    this._phone = data.phone;
    this._mobile = data.mobile;
    this._email = data.email!;
    this._iban = data.iban;
    this._bankAccount = data.bankAccount;
    this._bic = data.bic;
    this._notes = data.notes;
    this._debtorId = data.debtorId;
    this._dateOfBirth = data.dateOfBirth;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._attributes = data.attributes!;
  }
  /**
   Contact id
   */
  get id(): number {
    return this._id;
  }
  /**
   Contact id
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   First name of the contact.
   */
  get firstName(): string {
    return this._firstName;
  }
  /**
   First name of the contact.
   */
  set firstName(value: string) {
    this._firstName = value;
  }
  /**
   Last name of the contact.
   */
  get lastName(): string | undefined {
    return this._lastName;
  }
  /**
   Last name of the contact.
   */
  set lastName(value: string | undefined) {
    this._lastName = value;
  }
  /**
   Middle name of the contact.
   */
  get middleName(): string | undefined {
    return this._middleName;
  }
  /**
   Middle name of the contact.
   */
  set middleName(value: string | undefined) {
    this._middleName = value;
  }
  /**
   Phone number of the contact.
   */
  get phone(): string | undefined {
    return this._phone;
  }
  /**
   Phone number of the contact.
   */
  set phone(value: string | undefined) {
    this._phone = value;
  }
  /**
   Mobile number of the contact.
   */
  get mobile(): string | undefined {
    return this._mobile;
  }
  /**
   Mobile number of the contact.
   */
  set mobile(value: string | undefined) {
    this._mobile = value;
  }
  /**
   Email of the contact.
   */
  get email(): string {
    return this._email;
  }
  /**
   Email of the contact.
   */
  set email(value: string) {
    this._email = value;
  }
  /**
   International Bank Account Number of the contact
   */
  get iban(): string | undefined {
    return this._iban;
  }
  /**
   International Bank Account Number of the contact
   */
  set iban(value: string | undefined) {
    this._iban = value;
  }
  /**
   Bank Account Number of the contact
   */
  get bankAccount(): string | undefined {
    return this._bankAccount;
  }
  /**
   Bank Account Number of the contact
   */
  set bankAccount(value: string | undefined) {
    this._bankAccount = value;
  }
  /**
   Bank Identification Code of the contact
   */
  get bic(): string | undefined {
    return this._bic;
  }
  /**
   Bank Identification Code of the contact
   */
  set bic(value: string | undefined) {
    this._bic = value;
  }
  /**
   Contact notes
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Contact notes
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   Contact debtor identifier
   */
  get debtorId(): string | undefined {
    return this._debtorId;
  }
  /**
   Contact debtor identifier
   */
  set debtorId(value: string | undefined) {
    this._debtorId = value;
  }
  /**
   Date of birth of the contact.
   */
  get dateOfBirth(): string | undefined {
    return this._dateOfBirth;
  }
  /**
   Date of birth of the contact.
   */
  set dateOfBirth(value: string | undefined) {
    this._dateOfBirth = value;
  }
  /**
   Contract creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Contract creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Contact last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Contact last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Attributes of the contact
   */
  get attributes(): CompanyAttributeSearch[] {
    return this._attributes;
  }
  /**
   Attributes of the contact
   */
  set attributes(value: CompanyAttributeSearch[]) {
    this._attributes = value;
  }
}