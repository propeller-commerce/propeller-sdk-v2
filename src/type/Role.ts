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
}