/**
 Object class for DeleteMediaVideoResponse
 */
export class DeleteMediaVideoResponse {
  /** Media id of the deleted video */
  mediaId!: string;
  constructor(data: Partial<DeleteMediaVideoResponse> = {}) {
    Object.assign(this, data);
  }

  /** Returns `mediaId`. */
  getMediaId(): string {
    return this.mediaId;
  }
}