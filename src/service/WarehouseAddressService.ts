import { WarehouseAddress } from '../type/WarehouseAddress';
import { CreateWarehouseAddressInput } from '../type/CreateWarehouseAddressInput';
import { UpdateWarehouseAddressInput } from '../type/UpdateWarehouseAddressInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as warehouseAddressCreateDoc } from '../generated/operations/warehouseAddressCreate';
import { document as warehouseAddressUpdateDoc } from '../generated/operations/warehouseAddressUpdate';
import { document as warehouseAddressDeleteDoc } from '../generated/operations/warehouseAddressDelete';
import type { WarehouseAddressCreateVariables, WarehouseAddressDeleteVariables, WarehouseAddressUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing warehouse addresses
 */
export function warehouseAddressService(client: GraphQLClient) {
  return {
    /**
       Creates a new warehouse address
       * @param input Warehouse address creation input
       * @returns Promise<WarehouseAddress> The created warehouse address
       */
    async createWarehouseAddress(variables: WarehouseAddressCreateVariables): Promise<WarehouseAddress> {
      const result = await runOperation(client, warehouseAddressCreateDoc, 'warehouseAddressCreate', variables);
      return result.data.warehouseAddressCreate as WarehouseAddress;
    },
    /**
       Updates an existing warehouse address
       * @param input Warehouse address update input
       * @returns Promise<WarehouseAddress> The updated warehouse address
       */
    async updateWarehouseAddress(variables: WarehouseAddressUpdateVariables): Promise<WarehouseAddress> {
      const result = await runOperation(client, warehouseAddressUpdateDoc, 'warehouseAddressUpdate', variables);
      return result.data.warehouseAddressUpdate as WarehouseAddress;
    },
    /**
       Deletes a warehouse address
       * @param id WarehouseAddress ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteWarehouseAddress(variables: WarehouseAddressDeleteVariables): Promise<boolean> {
      const result = await runOperation(client, warehouseAddressDeleteDoc, 'warehouseAddressDelete', variables);
      return result.data.warehouseAddressDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `warehouseAddressService(client)`.
 */
export class WarehouseAddressService {
  private readonly _svc: ReturnType<typeof warehouseAddressService>;
  constructor(client: GraphQLClient) { this._svc = warehouseAddressService(client); }
  /**
   * Creates a new warehouse address
   * @param input Warehouse address creation input
   */
  createWarehouseAddress(variables: WarehouseAddressCreateVariables): Promise<WarehouseAddress> { return this._svc.createWarehouseAddress(variables); }
  /**
   * Updates an existing warehouse address
   * @param input Warehouse address update input
   */
  updateWarehouseAddress(variables: WarehouseAddressUpdateVariables): Promise<WarehouseAddress> { return this._svc.updateWarehouseAddress(variables); }
  /**
   * Deletes a warehouse address
   * @param id WarehouseAddress ID to delete
   */
  deleteWarehouseAddress(variables: WarehouseAddressDeleteVariables): Promise<boolean> { return this._svc.deleteWarehouseAddress(variables); }
}
