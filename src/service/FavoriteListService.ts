import { FavoriteList } from '../type/FavoriteList';
import { FavoriteListsResponse } from '../type/FavoriteListsResponse';
import { FavoriteListsSearchInput } from '../type/FavoriteListsSearchInput';
import { FavoriteListsCreateInput } from '../type/FavoriteListsCreateInput';
import { FavoriteListsUpdateInput } from '../type/FavoriteListsUpdateInput';
import { FavoriteListsItemsInput } from '../type/FavoriteListsItemsInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as favoriteListDoc } from '../generated/operations/favoriteList';
import { document as favoriteListsDoc } from '../generated/operations/favoriteLists';
import { document as favoriteListCreateDoc } from '../generated/operations/favoriteListCreate';
import { document as favoriteListUpdateDoc } from '../generated/operations/favoriteListUpdate';
import { document as favoriteListDeleteDoc } from '../generated/operations/favoriteListDelete';
import { document as favoriteListAddItemsDoc } from '../generated/operations/favoriteListAddItems';
import { document as favoriteListRemoveItemsDoc } from '../generated/operations/favoriteListRemoveItems';
import { document as favoriteListClearItemsDoc } from '../generated/operations/favoriteListClearItems';
import type { FavoriteListVariables } from '../generated/operationVariables';
/**
 Service for managing favorite lists
 */
