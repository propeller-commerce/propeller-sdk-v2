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
export interface Company {
  /** The id of the company. */
  companyId: number;
  /** addresses field */
  addresses: Address[];
  /** Lists attributes for this company based on the search input. */
  attributes?: AttributeResultResponse;
  /** favoriteLists field */
  favoriteLists?: FavoriteListsResponse;
  /** orderlists field */
  orderlists?: OrderlistsResponse;
  /** pricesheets field */
  pricesheets?: Pricesheet[];
  /** The name of the company. */
  name: string;
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
  sources: Source[];
  /** All purchase authorization config entities for this company */
  purchaseAuthorizationConfigs?: PurchaseAuthorizationConfigResponse;
}