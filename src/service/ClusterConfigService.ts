import { ClusterConfig } from '../type/ClusterConfig';
import { ClusterConfigResponse } from '../type/ClusterConfigResponse';
import { ClusterConfigCreateInput } from '../type/ClusterConfigCreateInput';
import { ClusterConfigSettingUpdateInput } from '../type/ClusterConfigSettingUpdateInput';
import { UpdateClusterConfigSettingResponse } from '../type/UpdateClusterConfigSettingResponse';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as clusterConfigDoc } from '../generated/operations/clusterConfig';
import { document as clusterConfigsDoc } from '../generated/operations/clusterConfigs';
import { document as clusterConfigCreateDoc } from '../generated/operations/clusterConfigCreate';
import { document as clusterConfigUpdateSettingDoc } from '../generated/operations/clusterConfigUpdateSetting';
/**
 Service for managing cluster configurations
 */
export function clusterConfigService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific cluster configuration
       * @param clusterConfigId Cluster config ID
       * @returns Promise<ClusterConfigResponse> Cluster configuration data
       */
    async getClusterConfig(clusterConfigId: number): Promise<ClusterConfigResponse> {
      const result = await runOperation(client, clusterConfigDoc, 'clusterConfig', { clusterConfigId });
      return result.data.clusterConfig as ClusterConfigResponse;
    },
    /**
       Retrieves cluster configurations
       * @returns Promise<ClusterConfigResponse[]> List of cluster configurations
       */
    async getClusterConfigs(): Promise<ClusterConfigResponse[]> {
      const result = await runOperation(client, clusterConfigsDoc, 'clusterConfigs', {  });
      return result.data.clusterConfigs as ClusterConfigResponse[];
    },
    /**
       Creates a new cluster configuration
       * @param input Cluster config creation input
       * @returns Promise<ClusterConfig> The created cluster configuration
       */
    async createClusterConfig(input: ClusterConfigCreateInput): Promise<ClusterConfigResponse> {
      const result = await runOperation(client, clusterConfigCreateDoc, 'clusterConfigCreate', { input });
      return result.data.clusterConfigCreate as ClusterConfigResponse;
    },
    /**
       Updates cluster configuration settings
       * @param clusterConfigId Cluster config ID
       * @param settingId Setting ID
       * @param input Cluster config setting update input
       * @returns Promise<UpdateClusterConfigSettingResponse> The update response
       */
    async updateClusterConfigSetting(clusterConfigId: number, settingId: number, input: ClusterConfigSettingUpdateInput): Promise<UpdateClusterConfigSettingResponse> {
      const result = await runOperation(client, clusterConfigUpdateSettingDoc, 'clusterConfigUpdateSetting', { clusterConfigId, settingId, input });
      return result.data.clusterConfigUpdateSetting as UpdateClusterConfigSettingResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `clusterConfigService(client)`.
 */
export class ClusterConfigService {
  private readonly _svc: ReturnType<typeof clusterConfigService>;
  constructor(client: GraphQLClient) { this._svc = clusterConfigService(client); }
  /**
   * Retrieves a specific cluster configuration
   * @param clusterConfigId Cluster config ID
   */
  getClusterConfig(clusterConfigId: number): Promise<ClusterConfigResponse> { return this._svc.getClusterConfig(clusterConfigId); }
  /**
   * Retrieves cluster configurations
   */
  getClusterConfigs(): Promise<ClusterConfigResponse[]> { return this._svc.getClusterConfigs(); }
  /**
   * Creates a new cluster configuration
   * @param input Cluster config creation input
   */
  createClusterConfig(input: ClusterConfigCreateInput): Promise<ClusterConfigResponse> { return this._svc.createClusterConfig(input); }
  /**
   * Updates cluster configuration settings
   * @param clusterConfigId Cluster config ID
   * @param settingId Setting ID
   * @param input Cluster config setting update input
   */
  updateClusterConfigSetting(clusterConfigId: number, settingId: number, input: ClusterConfigSettingUpdateInput): Promise<UpdateClusterConfigSettingResponse> { return this._svc.updateClusterConfigSetting(clusterConfigId, settingId, input); }
}
