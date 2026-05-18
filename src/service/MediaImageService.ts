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
import type { MediaImageCreateVariables, MediaImageDeleteVariables, MediaImageUpdateVariables, MediaImageVariables, MediaImagesVariables } from '../generated/operationVariables';
/**
 Service for managing media images
 */
export function mediaImageService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific media image
       * @deprecated The upstream `mediaImage` query is deprecated; read via `media.image` from the parent resource instead.
       * @param variables Media image ID
       * @returns Promise<MediaImage> Media image data
       */
    async getMediaImage(variables: MediaImageVariables): Promise<MediaImage> {
      const result = await runOperation<{ mediaImage: MediaImage }>(client, mediaImageDoc, 'mediaImage', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.mediaImage as MediaImage;
    },
    /**
       Retrieves media images with pagination
       * @deprecated The upstream `mediaImages` query is deprecated; read via `media.images` from the parent resource instead.
       * @param variables Search input parameters
       * @returns Promise<PaginatedMediaImageResponse> Paginated media images
       */
    async getMediaImages(variables: MediaImagesVariables): Promise<PaginatedMediaImageResponse> {
      const result = await runOperation<{ mediaImages: PaginatedMediaImageResponse }>(client, mediaImagesDoc, 'mediaImages', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.mediaImages as PaginatedMediaImageResponse;
    },
    /**
       Creates a new media image
       * @param variables Media image creation input
       * @returns Promise<MediaImage> The created media image
       */
    async createMediaImage(variables: MediaImageCreateVariables): Promise<MediaImage> {
      const result = await runOperation<{ mediaImageCreate: MediaImage }>(client, mediaImageCreateDoc, 'mediaImageCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.mediaImageCreate as MediaImage;
    },
    /**
       Updates an existing media image
       * @param variables Media image update input
       * @returns Promise<MediaImage> The updated media image
       */
    async updateMediaImage(variables: MediaImageUpdateVariables): Promise<MediaImage> {
      const result = await runOperation<{ mediaImageUpdate: MediaImage }>(client, mediaImageUpdateDoc, 'mediaImageUpdate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.mediaImageUpdate as MediaImage;
    },
    /**
       Deletes a media image
       * @param variables Media image ID
       * @returns Promise<boolean> Success status
       */
    async deleteMediaImage(variables: MediaImageDeleteVariables): Promise<DeleteMediaImageResponse> {
      const result = await runOperation<{ mediaImageDelete: DeleteMediaImageResponse }>(client, mediaImageDeleteDoc, 'mediaImageDelete', variables);
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
   * @param variables Media image ID
   */
  getMediaImage(variables: MediaImageVariables): Promise<MediaImage> { return this._svc.getMediaImage(variables); }
  /**
   * Retrieves media images with pagination
   * @param variables Search input parameters
   */
  getMediaImages(variables: MediaImagesVariables): Promise<PaginatedMediaImageResponse> { return this._svc.getMediaImages(variables); }
  /**
   * Creates a new media image
   * @param variables Media image creation input
   */
  createMediaImage(variables: MediaImageCreateVariables): Promise<MediaImage> { return this._svc.createMediaImage(variables); }
  /**
   * Updates an existing media image
   * @param variables Media image update input
   */
  updateMediaImage(variables: MediaImageUpdateVariables): Promise<MediaImage> { return this._svc.updateMediaImage(variables); }
  /**
   * Deletes a media image
   * @param variables Media image ID
   */
  deleteMediaImage(variables: MediaImageDeleteVariables): Promise<DeleteMediaImageResponse> { return this._svc.deleteMediaImage(variables); }
}
