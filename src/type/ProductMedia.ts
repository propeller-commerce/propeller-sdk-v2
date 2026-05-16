import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
/**
 Object class for ProductMedia
 */
export interface ProductMedia {
  /** Product media images */
  images?: PaginatedMediaImageResponse;
  /** Product media videos */
  videos?: PaginatedMediaVideoResponse;
  /** Product media documents */
  documents?: PaginatedMediaDocumentResponse;
}