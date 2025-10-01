import { ProductsResponse } from './ProductsResponse';
import { Company } from './Company';
import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Object class for FavoriteList
 */
export class FavoriteList {
  /** Favorite List unique identifier */
  private _id: string | number;
  /** Favorite List name */
  private _name: string;
  /** Favorite List company ID */
  private _companyId?: number;
  /** Favorite List contact ID */
  private _contactId?: number;
  /** Favorite List customer ID */
  private _customerId?: number;
  /** Default Favorite List */
  private _isDefault: boolean;
  /** Favorite List slug */
  private _slug: string;
  /** Favorite List date created */
  private _createdAt: string;
  /** Favorite List date modified */
  private _updatedAt: string;
  /** products field */
  private _products?: ProductsResponse;
  /** clusters field */
  private _clusters?: ProductsResponse;
  /** company field */
  private _company?: Company;
  /** contact field */
  private _contact?: Contact;
  /** customer field */
  private _customer?: Customer;
  /**
   Creates a new instance of FavoriteList
   */
  constructor(data: Partial<FavoriteList> = {}) {
    this._id = data.id!;
    this._name = data.name!;
    this._companyId = data.companyId;
    this._contactId = data.contactId;
    this._customerId = data.customerId;
    this._isDefault = data.isDefault!;
    this._slug = data.slug!;
    this._createdAt = data.createdAt!;
    this._updatedAt = data.updatedAt!;
    this._products = data.products;
    this._clusters = data.clusters;
    this._company = data.company;
    this._contact = data.contact;
    this._customer = data.customer;
  }
  /**
   Favorite List unique identifier
   */
  get id(): string | number {
    return this._id;
  }
  /**
   Favorite List unique identifier
   */
  set id(value: string | number) {
    this._id = value;
  }
  /**
   Favorite List name
   */
  get name(): string {
    return this._name;
  }
  /**
   Favorite List name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Favorite List company ID
   */
  get companyId(): number | undefined {
    return this._companyId;
  }
  /**
   Favorite List company ID
   */
  set companyId(value: number | undefined) {
    this._companyId = value;
  }
  /**
   Favorite List contact ID
   */
  get contactId(): number | undefined {
    return this._contactId;
  }
  /**
   Favorite List contact ID
   */
  set contactId(value: number | undefined) {
    this._contactId = value;
  }
  /**
   Favorite List customer ID
   */
  get customerId(): number | undefined {
    return this._customerId;
  }
  /**
   Favorite List customer ID
   */
  set customerId(value: number | undefined) {
    this._customerId = value;
  }
  /**
   Default Favorite List
   */
  get isDefault(): boolean {
    return this._isDefault;
  }
  /**
   Default Favorite List
   */
  set isDefault(value: boolean) {
    this._isDefault = value;
  }
  /**
   Favorite List slug
   */
  get slug(): string {
    return this._slug;
  }
  /**
   Favorite List slug
   */
  set slug(value: string) {
    this._slug = value;
  }
  /**
   Favorite List date created
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Favorite List date created
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Favorite List date modified
   */
  get updatedAt(): string {
    return this._updatedAt;
  }
  /**
   Favorite List date modified
   */
  set updatedAt(value: string) {
    this._updatedAt = value;
  }
  /**
   products field
   */
  get products(): ProductsResponse | undefined {
    return this._products;
  }
  /**
   products field
   */
  set products(value: ProductsResponse | undefined) {
    this._products = value;
  }
  /**
   clusters field
   */
  get clusters(): ProductsResponse | undefined {
    return this._clusters;
  }
  /**
   clusters field
   */
  set clusters(value: ProductsResponse | undefined) {
    this._clusters = value;
  }
  /**
   company field
   */
  get company(): Company | undefined {
    return this._company;
  }
  /**
   company field
   */
  set company(value: Company | undefined) {
    this._company = value;
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