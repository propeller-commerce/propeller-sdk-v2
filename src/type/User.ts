import { IBaseUser } from './IBaseUser';
import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { Company } from './Company';
/**
 Object class for User
 */
export interface User {
  /** The id of the user. */
  userId: number;
  /** addresses field */
  addresses: Address[];
  /** debtorId field */
  debtorId?: string;
  /** The gender of the user. */
  gender?: Gender;
  /** The first name of the user. */
  firstName: string;
  /** The middle name of the user. */
  middleName?: string;
  /** The last name of the user. */
  lastName: string;
  /** The phone number of the user. */
  phone?: string;
  /** The mobile number of the user. */
  mobile?: string;
  /** The email of the user. */
  email: string;
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
}