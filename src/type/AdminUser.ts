import { Gender } from '../enum/Gender';
import { TenantResponse } from './TenantResponse';
/**
 Object class for AdminUser
 */
export class AdminUser {
  /** id field */
  private _id: string | number;
  /** email field */
  private _email: string;
  /** gender field */
  private _gender?: Gender;
  /** firstName field */
  private _firstName?: string;
  /** middleName field */
  private _middleName?: string;
  /** lastName field */
  private _lastName?: string;
  /** language field */
  private _language?: string;
  /** phone field */
  private _phone?: string;
  /** job field */
  private _job?: string;
  /** createdAt field */
  private _createdAt: string;
  /** createdBy field */
  private _createdBy: number;
  /** lastModifiedAt field */
  private _lastModifiedAt: string;
  /** lastModifiedBy field */
  private _lastModifiedBy: number;
  /** tenants field */
  private _tenants: TenantResponse;
  /**
   Creates a new instance of AdminUser
   */
  constructor(data: Partial<AdminUser> = {}) {
    this._id = data.id!;
    this._email = data.email!;
    this._gender = data.gender;
    this._firstName = data.firstName;
    this._middleName = data.middleName;
    this._lastName = data.lastName;
    this._language = data.language;
    this._phone = data.phone;
    this._job = data.job;
    this._createdAt = data.createdAt!;
    this._createdBy = data.createdBy!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._lastModifiedBy = data.lastModifiedBy!;
    this._tenants = data.tenants!;
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
   email field
   */
  get email(): string {
    return this._email;
  }
  /**
   email field
   */
  set email(value: string) {
    this._email = value;
  }
  /**
   gender field
   */
  get gender(): Gender | undefined {
    return this._gender;
  }
  /**
   gender field
   */
  set gender(value: Gender | undefined) {
    this._gender = value;
  }
  /**
   firstName field
   */
  get firstName(): string | undefined {
    return this._firstName;
  }
  /**
   firstName field
   */
  set firstName(value: string | undefined) {
    this._firstName = value;
  }
  /**
   middleName field
   */
  get middleName(): string | undefined {
    return this._middleName;
  }
  /**
   middleName field
   */
  set middleName(value: string | undefined) {
    this._middleName = value;
  }
  /**
   lastName field
   */
  get lastName(): string | undefined {
    return this._lastName;
  }
  /**
   lastName field
   */
  set lastName(value: string | undefined) {
    this._lastName = value;
  }
  /**
   language field
   */
  get language(): string | undefined {
    return this._language;
  }
  /**
   language field
   */
  set language(value: string | undefined) {
    this._language = value;
  }
  /**
   phone field
   */
  get phone(): string | undefined {
    return this._phone;
  }
  /**
   phone field
   */
  set phone(value: string | undefined) {
    this._phone = value;
  }
  /**
   job field
   */
  get job(): string | undefined {
    return this._job;
  }
  /**
   job field
   */
  set job(value: string | undefined) {
    this._job = value;
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
   tenants field
   */
  get tenants(): TenantResponse {
    return this._tenants;
  }
  /**
   tenants field
   */
  set tenants(value: TenantResponse) {
    this._tenants = value;
  }
}