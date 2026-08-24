import { AdminUserTenant } from './AdminUserTenant';
/**
 Object class for TenantResponse
 */
export interface TenantResponse {
  /** List of items of type Tenant */
  items: AdminUserTenant[];
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