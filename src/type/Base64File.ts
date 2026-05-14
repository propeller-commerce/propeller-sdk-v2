/**
 Object class for Base64File
 */
export class Base64File {
  /** The base64 representation of the file. */
  base64!: string;
  /** The contentType of the base64 content. */
  contentType!: string;
  /** Indication of the fileName to use when converting the base64 to a file. */
  fileName!: string;
  constructor(data: Partial<Base64File> = {}) {
    Object.assign(this, data);
  }
}