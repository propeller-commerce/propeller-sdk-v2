/**
 Object class for LocalizedAttachment
 */
export interface LocalizedAttachment {
  /** Attachment language */
  language: string;
  /** Original Attachment url */
  originalUrl: string;
  /** The MIME type of the Attachment. */
  mimeType: string;
}