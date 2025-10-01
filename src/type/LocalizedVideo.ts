/**
 Object class for LocalizedVideo
 */
export class LocalizedVideo {
  /** Video language */
  private _language: string;
  /** Video URI */
  private _uri: string;
  /** The MIME type of the video. */
  private _mimeType?: string;
  /**
   Creates a new instance of LocalizedVideo
   */
  constructor(data: Partial<LocalizedVideo> = {}) {
    this._language = data.language!;
    this._uri = data.uri!;
    this._mimeType = data.mimeType;
  }
  /**
   Video language
   */
  get language(): string {
    return this._language;
  }
  /**
   Video language
   */
  set language(value: string) {
    this._language = value;
  }
  /**
   Video URI
   */
  get uri(): string {
    return this._uri;
  }
  /**
   Video URI
   */
  set uri(value: string) {
    this._uri = value;
  }
  /**
   The MIME type of the video.
   */
  get mimeType(): string | undefined {
    return this._mimeType;
  }
  /**
   The MIME type of the video.
   */
  set mimeType(value: string | undefined) {
    this._mimeType = value;
  }
}