import { CompanyTermField } from '../enum/CompanyTermField';
import { CompanySortInput } from './CompanySortInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for CompanySearchArguments
 */
export interface CompanySearchArguments {
  /** List of unique company ids */
  companyIds?: number[];
/** Company's name */
  name?: string;
  /** When true, only companies managed by the viewer will be listed */
  managedCompaniesOnly?: boolean;
  /** page input field */
  page: number;
  /** offset input field */
  offset: number;
  /** List of company sort filters */
  sort?: CompanySortInput[];
  /** Search by date changed */
  lastModifiedAt?: DateSearchInput;
  /** Search by date created */
  createdAt?: DateSearchInput;

  /** Free-text search term. Text fields are matched as a case-insensitive substring; the numeric *_ID fields are matched by exact id (and apply only when the term is numeric). By default it searches the company's own fields (name, taxNumber, cocNumber, notes, debtorId, email); restrict or extend the searched fields with termFields. Multi-word terms must all match (AND). Each word must be at least 3 characters, except numeric id values which may be shorter. */
  term?: string;
  /** Fields the term searches. Text fields match by case-insensitive substring; the *_ID fields (COMPANY_ID, COMPANY_ADDRESS_ID, CONTACT_ID) match by exact id and apply only when the term is numeric. When omitted, only company fields are searched. Include address or contact fields to also search the company's addresses or contacts. */
  termFields?: CompanyTermField[];
}