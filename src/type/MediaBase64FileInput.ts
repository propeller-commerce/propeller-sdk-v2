/**
 Input object for MediaBase64FileInput
 */
export interface MediaBase64FileInput {
  /** The base64 representation of the file contents. */
  base64: string;
  /** Name to use when converting the base64 to a file. */
  fileName: string;
}