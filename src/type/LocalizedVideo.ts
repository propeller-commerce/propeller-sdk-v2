/**
 Object class for LocalizedVideo
 */
export class LocalizedVideo {
  /** Video language */
  language!: string;
  /** Video URI */
  uri!: string;
  /** The MIME type of the video. */
  mimeType?: string;
  constructor(data: Partial<LocalizedVideo> = {}) {
    Object.assign(this, data);
  }

  /** Returns `language`. */
  getLanguage(): string {
    return this.language;
  }
  /** Returns `uri`. */
  getUri(): string {
    return this.uri;
  }
  /** Returns `mimeType`. */
  getMimeType(): string | undefined {
    return this.mimeType;
  }
}