/**
 Object class for ImageVariant
 */
export class ImageVariant {
  /** Friendly image name */
  name!: string;
  /** Image variant language */
  language!: string;
  /** Image variant transformation computed url */
  url!: string;
  /** The MIME type of the image. */
  mimeType!: string;
  constructor(data: Partial<ImageVariant> = {}) {
    Object.assign(this, data);
  }

  /** Returns `name`. */
  getName(): string {
    return this.name;
  }
  /** Returns `language`. */
  getLanguage(): string {
    return this.language;
  }
  /** Returns `url`. */
  getUrl(): string {
    return this.url;
  }
  /** Returns `mimeType`. */
  getMimeType(): string {
    return this.mimeType;
  }
}