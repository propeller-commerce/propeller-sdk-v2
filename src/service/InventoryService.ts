import { BaseService } from './BaseService';
import { InventoryResponse } from '../type/InventoryResponse';
/**
 Service class for Inventory-related GraphQL operations
 */
export class InventoryService extends BaseService {
  /**
   Fetches inventory with search criteria
   * @param input Inventory search input parameters
   * @returns Promise<InventoryResponse> The inventory response
   */
  async getInventory(input?: any): Promise<InventoryResponse> {
    const variables = { input };
    const result = await this.executeQuery('inventory', variables);
    return new InventoryResponse(result.data.inventory);
  }
}
