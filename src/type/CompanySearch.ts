import { CompanyAddressSearch } from './CompanyAddressSearch';
import { CompanyContactSearch } from './CompanyContactSearch';
import { CompanyAttributeSearch } from './CompanyAttributeSearch';
/**
 Object class for CompanySearch
 */
export class CompanySearch {
  /** Company id */
  id!: number;
  /** Company name */
  name!: string;
  /** Company tax number */
  taxNumber?: string;
  /** Company coc number */
  cocNumber?: string;
  /** Notes of the company */
  notes?: string;
  /** Company debtor identifier */
  debtorId?: string;
  /** Company email */
  email?: string;
  /** Company creation date */
  createdAt!: string;
  /** Company last modified date */
  lastModifiedAt!: string;
  /** Company deletion date */
  deletedAt?: string;
  /** Addresses assigned to this company. */
  addresses!: CompanyAddressSearch[];
  /** Contacts part of this company. */
  contacts!: CompanyContactSearch[];
  /** Attributes of the company. */
  attributes!: CompanyAttributeSearch[];
  constructor(data: Partial<CompanySearch> = {}) {
    Object.assign(this, data);
  }
}