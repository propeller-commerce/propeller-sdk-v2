/**
 Object class for DeleteMediaAttachmentResponse
 */
export class DeleteMediaAttachmentResponse {
  /** Media id of the deleted attachment */
  mediaId!: string;
  constructor(data: Partial<DeleteMediaAttachmentResponse> = {}) {
    Object.assign(this, data);
  }
}