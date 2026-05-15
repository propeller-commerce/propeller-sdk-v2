/**
 Object class for LocalizedDocument
 */
export class LocalizedDocument {
  /** Document language */
  language!: string;
  /** Original document url */
  originalUrl!: string;
  /** The MIME type of the document. */
  mimeType!: string;
  constructor(data: Partial<LocalizedDocument> = {}) {
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