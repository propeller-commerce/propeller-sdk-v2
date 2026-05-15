import { IBaseUser } from './IBaseUser';
import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { Company } from './Company';
/**
 Object class for User
 */
export class User {
  /** The id of the user. */
  userId!: number;
/** debtorId field */
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
  /** The Tax number of the user. */
  taxNumber?: string;
  /** The CoC number of the user. */
  cocNumber?: string;
  /** The propeller access root for this user. Users with a login root can log into the backoffice and have a supervisor role on the api's */
  loginRoot?: number;
  /** The company of the user. */
  company?: string;
  /** Companies managed by the user. */
  managedCompanies?: Company[];
  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }

  /** Returns `userId`. */
  getUserId(): number {
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
  /** Returns `taxNumber`. */
  getTaxNumber(): string | undefined {
    return this.taxNumber;
  }
  /** Returns `cocNumber`. */
  getCocNumber(): string | undefined {
    return this.cocNumber;
  }
  /** Returns `loginRoot`. */
  getLoginRoot(): number | undefined {
    return this.loginRoot;
  }
  /** Returns `company`. */
  getCompany(): string | undefined {
    return this.company;
  }
  /** Returns `managedCompanies` as Company instances (coerced on first access). */
  getManagedCompanies(): Company[] | undefined {
    if (!this.managedCompanies) return undefined;
    this.managedCompanies = this.managedCompanies.map((x: any) => x instanceof Company ? x : new Company(x));
    return this.managedCompanies;
  }
}