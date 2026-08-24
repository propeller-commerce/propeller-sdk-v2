import { LocalizedString } from './LocalizedString';
import { ContactsResponse } from './ContactsResponse';
import { CustomersResponse } from './CustomersResponse';
import { CompaniesResponse } from './CompaniesResponse';
/**
 Object class for Pricesheet
 */
export interface Pricesheet {
  /** Primary identifier */
  id: string;
  /** Creation date */
  createdAt: string;
  /** Last modified date */
  lastModifiedAt: string;
  /** Pricesheet code */
  code: string;
  /** Pricesheet name */
  names?: LocalizedString[];
  /** Pricesheet description */
  descriptions?: LocalizedString[];
  /** Pricesheet priority */
  priority: number;
  /** Readonly */
  readonly: boolean;
  /** usergroups field */
  usergroups: string[];
  /** contactsPaginated field */
  contactsPaginated: ContactsResponse;
  /** customersPaginated field */
  customersPaginated: CustomersResponse;
  /** companiesPaginated field */
  companiesPaginated: CompaniesResponse;
}