import { BaseService } from './BaseService';
import { Inventory } from '../type/Inventory';
/**
 Service class for Inventory-related GraphQL operations
 */
export class InventoryService extends BaseService {
  /**
   Fetches inventory with search criteria
   * @param input Inventory search input parameters
   * @returns Promise<Inventory[]> The inventory data array
   */
  async getInventory(input?: any): Promise<Inventory[]> {
    const variables = { input };
    const result = await this.executeQuery('inventory', variables);
    return result.data.inventory.map((item: any) => new Inventory(item));
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}