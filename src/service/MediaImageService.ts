import { MediaImage } from '../type/MediaImage';
import { DeleteMediaImageResponse } from '../type/DeleteMediaImageResponse';
import { PaginatedMediaImageResponse } from '../type/PaginatedMediaImageResponse';
import { MediaImageSearchInput } from '../type/MediaImageSearchInput';
import { MediaImageInput } from '../type/MediaImageInput';
import { UpdateMediaImageInput } from '../type/UpdateMediaImageInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as mediaImageCreateDoc } from '../generated/operations/mediaImageCreate';
import { document as mediaImageUpdateDoc } from '../generated/operations/mediaImageUpdate';
import { document as mediaImageDeleteDoc } from '../generated/operations/mediaImageDelete';
import type { MediaImageCreateVariables, MediaImageDeleteVariables, MediaImageUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing media images
 */
export function mediaImageService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific media image
    /**
       Retrieves media images with pagination
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
