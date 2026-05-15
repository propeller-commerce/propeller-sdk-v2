/**
 Object class for DeleteMediaImageResponse
 */
export class DeleteMediaImageResponse {
  /** Media id of the deleted image */
  mediaId!: string;
  constructor(data: Partial<DeleteMediaImageResponse> = {}) {
    Object.assign(this, data);
  }
}