import { BaseService } from './BaseService';
import { Warehouse } from '../type/Warehouse';
import { WarehousesResponse } from '../type/WarehousesResponse';
import { WarehousesSearchInput } from '../type/WarehousesSearchInput';
import { CreateWarehouseInput } from '../type/CreateWarehouseInput';
import { UpdateWarehouseInput } from '../type/UpdateWarehouseInput';
/**
 Service class for Warehouse-related GraphQL operations
 */
export class WarehouseService extends BaseService {
  /**
   Fetches a single warehouse by ID
   * @param id Warehouse ID to fetch
   * @returns Promise<Warehouse> The warehouse data
   */
  async getWarehouse(id: number): Promise<Warehouse> {
    const variables = { id };
    const result = await this.executeQuery('warehouse', variables);
    return new Warehouse(result.data.warehouse);
  }
  /**
   Fetches a list of warehouses with search criteria
   * @param input Warehouse search input parameters
   * @returns Promise<WarehousesResponse> The warehouses response data
   */
  async getWarehouses(input?: WarehousesSearchInput): Promise<WarehousesResponse> {
    const variables = { input };
    const result = await this.executeQuery('warehouses', variables);
    return new WarehousesResponse(result.data.warehouses);
  }
  /**
   Creates a new warehouse
   * @param input Warehouse creation input data
   * @returns Promise<Warehouse> The created warehouse
   */
  async createWarehouse(input: CreateWarehouseInput): Promise<Warehouse> {
    const variables = { input };
    const result = await this.executeMutation('warehouseCreate', variables);
    return new Warehouse(result.data.warehouseCreate);
  }
  /**
   Updates an existing warehouse
   * @param input Warehouse update input data
   * @returns Promise<Warehouse> The updated warehouse
   */
  async updateWarehouse(input: UpdateWarehouseInput): Promise<Warehouse> {
    const variables = { input };
    const result = await this.executeMutation('warehouseUpdate', variables);
    return new Warehouse(result.data.warehouseUpdate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}