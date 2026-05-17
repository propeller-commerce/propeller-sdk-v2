import { Warehouse } from '../type/Warehouse';
import { WarehousesResponse } from '../type/WarehousesResponse';
import { WarehousesSearchInput } from '../type/WarehousesSearchInput';
import { CreateWarehouseInput } from '../type/CreateWarehouseInput';
import { UpdateWarehouseInput } from '../type/UpdateWarehouseInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as warehouseDoc } from '../generated/operations/warehouse';
import { document as warehousesDoc } from '../generated/operations/warehouses';
import { document as warehouseCreateDoc } from '../generated/operations/warehouseCreate';
import { document as warehouseUpdateDoc } from '../generated/operations/warehouseUpdate';
import type { WarehouseUpdateVariables } from '../generated/operationVariables';
/**
 Service class for Warehouse-related GraphQL operations
 */
export function warehouseService(client: GraphQLClient) {
  return {
    /**
       Fetches a single warehouse by ID
       * @param id Warehouse ID to fetch
       * @returns Promise<Warehouse> The warehouse data
       */
    async getWarehouse(id: number): Promise<Warehouse> {
      const result = await runOperation<{ warehouse: Warehouse }>(client, warehouseDoc, 'warehouse', { id });
      return result.data.warehouse as Warehouse;
    },
    /**
       Fetches a list of warehouses with search criteria
       * @param input Warehouse search input parameters
       * @returns Promise<WarehousesResponse> The warehouses response data
       */
    async getWarehouses(input?: WarehousesSearchInput): Promise<WarehousesResponse> {
      const result = await runOperation<{ warehouses: WarehousesResponse }>(client, warehousesDoc, 'warehouses', { input });
      return result.data.warehouses as WarehousesResponse;
    },
    /**
       Creates a new warehouse
       * @param input Warehouse creation input data
       * @returns Promise<Warehouse> The created warehouse
       */
    async createWarehouse(input: CreateWarehouseInput): Promise<Warehouse> {
      const result = await runOperation<{ warehouseCreate: Warehouse }>(client, warehouseCreateDoc, 'warehouseCreate', { input });
      return result.data.warehouseCreate as Warehouse;
    },
    /**
       Updates an existing warehouse
       * @param input Warehouse update input data
       * @returns Promise<Warehouse> The updated warehouse
       */
    async updateWarehouse(variables: WarehouseUpdateVariables): Promise<Warehouse> {
      const result = await runOperation<{ warehouseUpdate: Warehouse }>(client, warehouseUpdateDoc, 'warehouseUpdate', variables);
      return result.data.warehouseUpdate as Warehouse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `warehouseService(client)`.
 */
export class WarehouseService {
  private readonly _svc: ReturnType<typeof warehouseService>;
  constructor(client: GraphQLClient) { this._svc = warehouseService(client); }
  /**
   * Fetches a single warehouse by ID
   * @param id Warehouse ID to fetch
   */
  getWarehouse(id: number): Promise<Warehouse> { return this._svc.getWarehouse(id); }
  /**
   * Fetches a list of warehouses with search criteria
   * @param input Warehouse search input parameters
   */
  getWarehouses(input?: WarehousesSearchInput): Promise<WarehousesResponse> { return this._svc.getWarehouses(input); }
  /**
   * Creates a new warehouse
   * @param input Warehouse creation input data
   */
  createWarehouse(input: CreateWarehouseInput): Promise<Warehouse> { return this._svc.createWarehouse(input); }
  /**
   * Updates an existing warehouse
   * @param input Warehouse update input data
   */
  updateWarehouse(variables: WarehouseUpdateVariables): Promise<Warehouse> { return this._svc.updateWarehouse(variables); }
}
