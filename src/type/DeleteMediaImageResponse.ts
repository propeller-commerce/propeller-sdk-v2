/**
 Object class for DeleteMediaImageResponse
 */
export class DeleteMediaImageResponse {
  /** Media id of the deleted image */
  private _mediaId: string;
  /**
   Creates a new instance of DeleteMediaImageResponse
   */
  constructor(data: Partial<DeleteMediaImageResponse> = {}) {
    this._mediaId = data.mediaId!;
  }
  /**
   Media id of the deleted image
   */
  get mediaId(): string {
    return this._mediaId;
  }
  /**
   Media id of the deleted image
   */
  set mediaId(value: string) {
    this._mediaId = value;
  }
}