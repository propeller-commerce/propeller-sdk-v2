import { BaseService } from './BaseService';
import { FavoriteList } from '../type/FavoriteList';
import { FavoriteListsResponse } from '../type/FavoriteListsResponse';
import { FavoriteListsSearchInput } from '../type/FavoriteListsSearchInput';
import { FavoriteListsCreateInput } from '../type/FavoriteListsCreateInput';
import { FavoriteListsUpdateInput } from '../type/FavoriteListsUpdateInput';
/**
 Service for managing favorite lists
 * @extends BaseService
 */
export class FavoriteListService extends BaseService {
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
  async getFavoriteList(variables: any): Promise<FavoriteList> {
    const result = await this.executeQuery('favoriteList', variables);
    return new FavoriteList(result.data.favoriteList);
  }
  /**
   Retrieves favorite lists with search
   * @param input Search input parameters
   * @returns Promise<FavoriteListsResponse> Favorite lists response
   */
  async getFavoriteLists(input?: FavoriteListsSearchInput): Promise<FavoriteListsResponse> {
    const variables = { input };
    const result = await this.executeQuery('favoriteLists', variables);
    return new FavoriteListsResponse(result.data.favoriteLists);
  }
  /**
   Creates a new favorite list
   * @param input Favorite list creation input
   * @returns Promise<FavoriteList> The created favorite list
   */
  async createFavoriteList(input: FavoriteListsCreateInput): Promise<FavoriteList> {
    const variables = { input };
    const result = await this.executeMutation('favoriteListCreate', variables);
    return new FavoriteList(result.data.favoriteListCreate);
  }
  /**
   Updates an existing favorite list
   * @param id Favorite list ID
   * @param input Favorite list update input
   * @returns Promise<FavoriteList> The updated favorite list
   */
  async updateFavoriteList(id: string, input: FavoriteListsUpdateInput): Promise<FavoriteList> {
    const variables = { id, input };
    const result = await this.executeMutation('favoriteListUpdate', variables);
    return new FavoriteList(result.data.favoriteListUpdate);
  }
  /**
   Deletes a favorite list
   * @param id FavoriteList ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteFavoriteList(id: string): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('favoriteListDelete', variables);
    return result.data.favoriteListDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}