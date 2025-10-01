import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for SparePartsMachineMedia
 */
export class SparePartsMachineMedia {
  /** Media images */
  private _images?: PaginatedMediaImageResponse;
  /** Media videos */
  private _videos?: PaginatedMediaVideoResponse;
  /** Media documents */
  private _documents?: PaginatedMediaDocumentResponse;
  /** Media attachments */
  private _attachments?: PaginatedMediaAttachmentResponse;
  /**
   Creates a new instance of SparePartsMachineMedia
   */
  constructor(data: Partial<SparePartsMachineMedia> = {}) {
    this._images = data.images;
    this._videos = data.videos;
    this._documents = data.documents;
    this._attachments = data.attachments;
  }
  /**
   Media images
   */
  get images(): PaginatedMediaImageResponse | undefined {
    return this._images;
  }
  /**
   Media images
   */
  set images(value: PaginatedMediaImageResponse | undefined) {
    this._images = value;
  }
  /**
   Media videos
   */
  get videos(): PaginatedMediaVideoResponse | undefined {
    return this._videos;
  }
  /**
   Media videos
   */
  set videos(value: PaginatedMediaVideoResponse | undefined) {
    this._videos = value;
  }
  /**
   Media documents
   */
  get documents(): PaginatedMediaDocumentResponse | undefined {
    return this._documents;
  }
  /**
   Media documents
   */
  set documents(value: PaginatedMediaDocumentResponse | undefined) {
    this._documents = value;
  }
  /**
   Media attachments
   */
  get attachments(): PaginatedMediaAttachmentResponse | undefined {
    return this._attachments;
  }
  /**
   Media attachments
   */
  set attachments(value: PaginatedMediaAttachmentResponse | undefined) {
    this._attachments = value;
  }
}