export function favoriteListService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific favorite list
       * @param variables
       * - id: String - Favorite list ID
       * - language: String - language to fetch the list data in
       * - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
       * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
       * - imageVariantFilters: TransformationsInput - Image transformation filters
       * @returns Promise<FavoriteList> Favorite list data
       */
    async getFavoriteList(variables: FavoriteListVariables): Promise<FavoriteList> {
      const result = await runOperation<{ favoriteList: FavoriteList }>(client, favoriteListDoc, 'favoriteList', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.favoriteList as FavoriteList;
    },
    /**
       Retrieves favorite lists with search
       * @param input Search input parameters
       * @returns Promise<FavoriteListsResponse> Favorite lists response
       */
    async getFavoriteLists(input?: FavoriteListsSearchInput): Promise<FavoriteListsResponse> {
      const result = await runOperation<{ favoriteLists: FavoriteListsResponse }>(client, favoriteListsDoc, 'favoriteLists', { input });
      return result.data.favoriteLists as FavoriteListsResponse;
    },
    /**
       Creates a new favorite list
       * @param input Favorite list creation input
       * @returns Promise<FavoriteList> The created favorite list
       */
    async createFavoriteList(input: FavoriteListsCreateInput): Promise<FavoriteList> {
      const result = await runOperation<{ favoriteListCreate: FavoriteList }>(client, favoriteListCreateDoc, 'favoriteListCreate', { input });
      return result.data.favoriteListCreate as FavoriteList;
    },
    /**
       Updates an existing favorite list
       * @param id Favorite list ID
       * @param input Favorite list update input
       * @returns Promise<FavoriteList> The updated favorite list
       */
    async updateFavoriteList(id: string, input: FavoriteListsUpdateInput): Promise<FavoriteList> {
      const result = await runOperation<{ favoriteListUpdate: FavoriteList }>(client, favoriteListUpdateDoc, 'favoriteListUpdate', { id, input });
      return result.data.favoriteListUpdate as FavoriteList;
    },
    /**
       Deletes a favorite list
       * @param id FavoriteList ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteFavoriteList(id: string): Promise<boolean> {
      const result = await runOperation<{ favoriteListDelete: boolean }>(client, favoriteListDeleteDoc, 'favoriteListDelete', { id });
      return result.data.favoriteListDelete;
    },
    /**
       Adds items to a favorite list
       * @param id Favorite list ID
       * @param input Items to add via FavoriteListsItemsInput
       * @returns Promise<FavoriteList> The updated favorite list
       */
    async addFavoriteListItems(id: string, input: FavoriteListsItemsInput): Promise<FavoriteList> {
      const result = await runOperation<{ favoriteListAddItems: FavoriteList }>(client, favoriteListAddItemsDoc, 'favoriteListAddItems', { id, input });
      return result.data.favoriteListAddItems as FavoriteList;
    },
    /**
       Removes items from a favorite list
       * @param id Favorite list ID
       * @param input Items to remove via FavoriteListsItemsInput
       * @returns Promise<FavoriteList> The updated favorite list
       */
    async removeFavoriteListItems(id: string, input: FavoriteListsItemsInput): Promise<FavoriteList> {
      const result = await runOperation<{ favoriteListRemoveItems: FavoriteList }>(client, favoriteListRemoveItemsDoc, 'favoriteListRemoveItems', { id, input });
      return result.data.favoriteListRemoveItems as FavoriteList;
    },
    /**
       Clears items from a favorite list
       * @param id Favorite list ID
       * @param products Whether to clear products
       * @param clusters Whether to clear clusters
       * @returns Promise<FavoriteList> The updated favorite list
       */
    async clearFavoriteListItems(id: string, products?: boolean, clusters?: boolean): Promise<FavoriteList> {
      const result = await runOperation<{ favoriteListClearItems: FavoriteList }>(client, favoriteListClearItemsDoc, 'favoriteListClearItems', { id, products, clusters });
      return result.data.favoriteListClearItems as FavoriteList;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `favoriteListService(client)`.
 */
export class FavoriteListService {
  private readonly _svc: ReturnType<typeof favoriteListService>;
  constructor(client: GraphQLClient) { this._svc = favoriteListService(client); }
  /**
   * Retrieves a specific favorite list
   * @param id Favorite list ID
   * @param language language to fetch the list data in
   * @param priceCalculateProductInput Price calculation input
   * @param imageSearchFilters Image search filters
   * @param imageVariantFilters Image transformation filters
   */
  getFavoriteList(variables: FavoriteListVariables): Promise<FavoriteList> { return this._svc.getFavoriteList(variables); }
  /**
   * Retrieves favorite lists with search
   * @param input Search input parameters
   */
  getFavoriteLists(input?: FavoriteListsSearchInput): Promise<FavoriteListsResponse> { return this._svc.getFavoriteLists(input); }
  /**
   * Creates a new favorite list
   * @param input Favorite list creation input
   */
  createFavoriteList(input: FavoriteListsCreateInput): Promise<FavoriteList> { return this._svc.createFavoriteList(input); }
  /**
   * Updates an existing favorite list
   * @param id Favorite list ID
   * @param input Favorite list update input
   */
  updateFavoriteList(id: string, input: FavoriteListsUpdateInput): Promise<FavoriteList> { return this._svc.updateFavoriteList(id, input); }
  /**
   * Deletes a favorite list
   * @param id FavoriteList ID to delete
   */
  deleteFavoriteList(id: string): Promise<boolean> { return this._svc.deleteFavoriteList(id); }
  /**
   * Adds items to a favorite list
   * @param id Favorite list ID
   * @param input Items to add via FavoriteListsItemsInput
   */
  addFavoriteListItems(id: string, input: FavoriteListsItemsInput): Promise<FavoriteList> { return this._svc.addFavoriteListItems(id, input); }
  /**
   * Removes items from a favorite list
   * @param id Favorite list ID
   * @param input Items to remove via FavoriteListsItemsInput
   */
  removeFavoriteListItems(id: string, input: FavoriteListsItemsInput): Promise<FavoriteList> { return this._svc.removeFavoriteListItems(id, input); }
  /**
   * Clears items from a favorite list
   * @param id Favorite list ID
   * @param products Whether to clear products
   * @param clusters Whether to clear clusters
   */
  clearFavoriteListItems(id: string, products?: boolean, clusters?: boolean): Promise<FavoriteList> { return this._svc.clearFavoriteListItems(id, products, clusters); }
}
