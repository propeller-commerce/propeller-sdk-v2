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

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `tenant`. */
  getTenant(): string {
    return this.tenant;
  }
  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `default`. */
  getDefault(): boolean {
    return this.default;
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
  /** Returns `user` as a AdminUser instance (coerced on first access). */
  getUser(): AdminUser | undefined {
    if (this.user == null) return undefined;
    if (!(this.user instanceof AdminUser)) {
      this.user = new AdminUser(this.user as any);
    }
    return this.user;
  }
}