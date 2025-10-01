import { BaseService } from './BaseService';
import { PurchaseAuthorizationConfig } from '../type/PurchaseAuthorizationConfig';
import { PurchaseAuthorizationConfigResponse } from '../type/PurchaseAuthorizationConfigResponse';
import { PurchaseAuthorizationConfigSearchInput } from '../type/PurchaseAuthorizationConfigSearchInput';
import { PurchaseAuthorizationConfigCreateInput } from '../type/PurchaseAuthorizationConfigCreateInput';
import { PurchaseAuthorizationConfigUpdateInput } from '../type/PurchaseAuthorizationConfigUpdateInput';
/**
 Service for managing purchase authorization configurations
 * @extends BaseService
 */
export class PurchaseAuthorizationConfigService extends BaseService {
  /**
   Retrieves a specific purchase authorization configuration
   * @param id Configuration ID
   * @returns Promise<PurchaseAuthorizationConfig> Purchase authorization configuration data
   */
  async getPurchaseAuthorizationConfig(id: number): Promise<PurchaseAuthorizationConfig> {
    const variables = { id };
    const result = await this.executeQuery('purchaseAuthorizationConfig', variables);
    return new PurchaseAuthorizationConfig(result.data.purchaseAuthorizationConfig);
  }
  /**
   Retrieves purchase authorization configurations with search
   * @param input Search input parameters
   * @returns Promise<PurchaseAuthorizationConfigResponse[]> List of purchase authorization configurations
   */
  async getPurchaseAuthorizationConfigs(input?: PurchaseAuthorizationConfigSearchInput): Promise<PurchaseAuthorizationConfigResponse[]> {
    const variables = { input };
    const result = await this.executeQuery('purchaseAuthorizationConfigs', variables);
    return result.data.purchaseAuthorizationConfigs.map((config: any) => new PurchaseAuthorizationConfigResponse(config));
  }
  /**
   Creates a new purchase authorization configuration
   * @param input Configuration creation input
   * @returns Promise<PurchaseAuthorizationConfig> The created configuration
   */
  async createPurchaseAuthorizationConfig(input: PurchaseAuthorizationConfigCreateInput): Promise<PurchaseAuthorizationConfig> {
    const variables = { input };
    const result = await this.executeMutation('purchaseAuthorizationConfigCreate', variables);
    return new PurchaseAuthorizationConfig(result.data.purchaseAuthorizationConfigCreate);
  }
  /**
   Updates an existing purchase authorization configuration
   * @param input Configuration update input
   * @returns Promise<PurchaseAuthorizationConfig> The updated configuration
   */
  async updatePurchaseAuthorizationConfig(input: PurchaseAuthorizationConfigUpdateInput): Promise<PurchaseAuthorizationConfig> {
    const variables = { input };
    const result = await this.executeMutation('purchaseAuthorizationConfigUpdate', variables);
    return new PurchaseAuthorizationConfig(result.data.purchaseAuthorizationConfigUpdate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}