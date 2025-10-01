/**
 Object class for LocalizedDocument
 */
export class LocalizedDocument {
  /** Document language */
  private _language: string;
  /** Original document url */
  private _originalUrl: string;
  /** The MIME type of the document. */
  private _mimeType: string;
  /**
   Creates a new instance of LocalizedDocument
   */
  constructor(data: Partial<LocalizedDocument> = {}) {
    this._language = data.language!;
    this._originalUrl = data.originalUrl!;
    this._mimeType = data.mimeType!;
  }
  /**
   Document language
   */
  get language(): string {
    return this._language;
  }
  /**
   Document language
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   Original document url
   */
  get originalUrl(): string {
    return this._originalUrl;
  }
  /**
   Original document url
   */
  set originalUrl(value: string) {
    this._originalUrl = value;
  }
  /**
   The MIME type of the document.
   */
  get mimeType(): string {
    return this._mimeType;
  }
  /**
   The MIME type of the document.
   */
  set mimeType(value: string) {
    this._mimeType = value;
  }
}