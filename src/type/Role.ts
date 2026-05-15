import { RoleAccess } from '../enum/RoleAccess';
import { RoleDefinition } from './RoleDefinition';
/**
 Object class for Role
 */
export class Role {
  /** The unique identifier of the role */
  id!: string | number;
  /** The role definition for this role */
  roleDefinition!: RoleDefinition;
  /** The id of the user this role belongs to */
  userId!: number;
  /** The access for this role */
  access!: RoleAccess;
  /** Creation date */
  createdAt!: string;
  /** Last modified date */
  lastModifiedAt!: string;
  /** createdBy field */
  createdBy?: number;
  /** lastModifiedBy field */
  lastModifiedBy?: number;
  constructor(data: Partial<Role> = {}) {
    Object.assign(this, data);
  }

  /** Returns `id`. */
  getId(): string | number {
    return this.id;
  }
  /** Returns `roleDefinition` as a RoleDefinition instance (coerced on first access). */
  getRoleDefinition(): RoleDefinition | undefined {
    if (this.roleDefinition == null) return undefined;
    if (!(this.roleDefinition instanceof RoleDefinition)) {
      this.roleDefinition = new RoleDefinition(this.roleDefinition as any);
    }
    return this.roleDefinition;
  }
  /** Returns `userId`. */
  getUserId(): number {
    return this.userId;
  }
  /** Returns `access`. */
  getAccess(): RoleAccess {
    return this.access;
  }
  /** Returns `createdAt`. */
  getCreatedAt(): string {
    return this.createdAt;
  }
  /** Returns `lastModifiedAt`. */
  getLastModifiedAt(): string {
    return this.lastModifiedAt;
  }
  /** Returns `createdBy`. */
  getCreatedBy(): number | undefined {
    return this.createdBy;
  }
  /** Returns `lastModifiedBy`. */
  getLastModifiedBy(): number | undefined {
    return this.lastModifiedBy;
  }
}