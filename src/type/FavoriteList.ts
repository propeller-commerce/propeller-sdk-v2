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

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `companyId`. */
  getCompanyId(): number | undefined {
    return this.companyId;
  }
  /** Returns `contactId`. */
  getContactId(): number | undefined {
    return this.contactId;
  }
  /** Returns `customerId`. */
  getCustomerId(): number | undefined {
    return this.customerId;
  }
  /** Returns `isDefault`. */
  getIsDefault(): boolean {
    return this.isDefault;
  }
  /** Returns `slug`. */
  getSlug(): string {
    return this.slug;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `updatedAt`. */
  getUpdatedAt(): string {
    return this.updatedAt;
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
  /** Returns `company` as a Company instance (coerced on first access). */
  getCompany(): Company | undefined {
    if (this.company == null) return undefined;
    if (!(this.company instanceof Company)) {
      this.company = new Company(this.company as any);
    }
    return this.company;
  }
  /** Returns `contact` as a Contact instance (coerced on first access). */
  getContact(): Contact | undefined {
    if (this.contact == null) return undefined;
    if (!(this.contact instanceof Contact)) {
      this.contact = new Contact(this.contact as any);
    }
    return this.contact;
  }
  /** Returns `customer` as a Customer instance (coerced on first access). */
  getCustomer(): Customer | undefined {
    if (this.customer == null) return undefined;
    if (!(this.customer instanceof Customer)) {
      this.customer = new Customer(this.customer as any);
    }
    return this.customer;
  }
}