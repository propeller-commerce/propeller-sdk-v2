/**
 Object class for DeleteMediaDocumentResponse
 */
export class DeleteMediaDocumentResponse {
  /** Media id of the deleted document */
  private _mediaId: string;
  /**
   Creates a new instance of DeleteMediaDocumentResponse
   */
  constructor(data: Partial<DeleteMediaDocumentResponse> = {}) {
    this._mediaId = data.mediaId!;
  }
  /**
   Media id of the deleted document
   */
  get mediaId(): string {
    return this._mediaId;
  }
  /**
   Media id of the deleted document
   */
  set mediaId(value: string) {
    this._mediaId = value;
  }
}