import { RoleAccess } from '../enum/RoleAccess';
/**
 Input object for RoleUpdateInput
 */
export interface RoleUpdateInput {
  /** The access for this role */
  access: RoleAccess;
}