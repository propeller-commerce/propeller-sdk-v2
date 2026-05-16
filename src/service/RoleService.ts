import { Role } from '../type/Role';
import { RoleResponse } from '../type/RoleResponse';
import { RoleSearchInput } from '../type/RoleSearchInput';
import { RoleCreateInput } from '../type/RoleCreateInput';
import { RoleUpdateInput } from '../type/RoleUpdateInput';
import { RoleDefinition } from '../type/RoleDefinition';
import { RoleDefinitionResponse } from '../type/RoleDefinitionResponse';
import { RoleDefinitionSearchInput } from '../type/RoleDefinitionSearchInput';
import { RoleDefinitionCreateInput } from '../type/RoleDefinitionCreateInput';
import { RoleDefinitionUpdateInput } from '../type/RoleDefinitionUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as roleDoc } from '../generated/operations/role';
import { document as rolesDoc } from '../generated/operations/roles';
import { document as roleCreateDoc } from '../generated/operations/roleCreate';
import { document as roleUpdateDoc } from '../generated/operations/roleUpdate';
import { document as roleDefinitionDoc } from '../generated/operations/roleDefinition';
import { document as roleDefinitionsDoc } from '../generated/operations/roleDefinitions';
import { document as roleDefinitionCreateDoc } from '../generated/operations/roleDefinitionCreate';
import { document as roleDefinitionUpdateDoc } from '../generated/operations/roleDefinitionUpdate';
/**
 Service class for Role and RoleDefinition-related GraphQL operations
 */
export function roleService(client: GraphQLClient) {
  return {
    /**
       Fetches a single role by ID
       * @param id Role ID to fetch
       * @returns Promise<Role> The role data
       */
    async getRole(id: number): Promise<Role> {
      const result = await runOperation(client, roleDoc, 'role', { id });
      return result.data.role as Role;
    },
    /**
       Fetches a list of roles with search criteria
       * @param input Role search input parameters
       * @returns Promise<RoleResponse> The roles response data
       */
    async getRoles(input?: RoleSearchInput): Promise<RoleResponse> {
      const result = await runOperation(client, rolesDoc, 'roles', { input });
      return result.data.roles as RoleResponse;
    },
    /**
       Creates a new role
       * @param input Role creation input data
       * @returns Promise<Role> The created role
       */
    async createRole(input: RoleCreateInput): Promise<Role> {
      const result = await runOperation(client, roleCreateDoc, 'roleCreate', { input });
      return result.data.roleCreate as Role;
    },
    /**
       Updates an existing role
       * @param input Role update input data
       * @returns Promise<Role> The updated role
       */
    async updateRole(input: RoleUpdateInput): Promise<Role> {
      const result = await runOperation(client, roleUpdateDoc, 'roleUpdate', { input });
      return result.data.roleUpdate as Role;
    },
    /**
       Fetches a single role definition by ID
       * @param id RoleDefinition ID to fetch
       * @returns Promise<RoleDefinition> The role definition data
       */
    async getRoleDefinition(id: number): Promise<RoleDefinition> {
      const result = await runOperation(client, roleDefinitionDoc, 'roleDefinition', { id });
      return result.data.roleDefinition as RoleDefinition;
    },
    /**
       Fetches a list of role definitions with search criteria
       * @param input RoleDefinition search input parameters
       * @returns Promise<RoleDefinitionResponse> The role definitions response data
       */
    async getRoleDefinitions(input?: RoleDefinitionSearchInput): Promise<RoleDefinitionResponse> {
      const result = await runOperation(client, roleDefinitionsDoc, 'roleDefinitions', { input });
      return result.data.roleDefinitions as RoleDefinitionResponse;
    },
    /**
       Creates a new role definition
       * @param input RoleDefinition creation input data
       * @returns Promise<RoleDefinition> The created role definition
       */
    async createRoleDefinition(input: RoleDefinitionCreateInput): Promise<RoleDefinition> {
      const result = await runOperation(client, roleDefinitionCreateDoc, 'roleDefinitionCreate', { input });
      return result.data.roleDefinitionCreate as RoleDefinition;
    },
    /**
       Updates an existing role definition
       * @param input RoleDefinition update input data
       * @returns Promise<RoleDefinition> The updated role definition
       */
    async updateRoleDefinition(input: RoleDefinitionUpdateInput): Promise<RoleDefinition> {
      const result = await runOperation(client, roleDefinitionUpdateDoc, 'roleDefinitionUpdate', { input });
      return result.data.roleDefinitionUpdate as RoleDefinition;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `roleService(client)`.
 */
export class RoleService {
  private readonly _svc: ReturnType<typeof roleService>;
  constructor(client: GraphQLClient) { this._svc = roleService(client); }
  /**
   * Fetches a single role by ID
   * @param id Role ID to fetch
   */
  getRole(id: number): Promise<Role> { return this._svc.getRole(id); }
  /**
   * Fetches a list of roles with search criteria
   * @param input Role search input parameters
   */
  getRoles(input?: RoleSearchInput): Promise<RoleResponse> { return this._svc.getRoles(input); }
  /**
   * Creates a new role
   * @param input Role creation input data
   */
  createRole(input: RoleCreateInput): Promise<Role> { return this._svc.createRole(input); }
  /**
   * Updates an existing role
   * @param input Role update input data
   */
  updateRole(input: RoleUpdateInput): Promise<Role> { return this._svc.updateRole(input); }
  /**
   * Fetches a single role definition by ID
   * @param id RoleDefinition ID to fetch
   */
  getRoleDefinition(id: number): Promise<RoleDefinition> { return this._svc.getRoleDefinition(id); }
  /**
   * Fetches a list of role definitions with search criteria
   * @param input RoleDefinition search input parameters
   */
  getRoleDefinitions(input?: RoleDefinitionSearchInput): Promise<RoleDefinitionResponse> { return this._svc.getRoleDefinitions(input); }
  /**
   * Creates a new role definition
   * @param input RoleDefinition creation input data
   */
  createRoleDefinition(input: RoleDefinitionCreateInput): Promise<RoleDefinition> { return this._svc.createRoleDefinition(input); }
  /**
   * Updates an existing role definition
   * @param input RoleDefinition update input data
   */
  updateRoleDefinition(input: RoleDefinitionUpdateInput): Promise<RoleDefinition> { return this._svc.updateRoleDefinition(input); }
}
