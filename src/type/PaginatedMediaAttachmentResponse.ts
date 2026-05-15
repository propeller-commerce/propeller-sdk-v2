import { MediaAttachment } from './MediaAttachment';
/**
 Object class for PaginatedMediaAttachmentResponse
 */
export class PaginatedMediaAttachmentResponse {
  /** List of items of type MediaAttachment */
  items!: MediaAttachment[];
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
  constructor(data: Partial<PaginatedMediaAttachmentResponse> = {}) {
    Object.assign(this, data);
  }
}