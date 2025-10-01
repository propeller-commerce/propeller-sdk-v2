/**
 Object class for ImageVariant
 */
export class ImageVariant {
  /** Friendly image name */
  private _name: string;
  /** Image variant language */
  private _language: string;
  /** Image variant transformation computed url */
  private _url: string;
  /** The MIME type of the image. */
  private _mimeType: string;
  /**
   Creates a new instance of ImageVariant
   */
  constructor(data: Partial<ImageVariant> = {}) {
    this._name = data.name!;
    this._language = data.language!;
    this._url = data.url!;
    this._mimeType = data.mimeType!;
  }
  /**
   Friendly image name
   */
  get name(): string {
    return this._name;
  }
  /**
   Friendly image name
   */
  set name(value: string) {
    this._name = value;
  }
  /**
   Image variant language
   */
  get language(): string {
    return this._language;
  }
  /**
   Image variant language
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   Image variant transformation computed url
   */
  get url(): string {
    return this._url;
  }
  /**
   Image variant transformation computed url
   */
  set url(value: string) {
    this._url = value;
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