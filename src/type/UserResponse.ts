import { AdminUser } from './AdminUser';
/**
 Object class for UserResponse
 */
export class UserResponse {
  /** List of items of type User */
  items!: AdminUser[];
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
  constructor(data: Partial<UserResponse> = {}) {
    Object.assign(this, data);
  }
}