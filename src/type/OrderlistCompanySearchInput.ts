import { CompanySortInput } from './CompanySortInput';
import { DateSearchInput } from './DateSearchInput';
/**
 Input object for OrderlistCompanySearchInput
 */
export interface OrderlistCompanySearchInput {
  /** Usergroup unique identifier */
  usergroupId?: number;
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
}