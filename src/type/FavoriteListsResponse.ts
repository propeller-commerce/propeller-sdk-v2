import { FavoriteList } from './FavoriteList';
/**
 Object class for FavoriteListsResponse
 */
export class FavoriteListsResponse {
  /** List of items of type FavoriteList */
  items!: FavoriteList[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /** The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  constructor(data: Partial<FavoriteListsResponse> = {}) {
    Object.assign(this, data);
  }
}