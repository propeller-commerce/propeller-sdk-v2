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

  /** Returns `id`. */
  getId(): number {
    return this.id;
  }
  /** Returns `firstName`. */
  getFirstName(): string {
    return this.firstName;
  }
  /** Returns `lastName`. */
  getLastName(): string | undefined {
    return this.lastName;
  }
  /** Returns `middleName`. */
  getMiddleName(): string | undefined {
    return this.middleName;
  }
  /** Returns `phone`. */
  getPhone(): string | undefined {
    return this.phone;
  }
  /** Returns `mobile`. */
  getMobile(): string | undefined {
    return this.mobile;
  }
  /** Returns `email`. */
  getEmail(): string {
    return this.email;
  }
  /** Returns `iban`. */
  getIban(): string | undefined {
    return this.iban;
  }
  /** Returns `bankAccount`. */
  getBankAccount(): string | undefined {
    return this.bankAccount;
  }
  /** Returns `bic`. */
  getBic(): string | undefined {
    return this.bic;
  }
  /** Returns `notes`. */
  getNotes(): string | undefined {
    return this.notes;
  }
  /** Returns `dateOfBirth`. */
  getDateOfBirth(): string | undefined {
    return this.dateOfBirth;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `attributes` as CompanyAttributeSearch instances (coerced on first access). */
  getAttributes(): CompanyAttributeSearch[] {
    if (!this.attributes) return [];
    this.attributes = this.attributes.map((x: any) => x instanceof CompanyAttributeSearch ? x : new CompanyAttributeSearch(x));
    return this.attributes;
  }
}