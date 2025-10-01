import { YesNo } from '../enum/YesNo';
import { CompaniesResponse } from './CompaniesResponse';
import { Customer } from './Customer';
/**
 Object class for Usergroup
 */
export class Usergroup {
  /** The id of the usergroup. */
  private _usergroupId: number;
  /** The name of the usergroup. */
  private _name: string;
  /** Shows whether this usergroup is hidden and should only be used for background operations. */
  private _hidden?: YesNo;
  /** inheritProductList field */
  private _inheritProductList?: YesNo;
  /** The path in id's to the root of the inheritance tree. */
  private _path?: string;
  /** The slug of the usergroup. */
  private _slug?: string;
  /** The slug of the usergroup. */
  private _tag?: string;
  /** createdAt field */
  private _createdAt?: string;
  /** lastModifiedAt field */
  private _lastModifiedAt?: string;
  /** The id of parent usergroup. */
  private _parentUsergroupId: number;
  /** Children companies of the usergroup. */
  private _companies?: CompaniesResponse;
  /** customers field */
  private _customers: Customer[];
  /**
   Creates a new instance of Usergroup
   */
  constructor(data: Partial<Usergroup> = {}) {
    this._usergroupId = data.usergroupId!;
    this._name = data.name!;
    this._hidden = data.hidden;
    this._inheritProductList = data.inheritProductList;
    this._path = data.path;
    this._slug = data.slug;
    this._tag = data.tag;
    this._createdAt = data.createdAt;
    this._lastModifiedAt = data.lastModifiedAt;
    this._parentUsergroupId = data.parentUsergroupId!;
    this._companies = data.companies;
    this._customers = data.customers!;
  }
  /**
   The id of the usergroup.
   */
  get usergroupId(): number {
    return this._usergroupId;
  }
  /**
   The id of the usergroup.
   */
  set usergroupId(value: number) {
    this._usergroupId = value;
  }
  /**
   The name of the usergroup.
   */
  get name(): string {
    return this._name;
  }
  /**
   The name of the usergroup.
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Shows whether this usergroup is hidden and should only be used for background operations.
   */
  get hidden(): YesNo | undefined {
    return this._hidden;
  }
  /**
   Shows whether this usergroup is hidden and should only be used for background operations.
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
   The slug of the usergroup.
   */
  get slug(): string | undefined {
    return this._slug;
  }
  /**
   The slug of the usergroup.
   */
  set slug(value: string | undefined) {
    this._slug = value;
  }
  /**
   The slug of the usergroup.
   */
  get tag(): string | undefined {
    return this._tag;
  }
  /**
   The slug of the usergroup.
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
   The id of parent usergroup.
   */
  get parentUsergroupId(): number {
    return this._parentUsergroupId;
  }
  /**
   The id of parent usergroup.
   */
  set parentUsergroupId(value: number) {
    this._parentUsergroupId = value;
  }
  /**
   Children companies of the usergroup.
   */
  get companies(): CompaniesResponse | undefined {
    return this._companies;
  }
  /**
   Children companies of the usergroup.
   */
  set companies(value: CompaniesResponse | undefined) {
    this._companies = value;
  }
  /**
   customers field
   */
  get customers(): Customer[] {
    return this._customers;
  }
  /**
   customers field
   */
  set customers(value: Customer[]) {
    this._customers = value;
  }
}