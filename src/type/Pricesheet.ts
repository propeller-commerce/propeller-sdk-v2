import { LocalizedString } from './LocalizedString';
import { Contact } from './Contact';
import { ContactsResponse } from './ContactsResponse';
import { Customer } from './Customer';
import { CustomersResponse } from './CustomersResponse';
import { Company } from './Company';
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
  /** Use contactsPaginated. */
  /** @deprecated Use contactsPaginated. */
  contacts: Contact[];
  /** contactsPaginated field */
  contactsPaginated: ContactsResponse;
  /** Use customersPaginated. */
  /** @deprecated Use customersPaginated. */
  customers: Customer[];
  /** customersPaginated field */
  customersPaginated: CustomersResponse;
  /** Use companiesPaginated. */
  /** @deprecated Use companiesPaginated. */
  companies: Company[];
  /** companiesPaginated field */
  companiesPaginated: CompaniesResponse;
}