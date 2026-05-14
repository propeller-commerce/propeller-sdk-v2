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
}