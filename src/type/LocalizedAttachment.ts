/**
 Object class for LocalizedAttachment
 */
export class LocalizedAttachment {
  /** Attachment language */
  language!: string;
  /** Original Attachment url */
  originalUrl!: string;
  /** The MIME type of the Attachment. */
  mimeType!: string;
  constructor(data: Partial<LocalizedAttachment> = {}) {
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