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
}