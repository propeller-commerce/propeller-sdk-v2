import { Bundle } from '../type/Bundle';
import { BundlesResponse } from '../type/BundlesResponse';
import { BundleSearchInput } from '../type/BundleSearchInput';
import { BundleCreateInput } from '../type/BundleCreateInput';
import { BundleUpdateInput } from '../type/BundleUpdateInput';
import { BundleAddItemsInput } from '../type/BundleAddItemsInput';
import { BundleItem } from '../type/BundleItem';
import { MediaImageProductSearchInput, TransformationsInput } from '../type';

/**
 * Variables for `bundle query` — fetches a list of bundles with search criteria
 */
export interface BundleQueryVariables {
  input: BundleSearchInput
  language: String
  imageSearchFilters: MediaImageProductSearchInput
  imageVariantFilters: TransformationsInput
}
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as bundleDoc } from '../generated/operations/bundle';
import { document as bundlesDoc } from '../generated/operations/bundles';
import { document as bundleCreateDoc } from '../generated/operations/bundleCreate';
import { document as bundleUpdateDoc } from '../generated/operations/bundleUpdate';
import { document as bundleAddItemsDoc } from '../generated/operations/bundleAddItems';
import { document as bundleDeleteDoc } from '../generated/operations/bundleDelete';
import type { BundleAddItemsVariables, BundleCreateVariables, BundleUpdateVariables, BundleVariables } from '../generated/operationVariables';
/**
 Service class for Bundle-related GraphQL operations
 */
export function bundleService(client: GraphQLClient) {
  return {
    /**
       Fetches a single bundle by ID
       * @param id Bundle ID to fetch
       * @returns Promise<Bundle> The bundle data
       */
    async getBundle(variables: BundleVariables): Promise<Bundle> {
      const result = await runOperation(client, bundleDoc, 'bundle', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.bundle as Bundle;
    },
    /**
       Fetches a list of bundles with search criteria
       * @param variables Bundle query variables
       * @returns Promise<BundlesResponse> The bundles response data
       */
    async getBundles(variables?: BundleQueryVariables): Promise<BundlesResponse> {
      const result = await runOperation(client, bundlesDoc, 'bundles', variables);
      return result.data.bundles as BundlesResponse;
    },
    /**
       Creates a new bundle
       * @param input Bundle creation input data
       * @returns Promise<Bundle> The created bundle
       */
    async createBundle(variables: BundleCreateVariables): Promise<Bundle> {
      const result = await runOperation(client, bundleCreateDoc, 'bundleCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.bundleCreate as Bundle;
    },
    /**
       Updates an existing bundle
       * @param input Bundle update input data
       * @returns Promise<Bundle> The updated bundle
       */
    async updateBundle(variables: BundleUpdateVariables): Promise<Bundle> {
      const result = await runOperation(client, bundleUpdateDoc, 'bundleUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.bundleUpdate as Bundle;
    },
    /**
       Adds items to a bundle
       * @deprecated Schema-side `bundleAddItems` is deprecated — prefer `bundleAddItemsAndReturnBundle` for a Bundle response.
       * @param input Bundle add items input data
       * @returns Promise<BundleItem[]> The added bundle items
       */
    async addItemsToBundle(variables: BundleAddItemsVariables): Promise<BundleItem[]> {
      const result = await runOperation(client, bundleAddItemsDoc, 'bundleAddItems', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.bundleAddItems as BundleItem[];
    },
    /**
       Deletes a bundle
       * @param id Bundle ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteBundle(id: number): Promise<boolean> {
      const result = await runOperation(client, bundleDeleteDoc, 'bundleDelete', { id });
      return result.data.bundleDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `bundleService(client)`.
 */
export class BundleService {
  private readonly _svc: ReturnType<typeof bundleService>;
  constructor(client: GraphQLClient) { this._svc = bundleService(client); }
  /**
   * Fetches a single bundle by ID
   * @param id Bundle ID to fetch
   */
  getBundle(variables: BundleVariables): Promise<Bundle> { return this._svc.getBundle(variables); }
  /**
   * Fetches a list of bundles with search criteria
   * @param variables Bundle query variables
   */
  getBundles(variables?: BundleQueryVariables): Promise<BundlesResponse> { return this._svc.getBundles(variables); }
  /**
   * Creates a new bundle
   * @param input Bundle creation input data
   */
  createBundle(variables: BundleCreateVariables): Promise<Bundle> { return this._svc.createBundle(variables); }
  /**
   * Updates an existing bundle
   * @param input Bundle update input data
   */
  updateBundle(variables: BundleUpdateVariables): Promise<Bundle> { return this._svc.updateBundle(variables); }
  /**
   * Adds items to a bundle
   * @param input Bundle add items input data
   */
  addItemsToBundle(variables: BundleAddItemsVariables): Promise<BundleItem[]> { return this._svc.addItemsToBundle(variables); }
  /**
   * Deletes a bundle
   * @param id Bundle ID to delete
   */
  deleteBundle(id: number): Promise<boolean> { return this._svc.deleteBundle(id); }
}
