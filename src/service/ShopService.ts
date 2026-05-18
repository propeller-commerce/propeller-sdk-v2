import { Shop } from '../type/Shop';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as shopDoc } from '../generated/operations/shop';
import { document as shopsDoc } from '../generated/operations/shops';
import type { ShopVariables } from '../generated/operationVariables';
/**
 * Service class for Shop-related GraphQL operations
 */
export function shopService(client: GraphQLClient) {
  return {
    /**
       * Fetches a single shop by ID
       * @deprecated The upstream `shop` query is deprecated; this query will be removed in a future version.
       * @param variables Shop ID to fetch
       * @returns Promise<Shop> The shop data
       */
    async getShop(variables: ShopVariables): Promise<Shop> {
      const result = await runOperation<{ shop: Shop }>(client, shopDoc, 'shop', variables);
      return result.data.shop as Shop;
    },
    /**
       * Fetches a list of shops
       * @deprecated The upstream `shops` query is deprecated; this query will be removed in a future version.
       * @returns Promise<Shop[]> The shops data array
       */
    async getShops(): Promise<Shop[]> {
      const result = await runOperation<{ shops: Shop[] }>(client, shopsDoc, 'shops');
      return result.data.shops as Shop[];
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `shopService(client)`.
 */
export class ShopService {
  private readonly _svc: ReturnType<typeof shopService>;
  constructor(client: GraphQLClient) { this._svc = shopService(client); }
  /**
   * Fetches a single shop by ID
   * @param variables Shop ID to fetch
   */
  getShop(variables: ShopVariables): Promise<Shop> { return this._svc.getShop(variables); }
  /**
   * Fetches a list of shops
   */
  getShops(): Promise<Shop[]> { return this._svc.getShops(); }
}
