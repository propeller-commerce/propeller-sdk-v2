import { BaseProductCategoryRelationship } from '../type/BaseProductCategoryRelationship';
import { Cluster } from '../type/Cluster';
import { ClustersResponse } from '../type/ClustersResponse';
import { document as clusterAddToCategoryDoc } from '../generated/operations/clusterAddToCategory';
import { document as clusterAssignProductDoc } from '../generated/operations/clusterAssignProduct';
import { document as clusterCategoryMoveAboveDoc } from '../generated/operations/clusterCategoryMoveAbove';
import { document as clusterCategoryMoveBelowDoc } from '../generated/operations/clusterCategoryMoveBelow';
import { document as clusterRemoveFromCategoryDoc } from '../generated/operations/clusterRemoveFromCategory';
import { document as clusterSetDefaultCategoryDoc } from '../generated/operations/clusterSetDefaultCategory';
import { document as clusterUnassignProductDoc } from '../generated/operations/clusterUnassignProduct';
import { document as clustersDoc } from '../generated/operations/clusters';
import { document as clustersBulkAddToCategoryDoc } from '../generated/operations/clustersBulkAddToCategory';
import { document as clustersBulkRemoveFromCategoryDoc } from '../generated/operations/clustersBulkRemoveFromCategory';
import type { ClusterAddToCategoryVariables, ClusterAssignProductVariables, ClusterCategoryMoveAboveVariables, ClusterCategoryMoveBelowVariables, ClusterRemoveFromCategoryVariables, ClusterSetDefaultCategoryVariables, ClusterUnassignProductVariables, ClustersBulkAddToCategoryVariables, ClustersBulkRemoveFromCategoryVariables, ClustersVariables } from '../generated/operationVariables';

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
import { GraphQLClient, GraphQLFetchOptions } from '../client/GraphQLClient';
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
    async getClusterConfig(clusterId: number, fetchOptions?: GraphQLFetchOptions): Promise<Cluster> {
      const result = await runOperation<{ cluster: Cluster }>(client, clusterConfigDoc, 'clusterConfig', { clusterId }, fetchOptions);
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
    async getCluster(variables: ClusterVariables, fetchOptions?: GraphQLFetchOptions): Promise<Cluster> {
      const result = await runOperation<{ cluster: Cluster }>(client, clusterDoc, 'cluster', variables, fetchOptions);
      return result.data.cluster as Cluster;
    },
    /**
       Creates a new cluster
       * @param variables Cluster creation variables
       * @returns Promise<Cluster> The created cluster
       */
    async createCluster(variables: ClusterCreateVariables): Promise<Cluster> {
      const result = await runOperation<{ clusterCreate: Cluster }>(client, clusterCreateDoc, 'clusterCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterCreate as Cluster;
    },
    /**
       Updates an existing cluster
       * @param variables Cluster update variables
       * @returns Promise<Cluster> The updated cluster
       */
    async updateCluster(variables: ClusterUpdateVariables): Promise<Cluster> {
      const result = await runOperation<{ clusterUpdate: Cluster }>(client, clusterUpdateDoc, 'clusterUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterUpdate as Cluster;
    },
    /**
       Deletes a cluster
       * @param variables Cluster delete variables
       * @returns Promise<boolean> Success status
       */
    async deleteCluster(variables: ClusterDeleteVariables): Promise<boolean> {
      const result = await runOperation<{ clusterDelete: boolean }>(client, clusterDeleteDoc, 'clusterDelete', variables);
      return result.data.clusterDelete;
    },
    /**
       clusterAddToCategory operation
       */
    async clusterAddToCategory(variables: ClusterAddToCategoryVariables): Promise<BaseProductCategoryRelationship> {
      const result = await runOperation<{ clusterAddToCategory: BaseProductCategoryRelationship }>(client, clusterAddToCategoryDoc, 'clusterAddToCategory', { ...variables });
      return result.data.clusterAddToCategory as BaseProductCategoryRelationship;
    },
    /**
       Attach a single existing product to a cluster. The product will be detached from a category or another cluster.
       */
    async clusterAssignProduct(variables: ClusterAssignProductVariables): Promise<Cluster> {
      const result = await runOperation<{ clusterAssignProduct: Cluster }>(client, clusterAssignProductDoc, 'clusterAssignProduct', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterAssignProduct as Cluster;
    },
    /**
       Reorder a cluster within its category so it appears immediately before another cluster.
       */
    async clusterCategoryMoveAbove(variables: ClusterCategoryMoveAboveVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ clusterCategoryMoveAbove: BaseProductCategoryRelationship[] }>(client, clusterCategoryMoveAboveDoc, 'clusterCategoryMoveAbove', { ...variables });
      return result.data.clusterCategoryMoveAbove as BaseProductCategoryRelationship[];
    },
    /**
       Reorder a cluster within its category so it appears immediately after another cluster.
       */
    async clusterCategoryMoveBelow(variables: ClusterCategoryMoveBelowVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ clusterCategoryMoveBelow: BaseProductCategoryRelationship[] }>(client, clusterCategoryMoveBelowDoc, 'clusterCategoryMoveBelow', { ...variables });
      return result.data.clusterCategoryMoveBelow as BaseProductCategoryRelationship[];
    },
    /**
       clusterRemoveFromCategory operation
       */
    async clusterRemoveFromCategory(variables: ClusterRemoveFromCategoryVariables): Promise<boolean> {
      const result = await runOperation<{ clusterRemoveFromCategory: boolean }>(client, clusterRemoveFromCategoryDoc, 'clusterRemoveFromCategory', { ...variables });
      return result.data.clusterRemoveFromCategory as boolean;
    },
    /**
       clusterSetDefaultCategory operation
       */
    async clusterSetDefaultCategory(variables: ClusterSetDefaultCategoryVariables): Promise<Cluster> {
      const result = await runOperation<{ clusterSetDefaultCategory: Cluster }>(client, clusterSetDefaultCategoryDoc, 'clusterSetDefaultCategory', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterSetDefaultCategory as Cluster;
    },
    /**
       Detach a single product from its current cluster.
       */
    async clusterUnassignProduct(variables: ClusterUnassignProductVariables): Promise<Cluster> {
      const result = await runOperation<{ clusterUnassignProduct: Cluster }>(client, clusterUnassignProductDoc, 'clusterUnassignProduct', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.clusterUnassignProduct as Cluster;
    },
    /**
       Search the catalogue for clusters matching the supplied criteria.
       */
    async getClusters(variables: ClustersVariables): Promise<ClustersResponse> {
      const result = await runOperation<{ clusters: ClustersResponse }>(client, clustersDoc, 'clusters', { ...variables });
      return result.data.clusters as ClustersResponse;
    },
    /**
       clustersBulkAddToCategory operation
       */
    async clustersBulkAddToCategory(variables: ClustersBulkAddToCategoryVariables): Promise<BaseProductCategoryRelationship[]> {
      const result = await runOperation<{ clustersBulkAddToCategory: BaseProductCategoryRelationship[] }>(client, clustersBulkAddToCategoryDoc, 'clustersBulkAddToCategory', { ...variables });
      return result.data.clustersBulkAddToCategory as BaseProductCategoryRelationship[];
    },
    /**
       clustersBulkRemoveFromCategory operation
       */
    async clustersBulkRemoveFromCategory(variables: ClustersBulkRemoveFromCategoryVariables): Promise<boolean> {
      const result = await runOperation<{ clustersBulkRemoveFromCategory: boolean }>(client, clustersBulkRemoveFromCategoryDoc, 'clustersBulkRemoveFromCategory', { ...variables });
      return result.data.clustersBulkRemoveFromCategory as boolean;
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
  getClusterConfig(clusterId: number, fetchOptions?: GraphQLFetchOptions): Promise<Cluster> { return this._svc.getClusterConfig(clusterId, fetchOptions); }
  /**
   * Fetches a single cluster by ID or slug
   * @param variables Variables for cluster query
   */
  getCluster(variables: ClusterVariables, fetchOptions?: GraphQLFetchOptions): Promise<Cluster> { return this._svc.getCluster(variables, fetchOptions); }
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
  clusterAddToCategory(variables: ClusterAddToCategoryVariables): Promise<BaseProductCategoryRelationship> { return this._svc.clusterAddToCategory(variables); }
  clusterAssignProduct(variables: ClusterAssignProductVariables): Promise<Cluster> { return this._svc.clusterAssignProduct(variables); }
  clusterCategoryMoveAbove(variables: ClusterCategoryMoveAboveVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.clusterCategoryMoveAbove(variables); }
  clusterCategoryMoveBelow(variables: ClusterCategoryMoveBelowVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.clusterCategoryMoveBelow(variables); }
  clusterRemoveFromCategory(variables: ClusterRemoveFromCategoryVariables): Promise<boolean> { return this._svc.clusterRemoveFromCategory(variables); }
  clusterSetDefaultCategory(variables: ClusterSetDefaultCategoryVariables): Promise<Cluster> { return this._svc.clusterSetDefaultCategory(variables); }
  clusterUnassignProduct(variables: ClusterUnassignProductVariables): Promise<Cluster> { return this._svc.clusterUnassignProduct(variables); }
  getClusters(variables: ClustersVariables): Promise<ClustersResponse> { return this._svc.getClusters(variables); }
  clustersBulkAddToCategory(variables: ClustersBulkAddToCategoryVariables): Promise<BaseProductCategoryRelationship[]> { return this._svc.clustersBulkAddToCategory(variables); }
  clustersBulkRemoveFromCategory(variables: ClustersBulkRemoveFromCategoryVariables): Promise<boolean> { return this._svc.clustersBulkRemoveFromCategory(variables); }
}
