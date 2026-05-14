import { MediaVideo } from './MediaVideo';
/**
 Object class for PaginatedMediaVideoResponse
 */
export class PaginatedMediaVideoResponse {
  /** List of items of type MediaVideo */
  items!: MediaVideo[];
  /** Total number of items found */
  itemsFound!: number;
  /** The amount of items to show per page */
  offset!: number;
  /**  The current page */
  page!: number;
  /** Total amount of pages */
  pages!: number;
  /** Start position of the current page */
  start!: number;
  /** End position of the current page */
  end!: number;
  constructor(data: Partial<PaginatedMediaVideoResponse> = {}) {
    Object.assign(this, data);
  }
}