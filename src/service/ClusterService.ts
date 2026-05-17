import { Cluster } from '../type/Cluster';
import { ClusterConfigResponse } from '../type/ClusterConfigResponse';
import { PriceCalculateProductInput } from '../type/PriceCalculateProductInput';
import { UserBulkPriceProductInput } from '../type/UserBulkPriceProductInput';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { MediaVideoProductSearchInput } from '../type/MediaVideoProductSearchInput';
import { MediaDocumentProductSearchInput } from '../type/MediaDocumentProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
import { ClusterCreateInput } from '../type/ClusterCreateInput';
import { ClusterUpdateInput } from '../type/ClusterUpdateInput';
/**
 * Variables for `cluster delete` — deletes a cluster
 */
export interface ClusterDeleteVariables {
  id: number;
}
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as clusterConfigDoc } from '../generated/operations/clusterConfig';
import { document as clusterDoc } from '../generated/operations/cluster';
import { document as clusterCreateDoc } from '../generated/operations/clusterCreate';
import { document as clusterUpdateDoc } from '../generated/operations/clusterUpdate';
import { document as clusterDeleteDoc } from '../generated/operations/clusterDelete';
import type { ClusterCreateVariables, ClusterUpdateVariables, ClusterVariables } from '../generated/operationVariables';
/**
 Service class for Cluster-related GraphQL operations
 */
export function clusterService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific cluster configuration
       * @param clusterId Cluster ID to fetch
       * @returns Promise<Cluster> Cluster config data
       */
    async getClusterConfig(clusterId: number): Promise<Cluster> {
      const result = await runOperation(client, clusterConfigDoc, 'clusterConfig', { clusterId });
      return result.data.cluster as Cluster;
    },
    /**
       Fetches a single cluster by ID or slug
       * @param variables Variables for cluster query
       * - clusterId: number - Cluster ID to fetch
       * - slug: string - Cluster slug to fetch
       * - language: string - Language for localized content
       * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
       * - userBulkPriceProductInput: UserBulkPriceProductInput - User bulk price input
       * - attributeResultSearchInput: AttributeResultSearchInput - Attribute search input
       * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
       * - mediaVideoSearchInput: MediaVideoProductSearchInput - Video search input
       * - mediaDocumentSearchInput: MediaDocumentProductSearchInput - Document search input
       * - imageVariantFilters: TransformationsInput - Image transformation filters
       * @returns Promise<Cluster> Cluster data
       */
    async getCluster(variables: ClusterVariables): Promise<Cluster> {
      const result = await runOperation(client, clusterDoc, 'cluster', variables);
      return result.data.cluster as Cluster;
    },
    /**
       Creates a new cluster
       * @param variables Cluster creation variables
       * @returns Promise<Cluster> The created cluster
       */
    async createCluster(variables: ClusterCreateVariables): Promise<Cluster> {
      const result = await runOperation(client, clusterCreateDoc, 'clusterCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterCreate as Cluster;
    },
    /**
       Updates an existing cluster
       * @param variables Cluster update variables
       * @returns Promise<Cluster> The updated cluster
       */
    async updateCluster(variables: ClusterUpdateVariables): Promise<Cluster> {
      const result = await runOperation(client, clusterUpdateDoc, 'clusterUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterUpdate as Cluster;
    },
    /**
       Deletes a cluster
       * @param variables Cluster delete variables
       * @returns Promise<boolean> Success status
       */
    async deleteCluster(variables: ClusterDeleteVariables): Promise<boolean> {
      const result = await runOperation(client, clusterDeleteDoc, 'clusterDelete', variables);
      return result.data.clusterDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `clusterService(client)`.
 */
export class ClusterService {
  private readonly _svc: ReturnType<typeof clusterService>;
  constructor(client: GraphQLClient) { this._svc = clusterService(client); }
  /**
   * Retrieves a specific cluster configuration
   * @param clusterId Cluster ID to fetch
   */
  getClusterConfig(clusterId: number): Promise<Cluster> { return this._svc.getClusterConfig(clusterId); }
  /**
   * Fetches a single cluster by ID or slug
   * @param variables Variables for cluster query
   * @param clusterId Cluster ID to fetch
   * @param slug Cluster slug to fetch
   * @param language Language for localized content
   * @param priceCalculateProductInput Price calculation input
   * @param userBulkPriceProductInput User bulk price input
   * @param attributeResultSearchInput Attribute search input
   * @param imageSearchFilters Image search filters
   * @param mediaVideoSearchInput Video search input
   * @param mediaDocumentSearchInput Document search input
   * @param imageVariantFilters Image transformation filters
   */
  getCluster(variables: ClusterVariables): Promise<Cluster> { return this._svc.getCluster(variables); }
  /**
   * Creates a new cluster
   * @param variables Cluster creation variables
   */
  createCluster(variables: ClusterCreateVariables): Promise<Cluster> { return this._svc.createCluster(variables); }
  /**
   * Updates an existing cluster
   * @param variables Cluster update variables
   */
  updateCluster(variables: ClusterUpdateVariables): Promise<Cluster> { return this._svc.updateCluster(variables); }
  /**
   * Deletes a cluster
   * @param variables Cluster delete variables
   */
  deleteCluster(variables: ClusterDeleteVariables): Promise<boolean> { return this._svc.deleteCluster(variables); }
}
