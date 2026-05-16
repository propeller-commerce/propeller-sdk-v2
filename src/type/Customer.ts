import { Gender } from '../enum/Gender';
import { YesNo } from '../enum/YesNo';
import { Address } from './Address';
import { AttributeResultResponse } from './AttributeResultResponse';
import { MagicToken } from './MagicToken';
import { FavoriteListsResponse } from './FavoriteListsResponse';
import { OrderlistsResponse } from './OrderlistsResponse';
import { Pricesheet } from './Pricesheet';
import { Source } from './Source';
import { CustomerFieldName } from '../enum/CustomerFieldName';
import { IBaseUser } from './IBaseUser';
/**
 Object class for Customer
 */
export interface Customer {
  /** The id of the customer. */
  customerId: number;
  /** addresses field */
  addresses: Address[];
  /** Lists attributes for this customer based on the search input. */
  attributes?: AttributeResultResponse;
  /** Get all magic tokens for a customer */
  magicTokens: MagicToken[];
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** orderlist field */
  orderlist?: OrderlistsResponse;
  /** orderlists field */
  orderlists: OrderlistsResponse;
  /** pricesheets field */
  pricesheets?: Pricesheet[];
  /** The unique identifier of the user. */
  userId?: number;
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
  /** sources field */
  sources: Source[];
}