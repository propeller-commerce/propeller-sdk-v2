import { BaseService } from './BaseService';
import { Bundle } from '../type/Bundle';
import { BundlesResponse } from '../type/BundlesResponse';
import { BundleSearchInput } from '../type/BundleSearchInput';
import { BundleCreateInput } from '../type/BundleCreateInput';
import { BundleUpdateInput } from '../type/BundleUpdateInput';
import { BundleAddItemsInput } from '../type/BundleAddItemsInput';
/**
 Service class for Bundle-related GraphQL operations
 */
export class BundleService extends BaseService {
  /**
   Fetches a single bundle by ID
   * @param id Bundle ID to fetch
   * @returns Promise<Bundle> The bundle data
   */
  async getBundle(id: number): Promise<Bundle> {
    const variables = { id };
    const result = await this.executeQuery('bundle', variables);
    return new Bundle(result.data.bundle);
  }
  /**
   Fetches a list of bundles with search criteria
   * @param input Bundle search input parameters
   * @returns Promise<BundlesResponse> The bundles response data
   */
  async getBundles(input?: BundleSearchInput): Promise<BundlesResponse> {
    const variables = { input };
    const result = await this.executeQuery('bundles', variables);
    return new BundlesResponse(result.data.bundles);
  }
  /**
   Creates a new bundle
   * @param input Bundle creation input data
   * @returns Promise<Bundle> The created bundle
   */
  async createBundle(input: BundleCreateInput): Promise<Bundle> {
    const variables = { input };
    const result = await this.executeMutation('bundleCreate', variables);
    return new Bundle(result.data.bundleCreate);
  }
  /**
   Updates an existing bundle
   * @param input Bundle update input data
   * @returns Promise<Bundle> The updated bundle
   */
  async updateBundle(input: BundleUpdateInput): Promise<Bundle> {
    const variables = { input };
    const result = await this.executeMutation('bundleUpdate', variables);
    return new Bundle(result.data.bundleUpdate);
  }
  /**
   Adds items to a bundle
   * @param input Bundle add items input data
   * @returns Promise<Bundle> The updated bundle
   */
  async addItemsToBundle(input: BundleAddItemsInput): Promise<Bundle> {
    const variables = { input };
    const result = await this.executeMutation('bundleAddItems', variables);
    return new Bundle(result.data.bundleAddItems);
  }
  /**
   Deletes a bundle
   * @param id Bundle ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteBundle(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('bundleDelete', variables);
    return result.data.bundleDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}