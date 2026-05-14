import { AdminUser } from './AdminUser';
/**
 Object class for AdminUserTenant
 */
export interface AdminUserTenant {
  /** id field */
  id: string | number;
  /** tenant field */
  tenant: string;
  /** name field */
  name: string;
  /** default field */
  default: boolean;
  /** createdAt field */
  createdAt: string;
  /** createdBy field */
  createdBy: number;
  /** lastModifiedAt field */
  lastModifiedAt: string;
  /** lastModifiedBy field */
  lastModifiedBy: number;
  /** user field */
  user?: AdminUser;
}