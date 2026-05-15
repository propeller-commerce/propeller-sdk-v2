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

  /** Returns `images` as a PaginatedMediaImageResponse instance (coerced on first access). */
  getImages(): PaginatedMediaImageResponse | undefined {
    if (this.images == null) return undefined;
    if (!(this.images instanceof PaginatedMediaImageResponse)) {
      this.images = new PaginatedMediaImageResponse(this.images as any);
    }
    return this.images;
  }
  /** Returns `videos` as a PaginatedMediaVideoResponse instance (coerced on first access). */
  getVideos(): PaginatedMediaVideoResponse | undefined {
    if (this.videos == null) return undefined;
    if (!(this.videos instanceof PaginatedMediaVideoResponse)) {
      this.videos = new PaginatedMediaVideoResponse(this.videos as any);
    }
    return this.videos;
  }
  /** Returns `documents` as a PaginatedMediaDocumentResponse instance (coerced on first access). */
  getDocuments(): PaginatedMediaDocumentResponse | undefined {
    if (this.documents == null) return undefined;
    if (!(this.documents instanceof PaginatedMediaDocumentResponse)) {
      this.documents = new PaginatedMediaDocumentResponse(this.documents as any);
    }
    return this.documents;
  }
}