import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { AttributeResultResponse } from './AttributeResultResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Pricesheet } from './Pricesheet';
import { ContactsResponse } from './ContactsResponse';
import { IBaseUser } from './IBaseUser';
import { Source } from './Source';
import { PurchaseAuthorizationConfigResponse } from './PurchaseAuthorizationConfigResponse';
/**
 Object class for Company
 */
export class Company {
  /** The id of the company. */
  private _companyId: number;
  /** addresses field */
  private _addresses: Address[];
  /** Lists attributes for this company based on the search input. */
  private _attributes?: AttributeResultResponse;
  /** favoriteLists field */
  private _favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  private _orderlists?: OrderlistsResponse;
  /** pricesheets field */
  private _pricesheets?: Pricesheet[];
  /** The name of the company. */
  private _name: string;
  /** The tax number of the company. */
  private _taxNumber?: string;
  /** The coc number of the company. */
  private _cocNumber?: string;
  /** The debtor ID of the company. */
  private _debtorId?: string;
  /** The phone number of the company. */
  private _phone?: string;
  /** The email of the company. */
  private _email?: string;
  /** Notes of the company. */
  private _notes?: string;
  /** Shows whether this company is hidden and should only be used for background operations. */
  private _hidden?: YesNo;
  /** inheritProductList field */
  private _inheritProductList?: YesNo;
  /** The path in id's to the root of the inheritance tree. */
  private _path?: string;
  /** The slug of the company. */
  private _slug?: string;
  /** The tag of the company. */
  private _tag?: string;
  /** createdAt field */
  private _createdAt?: string;
  /** lastModifiedAt field */
  private _lastModifiedAt?: string;
  /** Children contacts of the company. */
  private _contacts?: ContactsResponse;
  /** Users/ contacts which are account managers of the company. */
  private _managers?: IBaseUser[];
  /** sources field */
  private _sources: Source[];
  /** All purchase authorization config entities for this company */
  private _purchaseAuthorizationConfigs?: PurchaseAuthorizationConfigResponse;
  /**
   Creates a new instance of Company
   */
  constructor(data: Partial<Company> = {}) {
    this._companyId = data.companyId!;
    this._addresses = data.addresses!;
    this._attributes = data.attributes;
    this._favoriteLists = data.favoriteLists;
    this._orderlists = data.orderlists;
    this._pricesheets = data.pricesheets;
    this._name = data.name!;
    this._taxNumber = data.taxNumber;
    this._cocNumber = data.cocNumber;
    this._debtorId = data.debtorId;
    this._phone = data.phone;
    this._email = data.email;
    this._notes = data.notes;
    this._hidden = data.hidden;
    this._inheritProductList = data.inheritProductList;
    this._path = data.path;
    this._slug = data.slug;
    this._tag = data.tag;
    this._createdAt = data.createdAt;
    this._lastModifiedAt = data.lastModifiedAt;
    this._contacts = data.contacts;
    this._managers = data.managers;
    this._sources = data.sources!;
    this._purchaseAuthorizationConfigs = data.purchaseAuthorizationConfigs;
  }
  /**
   The id of the company.
   */
  get companyId(): number {
    return this._companyId;
  }
  /**
   The id of the company.
   */
  set companyId(value: number) {
    this._companyId = value;
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
   Lists attributes for this company based on the search input.
   */
  get attributes(): AttributeResultResponse | undefined {
    return this._attributes;
  }
  /**
   Lists attributes for this company based on the search input.
   */
  set attributes(value: AttributeResultResponse | undefined) {
    this._attributes = value;
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
   orderlists field
   */
  get orderlists(): OrderlistsResponse | undefined {
    return this._orderlists;
  }
  /**
   orderlists field
   */
  set orderlists(value: OrderlistsResponse | undefined) {
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
   The name of the company.
   */
  get name(): string {
    return this._name;
  }
  /**
   The name of the company.
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   The tax number of the company.
   */
  get taxNumber(): string | undefined {
    return this._taxNumber;
  }
  /**
   The tax number of the company.
   */
  set taxNumber(value: string | undefined) {
    this._taxNumber = value;
  }
  /**
   The coc number of the company.
   */
  get cocNumber(): string | undefined {
    return this._cocNumber;
  }
  /**
   The coc number of the company.
   */
  set cocNumber(value: string | undefined) {
    this._cocNumber = value;
  }
  /**
   The debtor ID of the company.
   */
  get debtorId(): string | undefined {
    return this._debtorId;
  }
  /**
   The debtor ID of the company.
   */
  set debtorId(value: string | undefined) {
    this._debtorId = value;
  }
  /**
   The phone number of the company.
   */
  get phone(): string | undefined {
    return this._phone;
  }
  /**
   The phone number of the company.
   */
  set phone(value: string | undefined) {
    this._phone = value;
  }
  /**
   The email of the company.
   */
  get email(): string | undefined {
    return this._email;
  }
  /**
   The email of the company.
   */
  set email(value: string | undefined) {
    this._email = value;
  }
  /**
   Notes of the company.
   */
  get notes(): string | undefined {
    return this._notes;
  }
  /**
   Notes of the company.
   */
  set notes(value: string | undefined) {
    this._notes = value;
  }
  /**
   Shows whether this company is hidden and should only be used for background operations.
   */
  get hidden(): YesNo | undefined {
    return this._hidden;
  }
  /**
   Shows whether this company is hidden and should only be used for background operations.
   */
  set hidden(value: YesNo | undefined) {
    this._hidden = value;
  }
  /**
   inheritProductList field
   */
  get inheritProductList(): YesNo | undefined {
    return this._inheritProductList;
  }
  /**
   inheritProductList field
   */
  set inheritProductList(value: YesNo | undefined) {
    this._inheritProductList = value;
  }
  /**
   The path in id's to the root of the inheritance tree.
   */
  get path(): string | undefined {
    return this._path;
  }
  /**
   The path in id's to the root of the inheritance tree.
   */
  set path(value: string | undefined) {
    this._path = value;
  }
  /**
   The slug of the company.
   */
  get slug(): string | undefined {
    return this._slug;
  }
  /**
   The slug of the company.
   */
  set slug(value: string | undefined) {
    this._slug = value;
  }
  /**
   The tag of the company.
   */
  get tag(): string | undefined {
    return this._tag;
  }
  /**
   The tag of the company.
   */
  set tag(value: string | undefined) {
    this._tag = value;
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
   Children contacts of the company.
   */
  get contacts(): ContactsResponse | undefined {
    return this._contacts;
  }
  /**
   Children contacts of the company.
   */
  set contacts(value: ContactsResponse | undefined) {
    this._contacts = value;
  }
  /**
   Users/ contacts which are account managers of the company.
   */
  get managers(): IBaseUser[] | undefined {
    return this._managers;
  }
  /**
   Users/ contacts which are account managers of the company.
   */
  set managers(value: IBaseUser[] | undefined) {
    this._managers = value;
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
   All purchase authorization config entities for this company
   */
  get purchaseAuthorizationConfigs(): PurchaseAuthorizationConfigResponse | undefined {
    return this._purchaseAuthorizationConfigs;
  }
  /**
   All purchase authorization config entities for this company
   */
  set purchaseAuthorizationConfigs(value: PurchaseAuthorizationConfigResponse | undefined) {
    this._purchaseAuthorizationConfigs = value;
  }
}