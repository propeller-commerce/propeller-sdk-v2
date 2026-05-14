import { MediaImage } from './MediaImage';
import { PaginatedMediaImageResponse } from './PaginatedMediaImageResponse';
import { MediaVideo } from './MediaVideo';
import { PaginatedMediaVideoResponse } from './PaginatedMediaVideoResponse';
import { MediaDocument } from './MediaDocument';
import { PaginatedMediaDocumentResponse } from './PaginatedMediaDocumentResponse';
import { MediaAttachment } from './MediaAttachment';
import { PaginatedMediaAttachmentResponse } from './PaginatedMediaAttachmentResponse';
/**
 Object class for Media
 */
export class Media {
  /** Media image */
  image?: MediaImage;
  /** List of media images */
  images?: PaginatedMediaImageResponse;
  /** Media video */
  video?: MediaVideo;
  /** List of media videos */
  videos?: PaginatedMediaVideoResponse;
  /** Media document */
  document?: MediaDocument;
  /** List of media documents */
  documents?: PaginatedMediaDocumentResponse;
  /** attachment field */
  attachment!: MediaAttachment;
  /** attachments field */
  attachments!: PaginatedMediaAttachmentResponse;
  constructor(data: Partial<Media> = {}) {
    Object.assign(this, data);
  }
}