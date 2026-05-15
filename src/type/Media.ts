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

  /** Returns `image` as a MediaImage instance (coerced on first access). */
  getImage(): MediaImage | undefined {
    if (this.image == null) return undefined;
    if (!(this.image instanceof MediaImage)) {
      this.image = new MediaImage(this.image as any);
    }
    return this.image;
  }
  /** Returns `images` as a PaginatedMediaImageResponse instance (coerced on first access). */
  getImages(): PaginatedMediaImageResponse | undefined {
    if (this.images == null) return undefined;
    if (!(this.images instanceof PaginatedMediaImageResponse)) {
      this.images = new PaginatedMediaImageResponse(this.images as any);
    }
    return this.images;
  }
  /** Returns `video` as a MediaVideo instance (coerced on first access). */
  getVideo(): MediaVideo | undefined {
    if (this.video == null) return undefined;
    if (!(this.video instanceof MediaVideo)) {
      this.video = new MediaVideo(this.video as any);
    }
    return this.video;
  }
  /** Returns `videos` as a PaginatedMediaVideoResponse instance (coerced on first access). */
  getVideos(): PaginatedMediaVideoResponse | undefined {
    if (this.videos == null) return undefined;
    if (!(this.videos instanceof PaginatedMediaVideoResponse)) {
      this.videos = new PaginatedMediaVideoResponse(this.videos as any);
    }
    return this.videos;
  }
  /** Returns `document` as a MediaDocument instance (coerced on first access). */
  getDocument(): MediaDocument | undefined {
    if (this.document == null) return undefined;
    if (!(this.document instanceof MediaDocument)) {
      this.document = new MediaDocument(this.document as any);
    }
    return this.document;
  }
  /** Returns `documents` as a PaginatedMediaDocumentResponse instance (coerced on first access). */
  getDocuments(): PaginatedMediaDocumentResponse | undefined {
    if (this.documents == null) return undefined;
    if (!(this.documents instanceof PaginatedMediaDocumentResponse)) {
      this.documents = new PaginatedMediaDocumentResponse(this.documents as any);
    }
    return this.documents;
  }
  /** Returns `attachment` as a MediaAttachment instance (coerced on first access). */
  getAttachment(): MediaAttachment | undefined {
    if (this.attachment == null) return undefined;
    if (!(this.attachment instanceof MediaAttachment)) {
      this.attachment = new MediaAttachment(this.attachment as any);
    }
    return this.attachment;
  }
  /** Returns `attachments` as a PaginatedMediaAttachmentResponse instance (coerced on first access). */
  getAttachments(): PaginatedMediaAttachmentResponse | undefined {
    if (this.attachments == null) return undefined;
    if (!(this.attachments instanceof PaginatedMediaAttachmentResponse)) {
      this.attachments = new PaginatedMediaAttachmentResponse(this.attachments as any);
    }
    return this.attachments;
  }
}