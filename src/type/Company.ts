import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { AttributeResultResponse } from './AttributeResultResponse';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Pricesheet } from './Pricesheet';
import { ContactsResponse } from './ContactsResponse';
import { IBaseUser } from './IBaseUser';
import { Source } from './Source';
import { PurchaseAuthorizationConfigResponse } from './PurchaseAuthorizationConfigResponse';
/**
 Object class for Company
 */
export class Company {
  /** The id of the company. */
  companyId!: number;
  /** addresses field */
  addresses!: Address[];
  /** Lists attributes for this company based on the search input. */
  attributes?: AttributeResultResponse;
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  orderlists?: OrderlistsResponse;
  /** pricesheets field */
  pricesheets?: Pricesheet[];
  /** The name of the company. */
  name!: string;
  /** The tax number of the company. */
  taxNumber?: string;
  /** The coc number of the company. */
  cocNumber?: string;
  /** The debtor ID of the company. */
  debtorId?: string;
  /** The phone number of the company. */
  phone?: string;
  /** The email of the company. */
  email?: string;
  /** Notes of the company. */
  notes?: string;
  /** Shows whether this company is hidden and should only be used for background operations. */
  hidden?: YesNo;
  /** inheritProductList field */
  /** @deprecated Deprecated, will be removed in the future */
  inheritProductList?: YesNo;
  /** The path in id's to the root of the inheritance tree. */
  /** @deprecated Deprecated, will be removed in the future */
  path?: string;
  /** The slug of the company. */
  /** @deprecated Deprecated, will be removed in the future */
  slug?: string;
  /** The tag of the company. */
  tag?: string;
  /** createdAt field */
  createdAt?: string;
  /** lastModifiedAt field */
  lastModifiedAt?: string;
  /** Children contacts of the company. */
  contacts?: ContactsResponse;
  /** Users/ contacts which are account managers of the company. */
  managers?: IBaseUser[];
  /** sources field */
  sources!: Source[];
  /** All purchase authorization config entities for this company */
  purchaseAuthorizationConfigs?: PurchaseAuthorizationConfigResponse;
  constructor(data: Partial<Company> = {}) {
    Object.assign(this, data);
  }

  /** Returns `companyId`. */
  getCompanyId(): number {
    return this.companyId;
  }
  /** Returns `addresses` as Address instances (coerced on first access). */
  getAddresses(): Address[] {
    if (!this.addresses) return [];
    this.addresses = this.addresses.map((x: any) => x instanceof Address ? x : new Address(x));
    return this.addresses;
  }
  /** Returns `attributes` as a AttributeResultResponse instance (coerced on first access). */
  getAttributes(): AttributeResultResponse | undefined {
    if (this.attributes == null) return undefined;
    if (!(this.attributes instanceof AttributeResultResponse)) {
      this.attributes = new AttributeResultResponse(this.attributes as any);
    }
    return this.attributes;
  }
  /** Returns `favoriteLists` as a FavoriteListsResponse instance (coerced on first access). */
  getFavoriteLists(): FavoriteListsResponse | undefined {
    if (this.favoriteLists == null) return undefined;
    if (!(this.favoriteLists instanceof FavoriteListsResponse)) {
      this.favoriteLists = new FavoriteListsResponse(this.favoriteLists as any);
    }
    return this.favoriteLists;
  }
  /** Returns `orderlists` as a OrderlistsResponse instance (coerced on first access). */
  getOrderlists(): OrderlistsResponse | undefined {
    if (this.orderlists == null) return undefined;
    if (!(this.orderlists instanceof OrderlistsResponse)) {
      this.orderlists = new OrderlistsResponse(this.orderlists as any);
    }
    return this.orderlists;
  }
  /** Returns `pricesheets` as Pricesheet instances (coerced on first access). */
  getPricesheets(): Pricesheet[] | undefined {
    if (!this.pricesheets) return undefined;
    this.pricesheets = this.pricesheets.map((x: any) => x instanceof Pricesheet ? x : new Pricesheet(x));
    return this.pricesheets;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `taxNumber`. */
  getTaxNumber(): string | undefined {
    return this.taxNumber;
  }
  /** Returns `cocNumber`. */
  getCocNumber(): string | undefined {
    return this.cocNumber;
  }
  /** Returns `debtorId`. */
  getDebtorId(): string | undefined {
    return this.debtorId;
  }
  /** Returns `phone`. */
  getPhone(): string | undefined {
    return this.phone;
  }
  /** Returns `email`. */
  getEmail(): string | undefined {
    return this.email;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `hidden`. */
  getHidden(): YesNo | undefined {
    return this.hidden;
  }
  /** Returns `inheritProductList`. */
  getInheritProductList(): YesNo | undefined {
    return this.inheritProductList;
  }
  /** Returns `path`. */
  getPath(): string | undefined {
    return this.path;
  }
  /** Returns `slug`. */
  getSlug(): string | undefined {
    return this.slug;
  }
  /** Returns `tag`. */
  getTag(): string | undefined {
    return this.tag;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string | undefined {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string | undefined {
    return this.lastModifiedAt;
  }
  /** Returns `contacts` as a ContactsResponse instance (coerced on first access). */
  getContacts(): ContactsResponse | undefined {
    if (this.contacts == null) return undefined;
    if (!(this.contacts instanceof ContactsResponse)) {
      this.contacts = new ContactsResponse(this.contacts as any);
    }
    return this.contacts;
  }
  /** Returns `managers`. */
  getManagers(): IBaseUser[] | undefined {
    return this.managers;
  }
  /** Returns `sources` as Source instances (coerced on first access). */
  getSources(): Source[] {
    if (!this.sources) return [];
    this.sources = this.sources.map((x: any) => x instanceof Source ? x : new Source(x));
    return this.sources;
  }
  /** Returns `purchaseAuthorizationConfigs` as a PurchaseAuthorizationConfigResponse instance (coerced on first access). */
  getPurchaseAuthorizationConfigs(): PurchaseAuthorizationConfigResponse | undefined {
    if (this.purchaseAuthorizationConfigs == null) return undefined;
    if (!(this.purchaseAuthorizationConfigs instanceof PurchaseAuthorizationConfigResponse)) {
      this.purchaseAuthorizationConfigs = new PurchaseAuthorizationConfigResponse(this.purchaseAuthorizationConfigs as any);
    }
    return this.purchaseAuthorizationConfigs;
  }
}