import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for OrderMedia
 */
export class OrderMedia {
  /** Media attachments */
  private _attachments?: PaginatedMediaAttachmentResponse;
  /**
   Creates a new instance of OrderMedia
   */
  constructor(data: Partial<OrderMedia> = {}) {
    this._attachments = data.attachments;
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