import { BaseService } from './BaseService';
import { Shop } from '../type/Shop';
/**
 * Service class for Shop-related GraphQL operations
 */
export class ShopService extends BaseService {
  /**
   * Fetches a single shop by ID
   * @deprecated The upstream `shop` query is deprecated; this query will be removed in a future version.
   * @param id Shop ID to fetch
   * @returns Promise<Shop> The shop data
   */
  async getShop(id: number): Promise<Shop> {
    const variables = { id };
    const result = await this.executeQuery('shop', variables);
    return new Shop(result.data.shop);
  }
  /**
   * Fetches a list of shops
   * @deprecated The upstream `shops` query is deprecated; this query will be removed in a future version.
   * @returns Promise<Shop[]> The shops data array
   */
  async getShops(): Promise<Shop[]> {
    const variables = {};
    const result = await this.executeQuery('shops', variables);
    return result.data.shops.map((x: any) => new Shop(x));
  }
}