import { AdminUser } from './AdminUser';
/**
 Object class for AdminUserTenant
 */
export class AdminUserTenant {
  /** id field */
  private _id: string | number;
  /** tenant field */
  private _tenant: string;
  /** name field */
  private _name: string;
  /** default field */
  private _default: boolean;
  /** createdAt field */
  private _createdAt: string;
  /** createdBy field */
  private _createdBy: number;
  /** lastModifiedAt field */
  private _lastModifiedAt: string;
  /** lastModifiedBy field */
  private _lastModifiedBy: number;
  /** user field */
  private _user?: AdminUser;
  /**
   Creates a new instance of AdminUserTenant
   */
  constructor(data: Partial<AdminUserTenant> = {}) {
    this._id = data.id!;
    this._tenant = data.tenant!;
    this._name = data.name!;
    this._default = data.default!;
    this._createdAt = data.createdAt!;
    this._createdBy = data.createdBy!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._lastModifiedBy = data.lastModifiedBy!;
    this._user = data.user;
  }
  /**
   id field
   */
  get id(): string | number {
    return this._id;
  }
  /**
   id field
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   tenant field
   */
  get tenant(): string {
    return this._tenant;
  }
  /**
   tenant field
   */
  set tenant(value: string) {
    this._tenant = value;
  }
  /**
   name field
   */
  get name(): string {
    return this._name;
  }
  /**
   name field
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   default field
   */
  get default(): boolean {
    return this._default;
  }
  /**
   default field
   */
  set default(value: boolean) {
    this._default = value;
  }
  /**
   createdAt field
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   createdAt field
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   createdBy field
   */
  get createdBy(): number {
    return this._createdBy;
  }
  /**
   createdBy field
   */
  set createdBy(value: number) {
    this._createdBy = value;
  }
  /**
   lastModifiedAt field
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   lastModifiedAt field
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   lastModifiedBy field
   */
  get lastModifiedBy(): number {
    return this._lastModifiedBy;
  }
  /**
   lastModifiedBy field
   */
  set lastModifiedBy(value: number) {
    this._lastModifiedBy = value;
  }
  /**
   user field
   */
  get user(): AdminUser | undefined {
    return this._user;
  }
  /**
   user field
   */
  set user(value: AdminUser | undefined) {
    this._user = value;
  }
}