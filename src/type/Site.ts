/**
 Object class for Site
 */
export class Site {
  /** id field */
  private _id: number;
  /** url field */
  private _url: string;
  /** alternartiveUrl field */
  private _alternartiveUrl?: string;
  /** mobileUrl field */
  private _mobileUrl: string;
  /** fileUrl field */
  private _fileUrl: string;
  /** anonymousUserId field */
  private _anonymousUserId: number;
  /**
   Creates a new instance of Site
   */
  constructor(data: Partial<Site> = {}) {
    this._id = data.id!;
    this._url = data.url!;
    this._alternartiveUrl = data.alternartiveUrl;
    this._mobileUrl = data.mobileUrl!;
    this._fileUrl = data.fileUrl!;
    this._anonymousUserId = data.anonymousUserId!;
  }
  /**
   id field
   */
  get id(): number {
    return this._id;
  }
  /**
   id field
   */
  set id(value: number) {
    this._id = value;
  }
  /**
   url field
   */
  get url(): string {
    return this._url;
  }
  /**
   url field
   */
  set url(value: string) {
    this._url = value;
  }
  /**
   alternartiveUrl field
   */
  get alternartiveUrl(): string | undefined {
    return this._alternartiveUrl;
  }
  /**
   alternartiveUrl field
   */
  set alternartiveUrl(value: string | undefined) {
    this._alternartiveUrl = value;
  }
  /**
   mobileUrl field
   */
  get mobileUrl(): string {
    return this._mobileUrl;
  }
  /**
   mobileUrl field
   */
  set mobileUrl(value: string) {
    this._mobileUrl = value;
  }
  /**
   fileUrl field
   */
  get fileUrl(): string {
    return this._fileUrl;
  }
  /**
   fileUrl field
   */
  set fileUrl(value: string) {
    this._fileUrl = value;
  }
  /**
   anonymousUserId field
   */
  get anonymousUserId(): number {
    return this._anonymousUserId;
  }
  /**
   anonymousUserId field
   */
  set anonymousUserId(value: number) {
    this._anonymousUserId = value;
  }
}