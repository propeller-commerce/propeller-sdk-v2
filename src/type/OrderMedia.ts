import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for OrderMedia
 */
export class OrderMedia {
  /** Media attachments */
  attachments?: PaginatedMediaAttachmentResponse;
  constructor(data: Partial<OrderMedia> = {}) {
    Object.assign(this, data);
  }
}