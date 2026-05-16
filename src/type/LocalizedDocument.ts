/**
 Object class for LocalizedDocument
 */
export interface LocalizedDocument {
  /** Document language */
  language: string;
  /** Original document url */
  originalUrl: string;
  /** The MIME type of the document. */
  mimeType: string;
}