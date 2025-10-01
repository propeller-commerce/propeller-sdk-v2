/**
 Input object for FavoriteListsBaseSearchInput
 */
export interface FavoriteListsBaseSearchInput {
  /** Favorite List name */
  name?: string;
  /** Favorite List is default */
  isDefault?: boolean;
  /** Favorite List page */
  page?: number;
  /** Favorite List offset */
  offset?: number;
}