import { Role } from './Role';
/**
 Object class for RoleResponse
 */
export interface RoleResponse {
  /** List of items of type Role */
  items: Role[];
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