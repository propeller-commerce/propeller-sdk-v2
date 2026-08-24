import { PurchaseAuthorizationConfig } from '../type/PurchaseAuthorizationConfig';
import { PurchaseAuthorizationConfigResponse } from '../type/PurchaseAuthorizationConfigResponse';
import { PurchaseAuthorizationConfigSearchInput } from '../type/PurchaseAuthorizationConfigSearchInput';
import { PurchaseAuthorizationConfigCreateInput } from '../type/PurchaseAuthorizationConfigCreateInput';
import { PurchaseAuthorizationConfigUpdateInput } from '../type/PurchaseAuthorizationConfigUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as purchaseAuthorizationConfigDoc } from '../generated/operations/purchaseAuthorizationConfig';
import { document as purchaseAuthorizationConfigsDoc } from '../generated/operations/purchaseAuthorizationConfigs';
import { document as purchaseAuthorizationConfigCreateDoc } from '../generated/operations/purchaseAuthorizationConfigCreate';
import { document as purchaseAuthorizationConfigUpdateDoc } from '../generated/operations/purchaseAuthorizationConfigUpdate';
import { document as purchaseAuthorizationConfigDeleteDoc } from '../generated/operations/purchaseAuthorizationConfigDelete';
/**
 Service for managing purchase authorization configurations
 */
export function purchaseAuthorizationConfigService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific purchase authorization configuration
       * @param id Configuration ID
       * @returns Promise<PurchaseAuthorizationConfig> Purchase authorization configuration data
       */
    async getPurchaseAuthorizationConfig(id: number): Promise<PurchaseAuthorizationConfig> {
      const result = await runOperation<{ purchaseAuthorizationConfig: PurchaseAuthorizationConfig }>(client, purchaseAuthorizationConfigDoc, 'purchaseAuthorizationConfig', { id });
      return result.data.purchaseAuthorizationConfig as PurchaseAuthorizationConfig;
    },
    /**
       Retrieves purchase authorization configurations with search
       * @param input Search input parameters
       * @returns Promise<PurchaseAuthorizationConfigResponse[]> List of purchase authorization configurations
       */
    async getPurchaseAuthorizationConfigs(input?: PurchaseAuthorizationConfigSearchInput): Promise<PurchaseAuthorizationConfigResponse> {
      const result = await runOperation<{ purchaseAuthorizationConfigs: PurchaseAuthorizationConfigResponse }>(client, purchaseAuthorizationConfigsDoc, 'purchaseAuthorizationConfigs', { input });
      return result.data.purchaseAuthorizationConfigs as PurchaseAuthorizationConfigResponse;
    },
    /**
       Creates a new purchase authorization configuration
       * @param input Configuration creation input
       * @returns Promise<PurchaseAuthorizationConfig> The created configuration
       */
    async createPurchaseAuthorizationConfig(input: PurchaseAuthorizationConfigCreateInput): Promise<PurchaseAuthorizationConfig> {
      const result = await runOperation<{ purchaseAuthorizationConfigCreate: PurchaseAuthorizationConfig }>(client, purchaseAuthorizationConfigCreateDoc, 'purchaseAuthorizationConfigCreate', { input });
      return result.data.purchaseAuthorizationConfigCreate as PurchaseAuthorizationConfig;
    },
    /**
       Updates an existing purchase authorization configuration
       * @param id Configuration ID
       * @param input Configuration update input
       * @returns Promise<PurchaseAuthorizationConfig> The updated configuration
       */
    async updatePurchaseAuthorizationConfig(id: string, input: PurchaseAuthorizationConfigUpdateInput): Promise<PurchaseAuthorizationConfig> {
      const result = await runOperation<{ purchaseAuthorizationConfigUpdate: PurchaseAuthorizationConfig }>(client, purchaseAuthorizationConfigUpdateDoc, 'purchaseAuthorizationConfigUpdate', { id, input });
      return result.data.purchaseAuthorizationConfigUpdate as PurchaseAuthorizationConfig;
    },
    /**
       Deletes a purchase authorization configuration
       * @param id Configuration ID
       * @returns Promise<boolean> True if deletion was successful
       */
    async deletePurchaseAuthorizationConfig(id: string): Promise<boolean> {
      const result = await runOperation<{ purchaseAuthorizationConfigDelete: boolean }>(client, purchaseAuthorizationConfigDeleteDoc, 'purchaseAuthorizationConfigDelete', { id });
      return result.data.purchaseAuthorizationConfigDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `purchaseAuthorizationConfigService(client)`.
 */
export class PurchaseAuthorizationConfigService {
  private readonly _svc: ReturnType<typeof purchaseAuthorizationConfigService>;
  constructor(client: GraphQLClient) { this._svc = purchaseAuthorizationConfigService(client); }
  /**
   * Retrieves a specific purchase authorization configuration
   * @param id Configuration ID
   */
  getPurchaseAuthorizationConfig(id: number): Promise<PurchaseAuthorizationConfig> { return this._svc.getPurchaseAuthorizationConfig(id); }
  /**
   * Retrieves purchase authorization configurations with search
   * @param input Search input parameters
   */
  getPurchaseAuthorizationConfigs(input?: PurchaseAuthorizationConfigSearchInput): Promise<PurchaseAuthorizationConfigResponse> { return this._svc.getPurchaseAuthorizationConfigs(input); }
  /**
   * Creates a new purchase authorization configuration
   * @param input Configuration creation input
   */
  createPurchaseAuthorizationConfig(input: PurchaseAuthorizationConfigCreateInput): Promise<PurchaseAuthorizationConfig> { return this._svc.createPurchaseAuthorizationConfig(input); }
  /**
   * Updates an existing purchase authorization configuration
   * @param id Configuration ID
   * @param input Configuration update input
   */
  updatePurchaseAuthorizationConfig(id: string, input: PurchaseAuthorizationConfigUpdateInput): Promise<PurchaseAuthorizationConfig> { return this._svc.updatePurchaseAuthorizationConfig(id, input); }
  /**
   * Deletes a purchase authorization configuration
   * @param id Configuration ID
   */
  deletePurchaseAuthorizationConfig(id: string): Promise<boolean> { return this._svc.deletePurchaseAuthorizationConfig(id); }
}
