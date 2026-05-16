import { MediaImage } from '../type/MediaImage';
import { DeleteMediaImageResponse } from '../type/DeleteMediaImageResponse';
import { PaginatedMediaImageResponse } from '../type/PaginatedMediaImageResponse';
import { MediaImageSearchInput } from '../type/MediaImageSearchInput';
import { MediaImageInput } from '../type/MediaImageInput';
import { UpdateMediaImageInput } from '../type/UpdateMediaImageInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as mediaImageDoc } from '../generated/operations/mediaImage';
import { document as mediaImagesDoc } from '../generated/operations/mediaImages';
import { document as mediaImageCreateDoc } from '../generated/operations/mediaImageCreate';
import { document as mediaImageUpdateDoc } from '../generated/operations/mediaImageUpdate';
import { document as mediaImageDeleteDoc } from '../generated/operations/mediaImageDelete';
/**
 Service for managing media images
 */
export function mediaImageService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific media image
       * @deprecated The upstream `mediaImage` query is deprecated; read via `media.image` from the parent resource instead.
       * @param id Media image ID
       * @returns Promise<MediaImage> Media image data
       */
    async getMediaImage(id: number): Promise<MediaImage> {
      const result = await runOperation(client, mediaImageDoc, 'mediaImage', { id });
      return result.data.mediaImage as MediaImage;
    },
    /**
       Retrieves media images with pagination
       * @deprecated The upstream `mediaImages` query is deprecated; read via `media.images` from the parent resource instead.
       * @param input Search input parameters
       * @returns Promise<PaginatedMediaImageResponse> Paginated media images
       */
    async getMediaImages(input?: MediaImageSearchInput): Promise<PaginatedMediaImageResponse> {
      const result = await runOperation(client, mediaImagesDoc, 'mediaImages', { input });
      return result.data.mediaImages as PaginatedMediaImageResponse;
    },
    /**
       Creates a new media image
       * @param input Media image creation input
       * @returns Promise<MediaImage> The created media image
       */
    async createMediaImage(input: MediaImageInput): Promise<MediaImage> {
      const result = await runOperation(client, mediaImageCreateDoc, 'mediaImageCreate', { input });
      return result.data.mediaImageCreate as MediaImage;
    },
    /**
       Updates an existing media image
       * @param input Media image update input
       * @returns Promise<MediaImage> The updated media image
       */
    async updateMediaImage(input: UpdateMediaImageInput): Promise<MediaImage> {
      const result = await runOperation(client, mediaImageUpdateDoc, 'mediaImageUpdate', { input });
      return result.data.mediaImageUpdate as MediaImage;
    },
    /**
       Deletes a media image
       * @param id Media image ID
       * @returns Promise<boolean> Success status
       */
    async deleteMediaImage(id: number): Promise<DeleteMediaImageResponse> {
      const result = await runOperation(client, mediaImageDeleteDoc, 'mediaImageDelete', { id });
      return result.data.mediaImageDelete as DeleteMediaImageResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `mediaImageService(client)`.
 */
export class MediaImageService {
  private readonly _svc: ReturnType<typeof mediaImageService>;
  constructor(client: GraphQLClient) { this._svc = mediaImageService(client); }
  /**
   * Retrieves a specific media image
   * @param id Media image ID
   */
  getMediaImage(id: number): Promise<MediaImage> { return this._svc.getMediaImage(id); }
  /**
   * Retrieves media images with pagination
   * @param input Search input parameters
   */
  getMediaImages(input?: MediaImageSearchInput): Promise<PaginatedMediaImageResponse> { return this._svc.getMediaImages(input); }
  /**
   * Creates a new media image
   * @param input Media image creation input
   */
  createMediaImage(input: MediaImageInput): Promise<MediaImage> { return this._svc.createMediaImage(input); }
  /**
   * Updates an existing media image
   * @param input Media image update input
   */
  updateMediaImage(input: UpdateMediaImageInput): Promise<MediaImage> { return this._svc.updateMediaImage(input); }
  /**
   * Deletes a media image
   * @param id Media image ID
   */
  deleteMediaImage(id: number): Promise<DeleteMediaImageResponse> { return this._svc.deleteMediaImage(id); }
}
