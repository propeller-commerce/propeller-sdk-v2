import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { AttributeResultResponse } from './AttributeResultResponse';
import { MagicToken } from './MagicToken';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Pricesheet } from './Pricesheet';
import { Company } from './Company';
import { CompaniesResponse } from './CompaniesResponse';
import { Source } from './Source';
import { PurchaseAuthorizationConfigResponse } from './PurchaseAuthorizationConfigResponse';
import { ContactFieldName } from '../enum/ContactFieldName';
import { IBaseUser } from './IBaseUser';
import { Address } from './Address';
/**
 Object class for Contact
 */
export class Contact {
  /** The unique identifier of the contact. */
  contactId!: number;
  /** Lists attributes for this contacts based on the search input. */
  attributes?: AttributeResultResponse;
  /** Get all magic tokens for a contact */
  magicTokens!: MagicToken[];
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  orderlists?: OrderlistsResponse;
  /** pricesheets field */
  pricesheets?: Pricesheet[];
  /** The unique identifier of the user. */
  userId?: number;
  /** The debtor ID of the contact. */
  /** @deprecated Deprecated in favor of company debtorId */
  debtorId?: string;
  /** The gender of the user. */
  gender?: Gender;
  /** The first name of the user. */
  firstName!: string;
  /** The middle name of the user. */
  middleName?: string;
  /** The last name of the user. */
  lastName!: string;
  /** The phone number of the user. */
  phone?: string;
  /** The mobile number of the user. */
  mobile?: string;
  /** The email of the user. */
  email!: string;
  /** The login name (email) the account is linked to, generally the same as email address. When null a account has not been linked yet. */
  login?: string;
  /** The International Bank Account Number of the user */
  iban?: string;
  /** The Bank Account Number of the user */
  bankAccount?: string;
  /** The Bank Identification Code of the user */
  bic?: string;
  /** notes field */
  notes?: string;
  /** The primary language of the user */
  primaryLanguage?: string;
  /** The expiration date of the contact. After this date expires contact will be disabled. */
  expires?: string;
  /** External ID */
  externalId?: string;
  /** The date of birth of the contact. */
  dateOfBirth?: string;
  /** mailingList field */
  mailingList?: YesNo;
  /** isLoggedIn field */
  isLoggedIn?: boolean;
  /** createdAt field */
  createdAt?: string;
  /** lastModifiedAt field */
  lastModifiedAt?: string;
  /** The company id of parent company. */
  parentCompanyId!: number;
  /** company field */
  company?: Company;
  /** Companies managed by the contact. */
  managedCompanies?: Company[];
  /** All the companies that a contact belongs to */
  companies?: CompaniesResponse;
  /** sources field */
  sources!: Source[];
  /** All purchase authorization config entities for this contact */
  purchaseAuthorizationConfigs?: PurchaseAuthorizationConfigResponse;
  constructor(data: Partial<Contact> = {}) {
    Object.assign(this, data);
  }

  /** Returns `contactId`. */
  getContactId(): number {
    return this.contactId;
  }
  /** Returns `attributes` as a AttributeResultResponse instance (coerced on first access). */
  getAttributes(): AttributeResultResponse | undefined {
    if (this.attributes == null) return undefined;
    if (!(this.attributes instanceof AttributeResultResponse)) {
      this.attributes = new AttributeResultResponse(this.attributes as any);
    }
    return this.attributes;
  }
  /** Returns `magicTokens` as MagicToken instances (coerced on first access). */
  getMagicTokens(): MagicToken[] {
    if (!this.magicTokens) return [];
    this.magicTokens = this.magicTokens.map((x: any) => x instanceof MagicToken ? x : new MagicToken(x));
    return this.magicTokens;
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
  /** Returns `userId`. */
  getUserId(): number | undefined {
    return this.userId;
  }
  /** Returns `debtorId`. */
  getDebtorId(): string | undefined {
    return this.debtorId;
  }
  /** Returns `gender`. */
  getGender(): Gender | undefined {
    return this.gender;
  }
  /** Returns `firstName`. */
  getFirstName(): string {
    return this.firstName;
  }
  /** Returns `middleName`. */
  getMiddleName(): string | undefined {
    return this.middleName;
  }
  /** Returns `lastName`. */
  getLastName(): string {
    return this.lastName;
  }
  /** Returns `phone`. */
  getPhone(): string | undefined {
    return this.phone;
  }
  /** Returns `mobile`. */
  getMobile(): string | undefined {
    return this.mobile;
  }
  /** Returns `email`. */
  getEmail(): string {
    return this.email;
  }
  /** Returns `login`. */
  getLogin(): string | undefined {
    return this.login;
  }
  /** Returns `iban`. */
  getIban(): string | undefined {
    return this.iban;
  }
  /** Returns `bankAccount`. */
  getBankAccount(): string | undefined {
    return this.bankAccount;
  }
  /** Returns `bic`. */
  getBic(): string | undefined {
    return this.bic;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `primaryLanguage`. */
  getPrimaryLanguage(): string | undefined {
    return this.primaryLanguage;
  }
  /** Returns `expires`. */
  getExpires(): string | undefined {
    return this.expires;
  }
  /** Returns `externalId`. */
  getExternalId(): string | undefined {
    return this.externalId;
  }
  /** Returns `dateOfBirth`. */
  getDateOfBirth(): string | undefined {
    return this.dateOfBirth;
  }
  /** Returns `mailingList`. */
  getMailingList(): YesNo | undefined {
    return this.mailingList;
  }
  /** Returns `isLoggedIn`. */
  getIsLoggedIn(): boolean | undefined {
    return this.isLoggedIn;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string | undefined {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string | undefined {
    return this.lastModifiedAt;
  }
  /** Returns `parentCompanyId`. */
  getParentCompanyId(): number {
    return this.parentCompanyId;
  }
  /** Returns `company` as a Company instance (coerced on first access). */
  getCompany(): Company | undefined {
    if (this.company == null) return undefined;
    if (!(this.company instanceof Company)) {
      this.company = new Company(this.company as any);
    }
    return this.company;
  }
  /** Returns `managedCompanies` as Company instances (coerced on first access). */
  getManagedCompanies(): Company[] | undefined {
    if (!this.managedCompanies) return undefined;
    this.managedCompanies = this.managedCompanies.map((x: any) => x instanceof Company ? x : new Company(x));
    return this.managedCompanies;
  }
  /** Returns `companies` as a CompaniesResponse instance (coerced on first access). */
  getCompanies(): CompaniesResponse | undefined {
    if (this.companies == null) return undefined;
    if (!(this.companies instanceof CompaniesResponse)) {
      this.companies = new CompaniesResponse(this.companies as any);
    }
    return this.companies;
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