import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
/**
 Object class for ProductMedia
 */
export class ProductMedia {
  /** Product media images */
  private _images?: PaginatedMediaImageResponse;
  /** Product media videos */
  private _videos?: PaginatedMediaVideoResponse;
  /** Product media documents */
  private _documents?: PaginatedMediaDocumentResponse;
  /**
   Creates a new instance of ProductMedia
   */
  constructor(data: Partial<ProductMedia> = {}) {
    this._images = data.images;
    this._videos = data.videos;
    this._documents = data.documents;
  }
  /**
   Product media images
   */
  get images(): PaginatedMediaImageResponse | undefined {
    return this._images;
  }
  /**
   Product media images
   */
  set images(value: PaginatedMediaImageResponse | undefined) {
    this._images = value;
  }
  /**
   Product media videos
   */
  get videos(): PaginatedMediaVideoResponse | undefined {
    return this._videos;
  }
  /**
   Product media videos
   */
  set videos(value: PaginatedMediaVideoResponse | undefined) {
    this._videos = value;
  }
  /**
   Product media documents
   */
  get documents(): PaginatedMediaDocumentResponse | undefined {
    return this._documents;
  }
  /**
   Product media documents
   */
  set documents(value: PaginatedMediaDocumentResponse | undefined) {
    this._documents = value;
  }
}