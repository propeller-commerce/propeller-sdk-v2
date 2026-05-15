import { ProductsResponse } from './ProductsResponse';
import { Company } from './Company';
import { Contact } from './Contact';
import { Customer } from './Customer';
/**
 Object class for FavoriteList
 */
export class FavoriteList {
  /** Favorite List unique identifier */
  id!: string | number;
  /** Favorite List name */
  name!: string;
  /** Favorite List company ID */
  companyId?: number;
  /** Favorite List contact ID */
  contactId?: number;
  /** Favorite List customer ID */
  customerId?: number;
  /** Default Favorite List */
  isDefault!: boolean;
  /** Favorite List slug */
  slug!: string;
  /** Favorite List date created */
  createdAt!: string;
  /** Favorite List date modified */
  updatedAt!: string;
  /** products field */
  products?: ProductsResponse;
  /** clusters field */
  clusters?: ProductsResponse;
  /** company field */
  company?: Company;
  /** contact field */
  contact?: Contact;
  /** customer field */
  customer?: Customer;
  constructor(data: Partial<FavoriteList> = {}) {
    Object.assign(this, data);
  }
}