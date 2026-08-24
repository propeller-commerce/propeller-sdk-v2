/**
 Input object for Base64FileInput
 */
export interface Base64FileInput {
  /** The base64 representation of the file contents. */
  base64: string;
  /** The contentType of the base64 content. */
  contentType: string;
  /** Indication of the fileName to use when converting the base64 to a file. */
  fileName: string;
}