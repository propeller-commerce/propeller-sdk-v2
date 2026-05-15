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
  id!: number;
  /** Orderlist creation date */
  createdAt!: string;
  /** Orderlist last modified date */
  lastModifiedAt!: string;
  /** Orderlist description per language */
  descriptions!: LocalizedString[];
  /** Extra field per language */
  extras?: LocalizedString[];
  /** Orderlist code */
  code?: string;
  /** Valid from (Display only) */
  validFrom?: string;
  /** Valid to (Display only) */
  validTo?: string;
  /** Orderlist type */
  type!: OrderlistType;
  /** Partner entity */
  partnerEntity?: string;
  /** Shows if the orderlist is active */
  active!: YesNo;
  /** products field */
  products?: ProductsResponse;
  /** clusters field */
  clusters?: ProductsResponse;
  /** Use usersPaginated. */
  /** @deprecated Use usersPaginated. */
  users!: IBaseUser[];
  /** usersPaginated field */
  usersPaginated!: UsersResponse;
  /** Use companiesPaginated. */
  /** @deprecated Use companiesPaginated. */
  companies!: Company[];
  /** companiesPaginated field */
  companiesPaginated!: CompaniesResponse;
  constructor(data: Partial<Orderlist> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns the description for the given language, falling back to NL. */
  getDescription(language: string = 'NL'): string | undefined {
    const arr = this.descriptions;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns the extra for the given language, falling back to NL. */
  getExtra(language: string = 'NL'): string | undefined {
    const arr = this.extras;
    if (!arr || arr.length === 0) return undefined;
    const entry = arr.find(e => e.language === language) ?? arr.find(e => e.language === 'NL');
    return entry?.value;
  }
  /** Returns `code`. */
  getCode(): string | undefined {
    return this.code;
  }
  /** Returns `validFrom`. */
  getValidFrom(): string | undefined {
    return this.validFrom;
  }
  /** Returns `validTo`. */
  getValidTo(): string | undefined {
    return this.validTo;
  }
  /** Returns `type`. */
  getType(): OrderlistType {
    return this.type;
  }
  /** Returns `partnerEntity`. */
  getPartnerEntity(): string | undefined {
    return this.partnerEntity;
  }
  /** Returns `active`. */
  getActive(): YesNo {
    return this.active;
  }
  /** Returns `products` as a ProductsResponse instance (coerced on first access). */
  getProducts(): ProductsResponse | undefined {
    if (this.products == null) return undefined;
    if (!(this.products instanceof ProductsResponse)) {
      this.products = new ProductsResponse(this.products as any);
    }
    return this.products;
  }
  /** Returns `clusters` as a ProductsResponse instance (coerced on first access). */
  getClusters(): ProductsResponse | undefined {
    if (this.clusters == null) return undefined;
    if (!(this.clusters instanceof ProductsResponse)) {
      this.clusters = new ProductsResponse(this.clusters as any);
    }
    return this.clusters;
  }
  /** Returns `users`. */
  getUsers(): IBaseUser[] {
    return this.users;
  }
  /** Returns `usersPaginated` as a UsersResponse instance (coerced on first access). */
  getUsersPaginated(): UsersResponse | undefined {
    if (this.usersPaginated == null) return undefined;
    if (!(this.usersPaginated instanceof UsersResponse)) {
      this.usersPaginated = new UsersResponse(this.usersPaginated as any);
    }
    return this.usersPaginated;
  }
  /** Returns `companies` as Company instances (coerced on first access). */
  getCompanies(): Company[] {
    if (!this.companies) return [];
    this.companies = this.companies.map((x: any) => x instanceof Company ? x : new Company(x));
    return this.companies;
  }
  /** Returns `companiesPaginated` as a CompaniesResponse instance (coerced on first access). */
  getCompaniesPaginated(): CompaniesResponse | undefined {
    if (this.companiesPaginated == null) return undefined;
    if (!(this.companiesPaginated instanceof CompaniesResponse)) {
      this.companiesPaginated = new CompaniesResponse(this.companiesPaginated as any);
    }
    return this.companiesPaginated;
  }
}