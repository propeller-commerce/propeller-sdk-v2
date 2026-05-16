import { IBaseUser } from './IBaseUser';
/**
 Object class for UsersResponse
 */
export interface UsersResponse {
  /** List of items of type IBaseUser */
  items: IBaseUser[];
  /** Total number of items found */
  itemsFound: number;
  /** The amount of items to show per page */
  offset: number;
  /** The current page */
  page: number;
  /** Total amount of pages */
  pages: number;
  /** Start position of the current page */
  start: number;
  /** End position of the current page */
  end: number;
}