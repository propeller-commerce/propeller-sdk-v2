import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
/**
 Object class for ProductMedia
 */
export class ProductMedia {
  /** Product media images */
  images?: PaginatedMediaImageResponse;
  /** Product media videos */
  videos?: PaginatedMediaVideoResponse;
  /** Product media documents */
  documents?: PaginatedMediaDocumentResponse;
  constructor(data: Partial<ProductMedia> = {}) {
    Object.assign(this, data);
  }
}