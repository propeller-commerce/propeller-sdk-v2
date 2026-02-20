import { BaseService } from './BaseService';
import { Tenant } from '../type/Tenant';
import { TenantCreateInput } from '../type/TenantCreateInput';
import { TenantUpdateInput } from '../type/TenantUpdateInput';
/**
 Service class for Tenant-related GraphQL operations
 */
export class TenantService extends BaseService {
  /**
   Fetches the current tenant
   * @returns Promise<Tenant> The tenant data
   */
  async getTenant(): Promise<Tenant> {
    const result = await this.executeQuery('tenant', {});
    return new Tenant(result.data.tenant);
  }
  /**
   Creates a new tenant
   * @param input Tenant creation input data
   * @returns Promise<Tenant> The created tenant
   */
  async createTenant(input: TenantCreateInput): Promise<Tenant> {
    const variables = { input };
    const result = await this.executeMutation('tenantCreate', variables);
    return new Tenant(result.data.tenantCreate);
  }
  /**
   Updates an existing tenant
   * @param id Tenant ID to update
   * @param input Tenant update input data
   * @returns Promise<Tenant> The updated tenant
   */
  async updateTenant(id: string, input: TenantUpdateInput): Promise<Tenant> {
    const variables = { id, input };
    const result = await this.executeMutation('tenantUpdate', variables);
    return new Tenant(result.data.tenantUpdate);
  }
  /**
   Deletes a tenant by ID
   * @param id Tenant ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteTenant(id: string): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('tenantDelete', variables);
    return result.data.tenantDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}
