/**
 Object class for LocalizedImage
 */
export class LocalizedImage {
  /** Image language */
  private _language: string;
  /** Original image url */
  private _originalUrl: string;
  /** The MIME type of the image. */
  private _mimeType: string;
  /**
   Creates a new instance of LocalizedImage
   */
  constructor(data: Partial<LocalizedImage> = {}) {
    this._language = data.language!;
    this._originalUrl = data.originalUrl!;
    this._mimeType = data.mimeType!;
  }
  /**
   Image language
   */
  get language(): string {
    return this._language;
  }
  /**
   Image language
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   Original image url
   */
  get originalUrl(): string {
    return this._originalUrl;
  }
  /**
   Original image url
   */
  set originalUrl(value: string) {
    this._originalUrl = value;
  }
  /**
   The MIME type of the image.
   */
  get mimeType(): string {
    return this._mimeType;
  }
  /**
   The MIME type of the image.
   */
  set mimeType(value: string) {
    this._mimeType = value;
  }
}