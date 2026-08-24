import { RoleAccess } from '../enum/RoleAccess';
/**
 Input object for RoleCreateInput
 */
export interface RoleCreateInput {
  /** Primary identifier for role definition */
  roleDefinitionId: string;
  /** The access for this role */
  access: RoleAccess;
  /** The id of the user this role belongs to */
  userId: number;
}