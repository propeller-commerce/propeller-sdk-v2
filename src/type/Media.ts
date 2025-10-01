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
  private _image?: MediaImage;
  /** List of media images */
  private _images?: PaginatedMediaImageResponse;
  /** Media video */
  private _video?: MediaVideo;
  /** List of media videos */
  private _videos?: PaginatedMediaVideoResponse;
  /** Media document */
  private _document?: MediaDocument;
  /** List of media documents */
  private _documents?: PaginatedMediaDocumentResponse;
  /** attachment field */
  private _attachment: MediaAttachment;
  /** attachments field */
  private _attachments: PaginatedMediaAttachmentResponse;
  /**
   Creates a new instance of Media
   */
  constructor(data: Partial<Media> = {}) {
    this._image = data.image;
    this._images = data.images;
    this._video = data.video;
    this._videos = data.videos;
    this._document = data.document;
    this._documents = data.documents;
    this._attachment = data.attachment!;
    this._attachments = data.attachments!;
  }
  /**
   Media image
   */
  get image(): MediaImage | undefined {
    return this._image;
  }
  /**
   Media image
   */
  set image(value: MediaImage | undefined) {
    this._image = value;
  }
  /**
   List of media images
   */
  get images(): PaginatedMediaImageResponse | undefined {
    return this._images;
  }
  /**
   List of media images
   */
  set images(value: PaginatedMediaImageResponse | undefined) {
    this._images = value;
  }
  /**
   Media video
   */
  get video(): MediaVideo | undefined {
    return this._video;
  }
  /**
   Media video
   */
  set video(value: MediaVideo | undefined) {
    this._video = value;
  }
  /**
   List of media videos
   */
  get videos(): PaginatedMediaVideoResponse | undefined {
    return this._videos;
  }
  /**
   List of media videos
   */
  set videos(value: PaginatedMediaVideoResponse | undefined) {
    this._videos = value;
  }
  /**
   Media document
   */
  get document(): MediaDocument | undefined {
    return this._document;
  }
  /**
   Media document
   */
  set document(value: MediaDocument | undefined) {
    this._document = value;
  }
  /**
   List of media documents
   */
  get documents(): PaginatedMediaDocumentResponse | undefined {
    return this._documents;
  }
  /**
   List of media documents
   */
  set documents(value: PaginatedMediaDocumentResponse | undefined) {
    this._documents = value;
  }
  /**
   attachment field
   */
  get attachment(): MediaAttachment {
    return this._attachment;
  }
  /**
   attachment field
   */
  set attachment(value: MediaAttachment) {
    this._attachment = value;
  }
  /**
   attachments field
   */
  get attachments(): PaginatedMediaAttachmentResponse {
    return this._attachments;
  }
  /**
   attachments field
   */
  set attachments(value: PaginatedMediaAttachmentResponse) {
    this._attachments = value;
  }
}