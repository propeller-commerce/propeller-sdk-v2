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
}