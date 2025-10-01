import { BaseService } from './BaseService';
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
/**
 Service class for Role and RoleDefinition-related GraphQL operations
 */
export class RoleService extends BaseService {
  /**
   Fetches a single role by ID
   * @param id Role ID to fetch
   * @returns Promise<Role> The role data
   */
  async getRole(id: number): Promise<Role> {
    const variables = { id };
    const result = await this.executeQuery('role', variables);
    return new Role(result.data.role);
  }
  /**
   Fetches a list of roles with search criteria
   * @param input Role search input parameters
   * @returns Promise<RoleResponse> The roles response data
   */
  async getRoles(input?: RoleSearchInput): Promise<RoleResponse> {
    const variables = { input };
    const result = await this.executeQuery('roles', variables);
    return new RoleResponse(result.data.roles);
  }
  /**
   Creates a new role
   * @param input Role creation input data
   * @returns Promise<Role> The created role
   */
  async createRole(input: RoleCreateInput): Promise<Role> {
    const variables = { input };
    const result = await this.executeMutation('roleCreate', variables);
    return new Role(result.data.roleCreate);
  }
  /**
   Updates an existing role
   * @param input Role update input data
   * @returns Promise<Role> The updated role
   */
  async updateRole(input: RoleUpdateInput): Promise<Role> {
    const variables = { input };
    const result = await this.executeMutation('roleUpdate', variables);
    return new Role(result.data.roleUpdate);
  }
  /**
   Fetches a single role definition by ID
   * @param id RoleDefinition ID to fetch
   * @returns Promise<RoleDefinition> The role definition data
   */
  async getRoleDefinition(id: number): Promise<RoleDefinition> {
    const variables = { id };
    const result = await this.executeQuery('roleDefinition', variables);
    return new RoleDefinition(result.data.roleDefinition);
  }
  /**
   Fetches a list of role definitions with search criteria
   * @param input RoleDefinition search input parameters
   * @returns Promise<RoleDefinitionResponse> The role definitions response data
   */
  async getRoleDefinitions(input?: RoleDefinitionSearchInput): Promise<RoleDefinitionResponse> {
    const variables = { input };
    const result = await this.executeQuery('roleDefinitions', variables);
    return new RoleDefinitionResponse(result.data.roleDefinitions);
  }
  /**
   Creates a new role definition
   * @param input RoleDefinition creation input data
   * @returns Promise<RoleDefinition> The created role definition
   */
  async createRoleDefinition(input: RoleDefinitionCreateInput): Promise<RoleDefinition> {
    const variables = { input };
    const result = await this.executeMutation('roleDefinitionCreate', variables);
    return new RoleDefinition(result.data.roleDefinitionCreate);
  }
  /**
   Updates an existing role definition
   * @param input RoleDefinition update input data
   * @returns Promise<RoleDefinition> The updated role definition
   */
  async updateRoleDefinition(input: RoleDefinitionUpdateInput): Promise<RoleDefinition> {
    const variables = { input };
    const result = await this.executeMutation('roleDefinitionUpdate', variables);
    return new RoleDefinition(result.data.roleDefinitionUpdate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}