import { RoleAccess } from '../enum/RoleAccess';
/**
 Input object for GqlApiKeyRoleInput
 */
export interface GqlApiKeyRoleInput {
  /** Name of the role definition */
  roleDefinitionName: string;
  /** Access level for this role */
  access: RoleAccess;
}
