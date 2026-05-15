/**
 Object class for DeleteMediaDocumentResponse
 */
export class DeleteMediaDocumentResponse {
  /** Media id of the deleted document */
  mediaId!: string;
  constructor(data: Partial<DeleteMediaDocumentResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `mediaId`. */
  getMediaId(): string {
    return this.mediaId;
  }
}