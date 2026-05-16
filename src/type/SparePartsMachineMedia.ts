import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for SparePartsMachineMedia
 */
export interface SparePartsMachineMedia {
  /** Media images */
  images?: PaginatedMediaImageResponse;
  /** Media videos */
  videos?: PaginatedMediaVideoResponse;
  /** Media documents */
  documents?: PaginatedMediaDocumentResponse;
  /** Media attachments */
  attachments?: PaginatedMediaAttachmentResponse;
}