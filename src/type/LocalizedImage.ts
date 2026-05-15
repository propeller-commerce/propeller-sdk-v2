/**
 Object class for LocalizedImage
 */
export class LocalizedImage {
  /** Image language */
  language!: string;
  /** Original image url */
  originalUrl!: string;
  /** The MIME type of the image. */
  mimeType!: string;
  constructor(data: Partial<LocalizedImage> = {}) {
    Object.assign(this, data);
  }

  /** Returns `language`. */
  getLanguage(): string {
    return this.language;
  }
  /** Returns `originalUrl`. */
  getOriginalUrl(): string {
    return this.originalUrl;
  }
  /** Returns `mimeType`. */
  getMimeType(): string {
    return this.mimeType;
  }
}