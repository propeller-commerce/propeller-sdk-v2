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
/**
 Object class for Contact
 */
export interface Contact {
  /** The unique identifier of the contact. */
  contactId: number;
  /** Lists attributes for this contacts based on the search input. */
  attributes?: AttributeResultResponse;
  /** Get all magic tokens for a contact */
  magicTokens: MagicToken[];
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  orderlists?: OrderlistsResponse;
  /** pricesheets field */
  pricesheets?: Pricesheet[];
  /** The unique identifier of the user. */
  userId?: number;
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
  /** The company id of parent company. */
  parentCompanyId: number;
  /** company field */
  company?: Company;
  /** Companies managed by the contact. */
  managedCompanies?: Company[];
  /** All the companies that a contact belongs to */
  companies?: CompaniesResponse;
  /** sources field */
  sources: Source[];
  /** All purchase authorization config entities for this contact */
  purchaseAuthorizationConfigs?: PurchaseAuthorizationConfigResponse;
}