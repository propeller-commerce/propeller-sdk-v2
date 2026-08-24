/**
 Input object for StandardFileUploadInput
 */
export interface StandardFileUploadInput {
  /** File reference from filesystem [GraphQL Upload form-data specification](https://github.com/jaydenseric/graphql-multipart-request-spec) */
  file: File;
  /** Name to use for storing the file [if not provided the actual upload file name will be used] */
  fileName?: string;
}