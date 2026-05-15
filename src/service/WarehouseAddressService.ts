import { BaseService } from './BaseService';
import { WarehouseAddress } from '../type/WarehouseAddress';
import { CreateWarehouseAddressInput } from '../type/CreateWarehouseAddressInput';
import { UpdateWarehouseAddressInput } from '../type/UpdateWarehouseAddressInput';
/**
 Service for managing warehouse addresses
 * @extends BaseService
 */
export class WarehouseAddressService extends BaseService {
  /**
   Creates a new warehouse address
   * @param input Warehouse address creation input
   * @returns Promise<WarehouseAddress> The created warehouse address
   */
  async createWarehouseAddress(input: CreateWarehouseAddressInput): Promise<WarehouseAddress> {
    const variables = { input };
    const result = await this.executeMutation('warehouseAddressCreate', variables);
    return new WarehouseAddress(result.data.warehouseAddressCreate);
  }
  /**
   Updates an existing warehouse address
   * @param input Warehouse address update input
   * @returns Promise<WarehouseAddress> The updated warehouse address
   */
  async updateWarehouseAddress(input: UpdateWarehouseAddressInput): Promise<WarehouseAddress> {
    const variables = { input };
    const result = await this.executeMutation('warehouseAddressUpdate', variables);
    return new WarehouseAddress(result.data.warehouseAddressUpdate);
  }
  /**
   Deletes a warehouse address
   * @param id WarehouseAddress ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteWarehouseAddress(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('warehouseAddressDelete', variables);
    return result.data.warehouseAddressDelete;
  }
}