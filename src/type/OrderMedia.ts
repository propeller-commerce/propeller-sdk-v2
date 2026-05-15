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

  /** Returns `attachments` as a PaginatedMediaAttachmentResponse instance (coerced on first access). */
  getAttachments(): PaginatedMediaAttachmentResponse | undefined {
    if (this.attachments == null) return undefined;
    if (!(this.attachments instanceof PaginatedMediaAttachmentResponse)) {
      this.attachments = new PaginatedMediaAttachmentResponse(this.attachments as any);
    }
    return this.attachments;
  }
}