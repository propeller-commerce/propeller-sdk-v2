import { OrderlistType } from '../enum/OrderlistType';
import { YesNo } from '../enum/YesNo';
import { LocalizedString } from './LocalizedString';
import { ProductsResponse } from './ProductsResponse';
import { IBaseUser } from './IBaseUser';
import { UsersResponse } from './UsersResponse';
import { Company } from './Company';
import { CompaniesResponse } from './CompaniesResponse';
/**
 Object class for Orderlist
 */
export class Orderlist {
  /** Orderlist primary identifier */
  private _id: number;
  /** Orderlist creation date */
  private _createdAt: string;
  /** Orderlist last modified date */
  private _lastModifiedAt: string;
  /** Orderlist description per language */
  private _descriptions: LocalizedString[];
  /** Extra field per language */
  private _extras?: LocalizedString[];
  /** Orderlist code */
  private _code?: string;
  /** Valid from (Display only) */
  private _validFrom?: string;
  /** Valid to (Display only) */
  private _validTo?: string;
  /** Orderlist type */
  private _type: OrderlistType;
  /** Partner entity */
  private _partnerEntity?: string;
  /** Shows if the orderlist is active */
  private _active: YesNo;
  /** products field */
  private _products?: ProductsResponse;
  /** clusters field */
  private _clusters?: ProductsResponse;
  /** Use usersPaginated. */
  /** @deprecated Use usersPaginated. */
  private _users: IBaseUser[];
  /** usersPaginated field */
  private _usersPaginated: UsersResponse;
  /** Use companiesPaginated. */
  /** @deprecated Use companiesPaginated. */
  private _companies: Company[];
  /** companiesPaginated field */
  private _companiesPaginated: CompaniesResponse;
  /**
   Creates a new instance of Orderlist
   */
  constructor(data: Partial<Orderlist> = {}) {
    this._id = data.id!;
    this._createdAt = data.createdAt!;
    this._lastModifiedAt = data.lastModifiedAt!;
    this._descriptions = data.descriptions!;
    this._extras = data.extras;
    this._code = data.code;
    this._validFrom = data.validFrom;
    this._validTo = data.validTo;
    this._type = data.type!;
    this._partnerEntity = data.partnerEntity;
    this._active = data.active!;
    this._products = data.products;
    this._clusters = data.clusters;
    this._users = data.users!;
    this._usersPaginated = data.usersPaginated!;
    this._companies = data.companies!;
    this._companiesPaginated = data.companiesPaginated!;
  }
  /**
   Orderlist primary identifier
   */
  get id(): number {
    return this._id;
  }
  /**
   Orderlist primary identifier
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   Orderlist creation date
   */
  get createdAt(): string {
    return this._createdAt;
  }
  /**
   Orderlist creation date
   */
  set createdAt(value: string) {
    this._createdAt = value;
  }
  /**
   Orderlist last modified date
   */
  get lastModifiedAt(): string {
    return this._lastModifiedAt;
  }
  /**
   Orderlist last modified date
   */
  set lastModifiedAt(value: string) {
    this._lastModifiedAt = value;
  }
  /**
   Orderlist description per language
   */
  get descriptions(): LocalizedString[] {
    return this._descriptions;
  }
  /**
   Orderlist description per language
   */
  set descriptions(value: LocalizedString[]) {
    this._descriptions = value;
  }
  /**
   Extra field per language
   */
  get extras(): LocalizedString[] | undefined {
    return this._extras;
  }
  /**
   Extra field per language
   */
  set extras(value: LocalizedString[] | undefined) {
    this._extras = value;
  }
  /**
   Orderlist code
   */
  get code(): string | undefined {
    return this._code;
  }
  /**
   Orderlist code
   */
  set code(value: string | undefined) {
    this._code = value;
  }
  /**
   Valid from (Display only)
   */
  get validFrom(): string | undefined {
    return this._validFrom;
  }
  /**
   Valid from (Display only)
   */
  set validFrom(value: string | undefined) {
    this._validFrom = value;
  }
  /**
   Valid to (Display only)
   */
  get validTo(): string | undefined {
    return this._validTo;
  }
  /**
   Valid to (Display only)
   */
  set validTo(value: string | undefined) {
    this._validTo = value;
  }
  /**
   Orderlist type
   */
  get type(): OrderlistType {
    return this._type;
  }
  /**
   Orderlist type
   */
  set type(value: OrderlistType) {
    this._type = value;
  }
  /**
   Partner entity
   */
  get partnerEntity(): string | undefined {
    return this._partnerEntity;
  }
  /**
   Partner entity
   */
  set partnerEntity(value: string | undefined) {
    this._partnerEntity = value;
  }
  /**
   Shows if the orderlist is active
   */
  get active(): YesNo {
    return this._active;
  }
  /**
   Shows if the orderlist is active
   */
  set active(value: YesNo) {
    this._active = value;
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
   Use usersPaginated.
   */
  get users(): IBaseUser[] {
    return this._users;
  }
  /**
   Use usersPaginated.
   */
  set users(value: IBaseUser[]) {
    this._users = value;
  }
  /**
   usersPaginated field
   */
  get usersPaginated(): UsersResponse {
    return this._usersPaginated;
  }
  /**
   usersPaginated field
   */
  set usersPaginated(value: UsersResponse) {
    this._usersPaginated = value;
  }
  /**
   Use companiesPaginated.
   */
  get companies(): Company[] {
    return this._companies;
  }
  /**
   Use companiesPaginated.
   */
  set companies(value: Company[]) {
    this._companies = value;
  }
  /**
   companiesPaginated field
   */
  get companiesPaginated(): CompaniesResponse {
    return this._companiesPaginated;
  }
  /**
   companiesPaginated field
   */
  set companiesPaginated(value: CompaniesResponse) {
    this._companiesPaginated = value;
  }
}