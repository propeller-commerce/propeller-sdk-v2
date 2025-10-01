/**
 Object class for Base64File
 */
export class Base64File {
  /** The base64 representation of the file. */
  private _base64: string;
  /** The contentType of the base64 content. */
  private _contentType: string;
  /** Indication of the fileName to use when converting the base64 to a file. */
  private _fileName: string;
  /**
   Creates a new instance of Base64File
   */
  constructor(data: Partial<Base64File> = {}) {
    this._base64 = data.base64!;
    this._contentType = data.contentType!;
    this._fileName = data.fileName!;
  }
  /**
   The base64 representation of the file.
   */
  get base64(): string {
    return this._base64;
  }
  /**
   The base64 representation of the file.
   */
  set base64(value: string) {
    this._base64 = value;
  }
  /**
   The contentType of the base64 content.
   */
  get contentType(): string {
    return this._contentType;
  }
  /**
   The contentType of the base64 content.
   */
  set contentType(value: string) {
    this._contentType = value;
  }
  /**
   Indication of the fileName to use when converting the base64 to a file.
   */
  get fileName(): string {
    return this._fileName;
  }
  /**
   Indication of the fileName to use when converting the base64 to a file.
   */
  set fileName(value: string) {
    this._fileName = value;
  }
}