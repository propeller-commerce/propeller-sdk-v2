/**
 Object class for UserClaims
 */
export class UserClaims {
  /** userId field */
  private _userId: number;
  /** userDirectoryId field */
  private _userDirectoryId: number;
  /** adminUserId field */
  private _adminUserId: number;
  /** contactId field */
  private _contactId?: number;
  /** customerId field */
  private _customerId?: number;
  /** companyId field */
  private _companyId?: number;
  /** companyIds field */
  private _companyIds?: number[];
  /** roles field */
  private _roles: string[];
  /** discounts field */
  private _discounts: string[];
  /** acllist field */
  private _acllist: number[];
  /** class field */
  private _class: string;
  /** loginRoot field */
  private _loginRoot?: number;
  /** dateCreated field */
  private _dateCreated: string;
  /**
   Creates a new instance of UserClaims
   */
  constructor(data: Partial<UserClaims> = {}) {
    this._userId = data.userId!;
    this._userDirectoryId = data.userDirectoryId!;
    this._adminUserId = data.adminUserId!;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
    this._companyId = data.companyId;
    this._companyIds = data.companyIds;
    this._roles = data.roles!;
    this._discounts = data.discounts!;
    this._acllist = data.acllist!;
    this._class = data.class!;
    this._loginRoot = data.loginRoot;
    this._dateCreated = data.dateCreated!;
  }
  /**
   userId field
   */
  get userId(): number {
    return this._userId;
  }
  /**
   userId field
   */
  set userId(value: number) {
    this._userId = value;
  }
  /**
   userDirectoryId field
   */
  get userDirectoryId(): number {
    return this._userDirectoryId;
  }
  /**
   userDirectoryId field
   */
  set userDirectoryId(value: number) {
    this._userDirectoryId = value;
  }
  /**
   adminUserId field
   */
  get adminUserId(): number {
    return this._adminUserId;
  }
  /**
   adminUserId field
   */
  set adminUserId(value: number) {
    this._adminUserId = value;
  }
  /**
   contactId field
   */
  get contactId(): number | undefined {
    return this._contactId;
  }
  /**
   contactId field
   */
  set contactId(value: number | undefined) {
    this._contactId = value;
  }
  /**
   customerId field
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   customerId field
   */
  set customerId(value: number | undefined) {
    this._customerId = value;
  }
  /**
   companyId field
   */
  get companyId(): number | undefined {
    return this._companyId;
  }
  /**
   companyId field
   */
  set companyId(value: number | undefined) {
    this._companyId = value;
  }
  /**
   companyIds field
   */
  get companyIds(): number[] | undefined {
    return this._companyIds;
  }
  /**
   companyIds field
   */
  set companyIds(value: number[] | undefined) {
    this._companyIds = value;
  }
  /**
   roles field
   */
  get roles(): string[] {
    return this._roles;
  }
  /**
   roles field
   */
  set roles(value: string[]) {
    this._roles = value;
  }
  /**
   discounts field
   */
  get discounts(): string[] {
    return this._discounts;
  }
  /**
   discounts field
   */
  set discounts(value: string[]) {
    this._discounts = value;
  }
  /**
   acllist field
   */
  get acllist(): number[] {
    return this._acllist;
  }
  /**
   acllist field
   */
  set acllist(value: number[]) {
    this._acllist = value;
  }
  /**
   class field
   */
  get class(): string {
    return this._class;
  }
  /**
   class field
   */
  set class(value: string) {
    this._class = value;
  }
  /**
   loginRoot field
   */
  get loginRoot(): number | undefined {
    return this._loginRoot;
  }
  /**
   loginRoot field
   */
  set loginRoot(value: number | undefined) {
    this._loginRoot = value;
  }
  /**
   dateCreated field
   */
  get dateCreated(): string {
    return this._dateCreated;
  }
  /**
   dateCreated field
   */
  set dateCreated(value: string) {
    this._dateCreated = value;
  }
}