/**
 Object class for LocalizedVideo
 */
export interface LocalizedVideo {
  /** Video language */
  language: string;
  /** Video URI */
  uri: string;
  /** The MIME type of the video. */
  mimeType?: string;
}