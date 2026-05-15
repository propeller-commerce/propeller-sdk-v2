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
}