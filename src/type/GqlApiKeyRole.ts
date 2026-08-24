import { RoleAccess } from '../enum/RoleAccess';
/**
 Object class for GqlApiKeyRole
 */
export interface GqlApiKeyRole {
  /** Name of the role definition */
  roleDefinitionName: string;
  /** Access level for this role */
  access: RoleAccess;
}
