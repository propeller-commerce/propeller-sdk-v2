import { BaseService } from './BaseService';
import { ClusterConfig } from '../type/ClusterConfig';
import { ClusterConfigResponse } from '../type/ClusterConfigResponse';
import { ClusterConfigCreateInput } from '../type/ClusterConfigCreateInput';
import { ClusterConfigSettingUpdateInput } from '../type/ClusterConfigSettingUpdateInput';
/**
 Service for managing cluster configurations
 * @extends BaseService
 */
export class ClusterConfigService extends BaseService {
  /**
   Retrieves a specific cluster configuration
   * @param id Cluster config ID
   * @returns Promise<ClusterConfig> Cluster configuration data
   */
  async getClusterConfig(id: number): Promise<ClusterConfig> {
    const variables = { id };
    const result = await this.executeQuery('clusterConfig', variables);
    return new ClusterConfig(result.data.clusterConfig);
  }
  /**
   Retrieves cluster configurations
   * @returns Promise<ClusterConfigResponse[]> List of cluster configurations
   */
  async getClusterConfigs(): Promise<ClusterConfigResponse[]> {
    const result = await this.executeQuery('clusterConfigs', {});
    return result.data.clusterConfigs.map((config: any) => new ClusterConfigResponse(config));
  }
  /**
   Creates a new cluster configuration
   * @param input Cluster config creation input
   * @returns Promise<ClusterConfig> The created cluster configuration
   */
  async createClusterConfig(input: ClusterConfigCreateInput): Promise<ClusterConfig> {
    const variables = { input };
    const result = await this.executeMutation('clusterConfigCreate', variables);
    return new ClusterConfig(result.data.clusterConfigCreate);
  }
  /**
   Updates cluster configuration settings
   * @param input Cluster config setting update input
   * @returns Promise<ClusterConfig> The updated cluster configuration
   */
  async updateClusterConfigSetting(input: ClusterConfigSettingUpdateInput): Promise<ClusterConfig> {
    const variables = { input };
    const result = await this.executeMutation('clusterConfigSettingUpdate', variables);
    return new ClusterConfig(result.data.clusterConfigSettingUpdate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}