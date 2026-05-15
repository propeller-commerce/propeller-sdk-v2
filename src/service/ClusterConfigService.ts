import { BaseService } from './BaseService';
import { ClusterConfig } from '../type/ClusterConfig';
import { ClusterConfigResponse } from '../type/ClusterConfigResponse';
import { ClusterConfigCreateInput } from '../type/ClusterConfigCreateInput';
import { ClusterConfigSettingUpdateInput } from '../type/ClusterConfigSettingUpdateInput';
import { UpdateClusterConfigSettingResponse } from '../type/UpdateClusterConfigSettingResponse';
/**
 Service for managing cluster configurations
 * @extends BaseService
 */
export class ClusterConfigService extends BaseService {
  /**
   Retrieves a specific cluster configuration
   * @param clusterConfigId Cluster config ID
   * @returns Promise<ClusterConfigResponse> Cluster configuration data
   */
  async getClusterConfig(clusterConfigId: number): Promise<ClusterConfigResponse> {
    const variables = { clusterConfigId };
    const result = await this.executeQuery('clusterConfig', variables);
    return new ClusterConfigResponse(result.data.clusterConfig);
  }
  /**
   Retrieves cluster configurations
   * @returns Promise<ClusterConfigResponse[]> List of cluster configurations
   */
  async getClusterConfigs(): Promise<ClusterConfigResponse[]> {
    const result = await this.executeQuery('clusterConfigs', {});
    return result.data.clusterConfigs.map((x: any) => new ClusterConfigResponse(x));
  }
  /**
   Creates a new cluster configuration
   * @param input Cluster config creation input
   * @returns Promise<ClusterConfig> The created cluster configuration
   */
  async createClusterConfig(input: ClusterConfigCreateInput): Promise<ClusterConfigResponse> {
    const variables = { input };
    const result = await this.executeMutation('clusterConfigCreate', variables);
    return new ClusterConfigResponse(result.data.clusterConfigCreate);
  }
  /**
   Updates cluster configuration settings
   * @param clusterConfigId Cluster config ID
   * @param settingId Setting ID
   * @param input Cluster config setting update input
   * @returns Promise<UpdateClusterConfigSettingResponse> The update response
   */
  async updateClusterConfigSetting(clusterConfigId: number, settingId: number, input: ClusterConfigSettingUpdateInput): Promise<UpdateClusterConfigSettingResponse> {
    const variables = { clusterConfigId, settingId, input };
    const result = await this.executeMutation('clusterConfigUpdateSetting', variables);
    return new UpdateClusterConfigSettingResponse(result.data.clusterConfigUpdateSetting);
  }
}