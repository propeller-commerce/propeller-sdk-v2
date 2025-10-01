/**
 Object class for LocalizedAttachment
 */
export class LocalizedAttachment {
  /** Attachment language */
  private _language: string;
  /** Original Attachment url */
  private _originalUrl: string;
  /** The MIME type of the Attachment. */
  private _mimeType: string;
  /**
   Creates a new instance of LocalizedAttachment
   */
  constructor(data: Partial<LocalizedAttachment> = {}) {
    this._language = data.language!;
    this._originalUrl = data.originalUrl!;
    this._mimeType = data.mimeType!;
  }
  /**
   Attachment language
   */
  get language(): string {
    return this._language;
  }
  /**
   Attachment language
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   Original Attachment url
   */
  get originalUrl(): string {
    return this._originalUrl;
  }
  /**
   Original Attachment url
   */
  set originalUrl(value: string) {
    this._originalUrl = value;
  }
  /**
   The MIME type of the Attachment.
   */
  get mimeType(): string {
    return this._mimeType;
  }
  /**
   The MIME type of the Attachment.
   */
  set mimeType(value: string) {
    this._mimeType = value;
  }
}