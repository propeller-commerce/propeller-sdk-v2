import { ClusterConfig } from '../type/ClusterConfig';
import { ClusterConfigSetting } from '../type/ClusterConfigSetting';
import { ClusterConfigsResponse } from '../type/ClusterConfigsResponse';
import { document as clusterConfigSettingDoc } from '../generated/operations/clusterConfigSetting';
import { document as clusterConfigSettingCreateDoc } from '../generated/operations/clusterConfigSettingCreate';
import { document as clusterConfigSettingDeleteDoc } from '../generated/operations/clusterConfigSettingDelete';
import { document as clusterConfigSettingUpdateDoc } from '../generated/operations/clusterConfigSettingUpdate';
import { document as clusterConfigUpdateDoc } from '../generated/operations/clusterConfigUpdate';
import { document as clusterConfigsPaginatedDoc } from '../generated/operations/clusterConfigsPaginated';
import type { ClusterConfigSettingCreateVariables, ClusterConfigSettingDeleteVariables, ClusterConfigSettingUpdateVariables, ClusterConfigSettingVariables, ClusterConfigUpdateVariables, ClusterConfigsPaginatedVariables } from '../generated/operationVariables';

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
      const result = await runOperation<{ clusterConfig: ClusterConfigResponse }>(client, clusterConfigDoc, 'clusterConfig', { clusterConfigId });
      return result.data.clusterConfig as ClusterConfigResponse;
    },
    /**
       Retrieves cluster configurations
       * @returns Promise<ClusterConfigResponse[]> List of cluster configurations
       */
    async getClusterConfigs(): Promise<ClusterConfigResponse[]> {
      const result = await runOperation<{ clusterConfigs: ClusterConfigResponse[] }>(client, clusterConfigsDoc, 'clusterConfigs');
      return result.data.clusterConfigs as ClusterConfigResponse[];
    },
    /**
       Creates a new cluster configuration
       * @param input Cluster config creation input
       * @returns Promise<ClusterConfig> The created cluster configuration
       */
    async createClusterConfig(input: ClusterConfigCreateInput): Promise<ClusterConfigResponse> {
      const result = await runOperation<{ clusterConfigCreate: ClusterConfigResponse }>(client, clusterConfigCreateDoc, 'clusterConfigCreate', { input });
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
      const result = await runOperation<{ clusterConfigUpdateSetting: UpdateClusterConfigSettingResponse }>(client, clusterConfigUpdateSettingDoc, 'clusterConfigUpdateSetting', { clusterConfigId, settingId, input });
      return result.data.clusterConfigUpdateSetting as UpdateClusterConfigSettingResponse;
    },
    /**
       Retrieve a single cluster configuration setting by global identifier.
       */
    async getClusterConfigSetting(variables: ClusterConfigSettingVariables): Promise<ClusterConfigSetting> {
      const result = await runOperation<{ clusterConfigSetting: ClusterConfigSetting }>(client, clusterConfigSettingDoc, 'clusterConfigSetting', { ...variables });
      return result.data.clusterConfigSetting as ClusterConfigSetting;
    },
    /**
       Create a new setting on the cluster configuration identified by the supplied global identifier.
       */
    async clusterConfigSettingCreate(variables: ClusterConfigSettingCreateVariables): Promise<ClusterConfigSetting> {
      const result = await runOperation<{ clusterConfigSettingCreate: ClusterConfigSetting }>(client, clusterConfigSettingCreateDoc, 'clusterConfigSettingCreate', { ...variables });
      return result.data.clusterConfigSettingCreate as ClusterConfigSetting;
    },
    /**
       Remove a cluster configuration setting identified by global identifier.
       */
    async clusterConfigSettingDelete(variables: ClusterConfigSettingDeleteVariables): Promise<boolean> {
      const result = await runOperation<{ clusterConfigSettingDelete: boolean }>(client, clusterConfigSettingDeleteDoc, 'clusterConfigSettingDelete', { ...variables });
      return result.data.clusterConfigSettingDelete as boolean;
    },
    /**
       Apply a partial update to a cluster configuration setting identified by global identifier.
       */
    async clusterConfigSettingUpdate(variables: ClusterConfigSettingUpdateVariables): Promise<ClusterConfigSetting> {
      const result = await runOperation<{ clusterConfigSettingUpdate: ClusterConfigSetting }>(client, clusterConfigSettingUpdateDoc, 'clusterConfigSettingUpdate', { ...variables });
      return result.data.clusterConfigSettingUpdate as ClusterConfigSetting;
    },
    /**
       Apply a partial update to an existing cluster configuration.
       */
    async clusterConfigUpdate(variables: ClusterConfigUpdateVariables): Promise<ClusterConfig> {
      const result = await runOperation<{ clusterConfigUpdate: ClusterConfig }>(client, clusterConfigUpdateDoc, 'clusterConfigUpdate', { ...variables });
      return result.data.clusterConfigUpdate as ClusterConfig;
    },
    /**
       Search cluster configurations with filtering and pagination.
       */
    async getClusterConfigsPaginated(variables: ClusterConfigsPaginatedVariables): Promise<ClusterConfigsResponse> {
      const result = await runOperation<{ clusterConfigsPaginated: ClusterConfigsResponse }>(client, clusterConfigsPaginatedDoc, 'clusterConfigsPaginated', { ...variables });
      return result.data.clusterConfigsPaginated as ClusterConfigsResponse;
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
  getClusterConfigSetting(variables: ClusterConfigSettingVariables): Promise<ClusterConfigSetting> { return this._svc.getClusterConfigSetting(variables); }
  clusterConfigSettingCreate(variables: ClusterConfigSettingCreateVariables): Promise<ClusterConfigSetting> { return this._svc.clusterConfigSettingCreate(variables); }
  clusterConfigSettingDelete(variables: ClusterConfigSettingDeleteVariables): Promise<boolean> { return this._svc.clusterConfigSettingDelete(variables); }
  clusterConfigSettingUpdate(variables: ClusterConfigSettingUpdateVariables): Promise<ClusterConfigSetting> { return this._svc.clusterConfigSettingUpdate(variables); }
  clusterConfigUpdate(variables: ClusterConfigUpdateVariables): Promise<ClusterConfig> { return this._svc.clusterConfigUpdate(variables); }
  getClusterConfigsPaginated(variables: ClusterConfigsPaginatedVariables): Promise<ClusterConfigsResponse> { return this._svc.getClusterConfigsPaginated(variables); }
}
