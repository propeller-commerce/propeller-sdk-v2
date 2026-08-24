import { UploadType } from '../enum/UploadType';
import { CacheControlInput } from './CacheControlInput';
import { MediaBase64FileInput } from './MediaBase64FileInput';
import { StandardFileUploadInput } from './StandardFileUploadInput';
import { UrlFileUploadInput } from './UrlFileUploadInput';
/**
 Input object for UploadFileInput
 */
export interface UploadFileInput {
  /** Language specific media item [Default value 'EN'] */
  language?: string;
  /** Upload type */
  uploadType: UploadType;
  /** Cache control options */
  cacheControl?: CacheControlInput;
  /** Base64 file upload */
  base64File?: MediaBase64FileInput;
  /** File reference from filesystem [GraphQL Upload form-data specification](https://github.com/jaydenseric/graphql-multipart-request-spec) */
  file?: StandardFileUploadInput;
  /** The public url to the file. */
  urlFile?: UrlFileUploadInput;
}