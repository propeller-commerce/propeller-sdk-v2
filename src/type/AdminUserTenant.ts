import { AdminUser } from './AdminUser';
/**
 Object class for AdminUserTenant
 */
export class AdminUserTenant {
  /** id field */
  id!: string | number;
  /** tenant field */
  tenant!: string;
  /** name field */
  /** @deprecated Use federated field to get name */
  name!: string;
  /** default field */
  default!: boolean;
  /** createdAt field */
  createdAt!: string;
  /** createdBy field */
  createdBy!: number;
  /** lastModifiedAt field */
  lastModifiedAt!: string;
  /** lastModifiedBy field */
  lastModifiedBy!: number;
  /** user field */
  user?: AdminUser;
  constructor(data: Partial<AdminUserTenant> = {}) {
    Object.assign(this, data);
  }
}