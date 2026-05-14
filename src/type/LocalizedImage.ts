/**
 Object class for LocalizedImage
 */
export interface LocalizedImage {
  /** Image language */
  language: string;
  /** Original image url */
  originalUrl: string;
  /** The MIME type of the image. */
  mimeType: string;
}