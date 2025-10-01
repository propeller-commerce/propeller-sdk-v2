import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { AttributeResultResponse } from './AttributeResultResponse';
import { MagicToken } from './MagicToken';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Pricesheet } from './Pricesheet';
import { Usergroup } from './Usergroup';
import { Source } from './Source';
import { CustomerFieldName } from '../enum/CustomerFieldName';
import { IBaseUser } from './IBaseUser';
/**
 Object class for Customer
 */
export class Customer {
  /** The id of the customer. */
  private _customerId: number;
  /** addresses field */
  private _addresses: Address[];
  /** Lists attributes for this customer based on the search input. */
  private _attributes?: AttributeResultResponse;
  /** Get all magic tokens for a customer */
  private _magicTokens: MagicToken[];
  /** favoriteLists field */
  private _favoriteLists?: FavoriteListsResponse;
  /** orderlist field */
  private _orderlist?: OrderlistsResponse;
  /** orderlists field */
  private _orderlists: OrderlistsResponse;
  /** pricesheets field */
  private _pricesheets?: Pricesheet[];
  /** The unique identifier of the user. */
  private _userId?: number;
  /** debtorId field */
  private _debtorId?: string;
  /** The gender of the user. */
  private _gender?: Gender;
  /** The first name of the user. */
  private _firstName: string;
  /** The middle name of the user. */
  private _middleName?: string;
  /** The last name of the user. */
  private _lastName: string;
  /** The phone number of the user. */
  private _phone?: string;
  /** The mobile number of the user. */
  private _mobile?: string;
  /** The email of the user. */
  private _email: string;
  /** The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet. */
  private _login?: string;
  /** The International Bank Account Number of the user */
  private _iban?: string;
  /** The Bank Account Number of the user */
  private _bankAccount?: string;
  /** The Bank Identification Code of the user */
  private _bic?: string;
  /** notes field */
  private _notes?: string;
  /** The primary language of the user */
  private _primaryLanguage?: string;
  /** The expiration date of the contact. After this date expires contact will be disabled. */
  private _expires?: string;
  /** External ID */
  private _externalId?: string;
  /** The date of birth of the contact. */
  private _dateOfBirth?: string;
  /** mailingList field */
  private _mailingList?: YesNo;
  /** isLoggedIn field */
  private _isLoggedIn?: boolean;
  /** createdAt field */
  private _createdAt?: string;
  /** lastModifiedAt field */
  private _lastModifiedAt?: string;
  /** The usergroup id of parent usergroup. */
  private _parentUsergroupId: number;
  /** usergroup field */
  /** @deprecated This field is deprecated and will be removed in a future */
  private _usergroup?: Usergroup;
  /** sources field */
  private _sources: Source[];
  /** usergroupPath field */
  private _usergroupPath: Usergroup[];
  /**
   Creates a new instance of Customer
   */
  constructor(data: Partial<Customer> = {}) {
    this._customerId = data.customerId!;
    this._addresses = data.addresses!;
    this._attributes = data.attributes;
    this._magicTokens = data.magicTokens!;
    this._favoriteLists = data.favoriteLists;
    this._orderlist = data.orderlist;
    this._orderlists = data.orderlists!;
    this._pricesheets = data.pricesheets;
    this._userId = data.userId;
    this._debtorId = data.debtorId;
    this._gender = data.gender;
    this._firstName = data.firstName!;
    this._middleName = data.middleName;
    this._lastName = data.lastName!;
    this._phone = data.phone;
    this._mobile = data.mobile;
    this._email = data.email!;
    this._login = data.login;
    this._iban = data.iban;
    this._bankAccount = data.bankAccount;
    this._bic = data.bic;
    this._notes = data.notes;
    this._primaryLanguage = data.primaryLanguage;
    this._expires = data.expires;
    this._externalId = data.externalId;
    this._dateOfBirth = data.dateOfBirth;
    this._mailingList = data.mailingList;
    this._isLoggedIn = data.isLoggedIn;
    this._createdAt = data.createdAt;
    this._lastModifiedAt = data.lastModifiedAt;
    this._parentUsergroupId = data.parentUsergroupId!;
    this._usergroup = data.usergroup;
    this._sources = data.sources!;
    this._usergroupPath = data.usergroupPath!;
  }
  /**
   The id of the customer.
   */
  get customerId(): number {
    return this._customerId;
  }
  /**
   The id of the customer.
   */
  set customerId(value: number) {
    this._customerId = value;
  }
  /**
   addresses field
   */
  get addresses(): Address[] {
    return this._addresses;
  }
  /**
   addresses field
   */
  set addresses(value: Address[]) {
    this._addresses = value;
  }
  /**
   Lists attributes for this customer based on the search input.
   */
  get attributes(): AttributeResultResponse | undefined {
    return this._attributes;
  }
  /**
   Lists attributes for this customer based on the search input.
   */
  set attributes(value: AttributeResultResponse | undefined) {
    this._attributes = value;
  }
  /**
   Get all magic tokens for a customer
   */
  get magicTokens(): MagicToken[] {
    return this._magicTokens;
  }
  /**
   Get all magic tokens for a customer
   */
  set magicTokens(value: MagicToken[]) {
    this._magicTokens = value;
  }
  /**
   favoriteLists field
   */
  get favoriteLists(): FavoriteListsResponse | undefined {
    return this._favoriteLists;
  }
  /**
   favoriteLists field
   */
  set favoriteLists(value: FavoriteListsResponse | undefined) {
    this._favoriteLists = value;
  }
  /**
   orderlist field
   */
  get orderlist(): OrderlistsResponse | undefined {
    return this._orderlist;
  }
  /**
   orderlist field
   */
  set orderlist(value: OrderlistsResponse | undefined) {
    this._orderlist = value;
  }
  /**
   orderlists field
   */
  get orderlists(): OrderlistsResponse {
    return this._orderlists;
  }
  /**
   orderlists field
   */
  set orderlists(value: OrderlistsResponse) {
    this._orderlists = value;
  }
  /**
   pricesheets field
   */
  get pricesheets(): Pricesheet[] | undefined {
    return this._pricesheets;
  }
  /**
   pricesheets field
   */
  set pricesheets(value: Pricesheet[] | undefined) {
    this._pricesheets = value;
  }
  /**
   The unique identifier of the user.
   */
  get userId(): number | undefined {
    return this._userId;
  }
  /**
   The unique identifier of the user.
   */
  set userId(value: number | undefined) {
    this._userId = value;
  }
  /**
   debtorId field
   */
  get debtorId(): string | undefined {
    return this._debtorId;
  }
  /**
   debtorId field
   */
  set debtorId(value: string | undefined) {
    this._debtorId = value;
  }
  /**
   The gender of the user.
   */
  get gender(): Gender | undefined {
    return this._gender;
  }
  /**
   The gender of the user.
   */
  set gender(value: Gender | undefined) {
    this._gender = value;
  }
  /**
   The first name of the user.
   */
  get firstName(): string {
    return this._firstName;
  }
  /**
   The first name of the user.
   */
  set firstName(value: string) {
    this._firstName = value;
  }
  /**
   The middle name of the user.
   */
  get middleName(): string | undefined {
    return this._middleName;
  }
  /**
   The middle name of the user.
   */
  set middleName(value: string | undefined) {
    this._middleName = value;
  }
  /**
   The last name of the user.
   */
  get lastName(): string {
    return this._lastName;
  }
  /**
   The last name of the user.
   */
  set lastName(value: string) {
    this._lastName = value;
  }
  /**
   The phone number of the user.
   */
  get phone(): string | undefined {
    return this._phone;
  }
  /**
   The phone number of the user.
   */
  set phone(value: string | undefined) {
    this._phone = value;
  }
  /**
   The mobile number of the user.
   */
  get mobile(): string | undefined {
    return this._mobile;
  }
  /**
   The mobile number of the user.
   */
  set mobile(value: string | undefined) {
    this._mobile = value;
  }
  /**
   The email of the user.
   */
  get email(): string {
    return this._email;
  }
  /**
   The email of the user.
   */
  set email(value: string) {
    this._email = value;
  }
  /**
   The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet.
   */
  get login(): string | undefined {
    return this._login;
  }
  /**
   The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet.
   */
  set login(value: string | undefined) {
    this._login = value;
  }
  /**
   The International Bank Account Number of the user
   */
  get iban(): string | undefined {
    return this._iban;
  }
  /**
   The International Bank Account Number of the user
   */
  set iban(value: string | undefined) {
    this._iban = value;
  }
  /**
   The Bank Account Number of the user
   */
  get bankAccount(): string | undefined {
    return this._bankAccount;
  }
  /**
   The Bank Account Number of the user
   */
  set bankAccount(value: string | undefined) {
    this._bankAccount = value;
  }
  /**
   The Bank Identification Code of the user
   */
  get bic(): string | undefined {
    return this._bic;
  }
  /**
   The Bank Identification Code of the user
   */
  set bic(value: string | undefined) {
    this._bic = value;
  }
  /**
   notes field
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   notes field
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   The primary language of the user
   */
  get primaryLanguage(): string | undefined {
    return this._primaryLanguage;
  }
  /**
   The primary language of the user
   */
  set primaryLanguage(value: string | undefined) {
    this._primaryLanguage = value;
  }
  /**
   The expiration date of the contact. After this date expires contact will be disabled.
   */
  get expires(): string | undefined {
    return this._expires;
  }
  /**
   The expiration date of the contact. After this date expires contact will be disabled.
   */
  set expires(value: string | undefined) {
    this._expires = value;
  }
  /**
   External ID
   */
  get externalId(): string | undefined {
    return this._externalId;
  }
  /**
   External ID
   */
  set externalId(value: string | undefined) {
    this._externalId = value;
  }
  /**
   The date of birth of the contact.
   */
  get dateOfBirth(): string | undefined {
    return this._dateOfBirth;
  }
  /**
   The date of birth of the contact.
   */
  set dateOfBirth(value: string | undefined) {
    this._dateOfBirth = value;
  }
  /**
   mailingList field
   */
  get mailingList(): YesNo | undefined {
    return this._mailingList;
  }
  /**
   mailingList field
   */
  set mailingList(value: YesNo | undefined) {
    this._mailingList = value;
  }
  /**
   isLoggedIn field
   */
  get isLoggedIn(): boolean | undefined {
    return this._isLoggedIn;
  }
  /**
   isLoggedIn field
   */
  set isLoggedIn(value: boolean | undefined) {
    this._isLoggedIn = value;
  }
  /**
   createdAt field
   */
  get createdAt(): string | undefined {
    return this._createdAt;
  }
  /**
   createdAt field
   */
  set createdAt(value: string | undefined) {
    this._createdAt = value;
  }
  /**
   lastModifiedAt field
   */
  get lastModifiedAt(): string | undefined {
    return this._lastModifiedAt;
  }
  /**
   lastModifiedAt field
   */
  set lastModifiedAt(value: string | undefined) {
    this._lastModifiedAt = value;
  }
  /**
   The usergroup id of parent usergroup.
   */
  get parentUsergroupId(): number {
    return this._parentUsergroupId;
  }
  /**
   The usergroup id of parent usergroup.
   */
  set parentUsergroupId(value: number) {
    this._parentUsergroupId = value;
  }
  /**
   usergroup field
   */
  get usergroup(): Usergroup | undefined {
    return this._usergroup;
  }
  /**
   usergroup field
   */
  set usergroup(value: Usergroup | undefined) {
    this._usergroup = value;
  }
  /**
   sources field
   */
  get sources(): Source[] {
    return this._sources;
  }
  /**
   sources field
   */
  set sources(value: Source[]) {
    this._sources = value;
  }
  /**
   usergroupPath field
   */
  get usergroupPath(): Usergroup[] {
    return this._usergroupPath;
  }
  /**
   usergroupPath field
   */
  set usergroupPath(value: Usergroup[]) {
    this._usergroupPath = value;
  }
}