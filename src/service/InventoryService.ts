import { InventoryResponse } from '../type/InventoryResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as inventoryDoc } from '../generated/operations/inventory';
/**
 Service class for Inventory-related GraphQL operations
 */
export function inventoryService(client: GraphQLClient) {
  return {
    /**
       Fetches inventory with search criteria
       * @param input Inventory search input parameters
       * @returns Promise<InventoryResponse> The inventory response
       */
    async getInventory(input?: any): Promise<InventoryResponse> {
      const result = await runOperation(client, inventoryDoc, 'inventory', { input });
      return result.data.inventory as InventoryResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `inventoryService(client)`.
 */
export class InventoryService {
  private readonly _svc: ReturnType<typeof inventoryService>;
  constructor(client: GraphQLClient) { this._svc = inventoryService(client); }
  /**
   * Fetches inventory with search criteria
   * @param input Inventory search input parameters
   */
  getInventory(input?: any): Promise<InventoryResponse> { return this._svc.getInventory(input); }
}

