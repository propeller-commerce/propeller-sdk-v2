import { CompanyAttributeSearch } from './CompanyAttributeSearch';
/**
 Object class for CompanyContactSearch
 */
export class CompanyContactSearch {
  /** Contact id */
  id!: number;
  /** First name of the contact. */
  firstName!: string;
  /** Last name of the contact. */
  lastName?: string;
  /** Middle name of the contact. */
  middleName?: string;
  /** Phone number of the contact. */
  phone?: string;
  /** Mobile number of the contact. */
  mobile?: string;
  /** Email of the contact. */
  email!: string;
  /** International Bank Account Number of the contact */
  iban?: string;
  /** Bank Account Number of the contact */
  bankAccount?: string;
  /** Bank Identification Code of the contact */
  bic?: string;
  /** Contact notes */
  notes?: string;
  /** Contact debtor identifier */
  /** @deprecated Deprecated in favor of company debtorId */
  debtorId?: string;
  /** Date of birth of the contact. */
  dateOfBirth?: string;
  /** Contract creation date */
  createdAt!: string;
  /** Contact last modified date */
  lastModifiedAt!: string;
  /** Attributes of the contact */
  attributes!: CompanyAttributeSearch[];
  constructor(data: Partial<CompanyContactSearch> = {}) {
    Object.assign(this, data);
  }
}