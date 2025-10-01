import { AddressType } from '../enum/AddressType';
import { YesNo } from '../enum/YesNo';
import { CompanyTermFieldInput } from './CompanyTermFieldInput';
import { DateSearchInput } from './DateSearchInput';
import { CompanySearchSortInput } from './CompanySearchSortInput';
/**
 Input object for CompanySearchInput
 */
export interface CompanySearchInput {
  /** Pagination page number [default=1] */
  page: number;
  /** Pagination offset number [default=12] */
  offset: number;
  /** Company search term */
  term?: string;
  /** List of fields to apply in term search. Defaults to [{ boost: 1, fieldNames: ALL_AVAILABLE_TERM_FIELDS }] if not provided. */
  termFields?: CompanyTermFieldInput[];
  /** Search by company date created */
  companyCreatedAt?: DateSearchInput;
  /** Search by company date changed */
  companyLastModifiedAt?: DateSearchInput;
  /** Search by attribute date created */
  companyAttributeCreatedAt?: DateSearchInput;
  /** Search by attribute date changed */
  companyAttributeLastModifiedAt?: DateSearchInput;
  /** Search by contact date created */
  contactCreatedAt?: DateSearchInput;
  /** Search by contact date changed */
  contactLastModifiedAt?: DateSearchInput;
  /** Search by contact date of birth */
  contactDateOfBirth?: DateSearchInput;
  /** Search by contact attribute date created */
  contactAttributeCreatedAt?: DateSearchInput;
  /** Search by contact attribute date changed */
  contactAttributeLastModifiedAt?: DateSearchInput;
  /** Search by address types */
  addressTypes?: AddressType[];
  /** Search by default address */
  addressIsDefault?: YesNo;
  /** Search by active address */
  addressActive?: YesNo;
  /** Inputs to sort by!
    NOTE: Defaults to [{ field: RELEVANCE, order: DESC }] if not provided. */
  sortInputs?: CompanySearchSortInput[];
}