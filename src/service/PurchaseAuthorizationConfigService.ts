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
    return result.data.purchaseAuthorizationConfig as PurchaseAuthorizationConfig;
  }
  /**
   Retrieves purchase authorization configurations with search
   * @param input Search input parameters
   * @returns Promise<PurchaseAuthorizationConfigResponse[]> List of purchase authorization configurations
   */
  async getPurchaseAuthorizationConfigs(input?: PurchaseAuthorizationConfigSearchInput): Promise<PurchaseAuthorizationConfigResponse[]> {
    const variables = { input };
    const result = await this.executeQuery('purchaseAuthorizationConfigs', variables);
    return result.data.purchaseAuthorizationConfigs as PurchaseAuthorizationConfigResponse[];
  }
  /**
   Creates a new purchase authorization configuration
   * @param input Configuration creation input
   * @returns Promise<PurchaseAuthorizationConfig> The created configuration
   */
  async createPurchaseAuthorizationConfig(input: PurchaseAuthorizationConfigCreateInput): Promise<PurchaseAuthorizationConfig> {
    const variables = { input };
    const result = await this.executeMutation('purchaseAuthorizationConfigCreate', variables);
    return result.data.purchaseAuthorizationConfigCreate as PurchaseAuthorizationConfig;
  }
  /**
   Updates an existing purchase authorization configuration
   * @param id Configuration ID
   * @param input Configuration update input
   * @returns Promise<PurchaseAuthorizationConfig> The updated configuration
   */
  async updatePurchaseAuthorizationConfig(id: string, input: PurchaseAuthorizationConfigUpdateInput): Promise<PurchaseAuthorizationConfig> {
    const variables = { id, input };
    const result = await this.executeMutation('purchaseAuthorizationConfigUpdate', variables);
    return result.data.purchaseAuthorizationConfigUpdate as PurchaseAuthorizationConfig;
  }
  /**
   Deletes a purchase authorization configuration
   * @param id Configuration ID
   * @returns Promise<boolean> True if deletion was successful
   */
  async deletePurchaseAuthorizationConfig(id: string): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('purchaseAuthorizationConfigDelete', variables);
    return result.data.purchaseAuthorizationConfigDelete;
  }
}