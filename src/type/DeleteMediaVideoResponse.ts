/**
 Object class for DeleteMediaVideoResponse
 */
export class DeleteMediaVideoResponse {
  /** Media id of the deleted video */
  private _mediaId: string;
  /**
   Creates a new instance of DeleteMediaVideoResponse
   */
  constructor(data: Partial<DeleteMediaVideoResponse> = {}) {
    this._mediaId = data.mediaId!;
  }
  /**
   Media id of the deleted video
   */
  get mediaId(): string {
    return this._mediaId;
  }
  /**
   Media id of the deleted video
   */
  set mediaId(value: string) {
    this._mediaId = value;
  }
}