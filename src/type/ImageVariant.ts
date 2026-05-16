/**
 Object class for ImageVariant
 */
export interface ImageVariant {
  /** Friendly image name */
  name: string;
  /** Image variant language */
  language: string;
  /** Image variant transformation computed url */
  url: string;
  /** The MIME type of the image. */
  mimeType: string;
}