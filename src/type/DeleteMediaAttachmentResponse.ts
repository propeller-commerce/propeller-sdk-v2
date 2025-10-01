/**
 Object class for DeleteMediaAttachmentResponse
 */
export class DeleteMediaAttachmentResponse {
  /** Media id of the deleted attachment */
  private _mediaId: string;
  /**
   Creates a new instance of DeleteMediaAttachmentResponse
   */
  constructor(data: Partial<DeleteMediaAttachmentResponse> = {}) {
    this._mediaId = data.mediaId!;
  }
  /**
   Media id of the deleted attachment
   */
  get mediaId(): string {
    return this._mediaId;
  }
  /**
   Media id of the deleted attachment
   */
  set mediaId(value: string) {
    this._mediaId = value;
  }
}