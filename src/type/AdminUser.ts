import { Gender } from '../enum/Gender';
import { TenantResponse } from './TenantResponse';
/**
 Object class for AdminUser
 */
export class AdminUser {
  /** id field */
  id!: string | number;
  /** email field */
  email!: string;
  /** gender field */
  gender?: Gender;
  /** firstName field */
  firstName?: string;
  /** middleName field */
  middleName?: string;
  /** lastName field */
  lastName?: string;
  /** language field */
  language?: string;
  /** phone field */
  phone?: string;
  /** job field */
  job?: string;
  /** createdAt field */
  createdAt!: string;
  /** createdBy field */
  createdBy!: number;
  /** lastModifiedAt field */
  lastModifiedAt!: string;
  /** lastModifiedBy field */
  lastModifiedBy!: number;
  /** tenants field */
  tenants!: TenantResponse;
  constructor(data: Partial<AdminUser> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `email`. */
  getEmail(): string {
    return this.email;
  }
  /** Returns `gender`. */
  getGender(): Gender | undefined {
    return this.gender;
  }
  /** Returns `firstName`. */
  getFirstName(): string | undefined {
    return this.firstName;
  }
  /** Returns `middleName`. */
  getMiddleName(): string | undefined {
    return this.middleName;
  }
  /** Returns `lastName`. */
  getLastName(): string | undefined {
    return this.lastName;
  }
  /** Returns `language`. */
  getLanguage(): string | undefined {
    return this.language;
  }
  /** Returns `phone`. */
  getPhone(): string | undefined {
    return this.phone;
  }
  /** Returns `job`. */
  getJob(): string | undefined {
    return this.job;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number {
    return this.createdBy;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number {
    return this.lastModifiedBy;
  }
  /** Returns `tenants` as a TenantResponse instance (coerced on first access). */
  getTenants(): TenantResponse | undefined {
    if (this.tenants == null) return undefined;
    if (!(this.tenants instanceof TenantResponse)) {
      this.tenants = new TenantResponse(this.tenants as any);
    }
    return this.tenants;
  }
}