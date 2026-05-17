import { Tenant } from '../type/Tenant';
import { TenantCreateInput } from '../type/TenantCreateInput';
import { TenantUpdateInput } from '../type/TenantUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as tenantDoc } from '../generated/operations/tenant';
import { document as tenantCreateDoc } from '../generated/operations/tenantCreate';
import { document as tenantUpdateDoc } from '../generated/operations/tenantUpdate';
import { document as tenantDeleteDoc } from '../generated/operations/tenantDelete';
/**
 Service class for Tenant-related GraphQL operations
 */
export function tenantService(client: GraphQLClient) {
  return {
    /**
       Fetches the current tenant
       * @returns Promise<Tenant> The tenant data
       */
    async getTenant(): Promise<Tenant> {
      const result = await runOperation(client, tenantDoc, 'tenant');
      return result.data.tenant as Tenant;
    },
    /**
       Creates a new tenant
       * @param input Tenant creation input data
       * @returns Promise<Tenant> The created tenant
       */
    async createTenant(input: TenantCreateInput): Promise<Tenant> {
      const result = await runOperation(client, tenantCreateDoc, 'tenantCreate', { input });
      return result.data.tenantCreate as Tenant;
    },
    /**
       Updates an existing tenant
       * @param id Tenant ID to update
       * @param input Tenant update input data
       * @returns Promise<Tenant> The updated tenant
       */
    async updateTenant(id: string, input: TenantUpdateInput): Promise<Tenant> {
      const result = await runOperation(client, tenantUpdateDoc, 'tenantUpdate', { id, input });
      return result.data.tenantUpdate as Tenant;
    },
    /**
       Deletes a tenant by ID
       * @param id Tenant ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteTenant(id: string): Promise<boolean> {
      const result = await runOperation(client, tenantDeleteDoc, 'tenantDelete', { id });
      return result.data.tenantDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `tenantService(client)`.
 */
export class TenantService {
  private readonly _svc: ReturnType<typeof tenantService>;
  constructor(client: GraphQLClient) { this._svc = tenantService(client); }
  /**
   * Fetches the current tenant
   */
  getTenant(): Promise<Tenant> { return this._svc.getTenant(); }
  /**
   * Creates a new tenant
   * @param input Tenant creation input data
   */
  createTenant(input: TenantCreateInput): Promise<Tenant> { return this._svc.createTenant(input); }
  /**
   * Updates an existing tenant
   * @param id Tenant ID to update
   * @param input Tenant update input data
   */
  updateTenant(id: string, input: TenantUpdateInput): Promise<Tenant> { return this._svc.updateTenant(id, input); }
  /**
   * Deletes a tenant by ID
   * @param id Tenant ID to delete
   */
  deleteTenant(id: string): Promise<boolean> { return this._svc.deleteTenant(id); }
}

