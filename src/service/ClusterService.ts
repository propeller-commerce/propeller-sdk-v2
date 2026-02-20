import { BaseService } from './BaseService';
import { Cluster } from '../type/Cluster';
import { ClusterProductSearchInput } from '../type/ClusterProductSearchInput';
import { PriceCalculateProductInput } from '../type/PriceCalculateProductInput';
import { UserBulkPriceProductInput } from '../type/UserBulkPriceProductInput';
import { AttributeResultSearchInput } from '../type/AttributeResultSearchInput';
import { MediaImageProductSearchInput } from '../type/MediaImageProductSearchInput';
import { MediaVideoProductSearchInput } from '../type/MediaVideoProductSearchInput';
import { MediaDocumentProductSearchInput } from '../type/MediaDocumentProductSearchInput';
import { TransformationsInput } from '../type/TransformationsInput';
import { ClusterCreateInput } from '../type/ClusterCreateInput';
import { ClusterUpdateInput } from '../type/ClusterUpdateInput';
export interface ClusterCreateVariables {
  input: ClusterCreateInput;
}
export interface ClusterUpdateVariables {
  id: number;
  input: ClusterUpdateInput;
}
export interface ClusterDeleteVariables {
  id: number;
}
/**
 * Cluster query variables interface
 Variables for the cluster query
 */
export interface ClusterQueryVariables {
  /** Cluster ID to fetch */
  clusterId?: number;
  /** Cluster slug to fetch */
  slug?: string;
  /** Language for localized content */
  language?: string;
  /** Price calculation input */
  priceCalculateProductInput?: PriceCalculateProductInput;
  /** User bulk price input */
  userBulkPriceProductInput?: UserBulkPriceProductInput;
  /** Attribute search input */
  attributeResultSearchInput?: AttributeResultSearchInput;
  /** Image search filters */
  imageSearchFilters?: MediaImageProductSearchInput;
  /** Video search input */
  mediaVideoSearchInput?: MediaVideoProductSearchInput;
  /** Document search input */
  mediaDocumentSearchInput?: MediaDocumentProductSearchInput;
  /** Image transformation filters */
  imageVariantFilters?: TransformationsInput;
}
/**
 Service class for Cluster-related GraphQL operations
 */
export class ClusterService extends BaseService {
  /**
   Retrieves a specific cluster configuration
   * @param clusterId Cluster ID to get configuration for
   * @returns Promise<Cluster> Cluster data
   */
  async getClusterConfig(clusterId: number): Promise<Cluster> {
    const variables = { clusterId };
    const result = await this.executeQuery('clusterGetConfig', variables);
    return new Cluster(result.data.cluster);
  }
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
  async getCluster(variables: ClusterQueryVariables): Promise<Cluster> {
    const result = await this.executeQuery('cluster', variables);
    return new Cluster(result.data.cluster);
  }
  /**
   Fetches a list of clusters with search criteria
   * @param input Cluster search input parameters
   * @returns Promise<Cluster[]> Array of clusters
   */
  async getClusters(input?: ClusterProductSearchInput): Promise<Cluster[]> {
    const variables = { input };
    const result = await this.executeQuery('clusters', variables);
    return result.data.clusters.map((cluster: any) => new Cluster(cluster));
  }
  /**
   Creates a new cluster
   * @param variables Cluster creation variables
   * @returns Promise<Cluster> The created cluster
   */
  async createCluster(variables: ClusterCreateVariables): Promise<Cluster> {
    const result = await this.executeMutation('clusterCreate', variables);
    return new Cluster(result.data.clusterCreate);
  }
  /**
   Updates an existing cluster
   * @param variables Cluster update variables
   * @returns Promise<Cluster> The updated cluster
   */
  async updateCluster(variables: ClusterUpdateVariables): Promise<Cluster> {
    const result = await this.executeMutation('clusterUpdate', variables);
    return new Cluster(result.data.clusterUpdate);
  }
  /**
   Deletes a cluster
   * @param variables Cluster delete variables
   * @returns Promise<boolean> Success status
   */
  async deleteCluster(variables: ClusterDeleteVariables): Promise<boolean> {
    const result = await this.executeMutation('clusterDelete', variables);
    return result.data.clusterDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}