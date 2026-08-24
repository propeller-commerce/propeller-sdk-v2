import { DeleteMediaVideoResponse } from '../type/DeleteMediaVideoResponse';
import { MediaVideo } from '../type/MediaVideo';
import { PaginatedMediaVideoResponse } from '../type/PaginatedMediaVideoResponse';
import { MediaVideoSearchInput } from '../type/MediaVideoSearchInput';
import { MediaVideoInput } from '../type/MediaVideoInput';
import { UpdateMediaVideoInput } from '../type/UpdateMediaVideoInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as mediaVideoCreateDoc } from '../generated/operations/mediaVideoCreate';
import { document as mediaVideoUpdateDoc } from '../generated/operations/mediaVideoUpdate';
import { document as mediaVideoDeleteDoc } from '../generated/operations/mediaVideoDelete';
import type { MediaVideoDeleteVariables } from '../generated/operationVariables';
/**
 Service for managing media videos
 */
export function mediaVideoService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific media video
    /**
       Retrieves media videos with pagination
    /**
       Creates a new media video
       * @param input Media video creation input
       * @returns Promise<MediaVideo> The created media video
       */
    async createMediaVideo(input: MediaVideoInput): Promise<MediaVideo> {
      const result = await runOperation<{ mediaVideoCreate: MediaVideo }>(client, mediaVideoCreateDoc, 'mediaVideoCreate', { input });
      return result.data.mediaVideoCreate as MediaVideo;
    },
    /**
       Updates an existing media video
       * @param input Media video update input
       * @returns Promise<MediaVideo> The updated media video
       */
    async updateMediaVideo(input: UpdateMediaVideoInput): Promise<MediaVideo> {
      const result = await runOperation<{ mediaVideoUpdate: MediaVideo }>(client, mediaVideoUpdateDoc, 'mediaVideoUpdate', { input });
      return result.data.mediaVideoUpdate as MediaVideo;
    },
    /**
       Deletes a media video
       * @param variables Media video ID
       * @returns Promise<boolean> Success status
       */
    async deleteMediaVideo(variables: MediaVideoDeleteVariables): Promise<DeleteMediaVideoResponse> {
      const result = await runOperation<{ mediaVideoDelete: DeleteMediaVideoResponse }>(client, mediaVideoDeleteDoc, 'mediaVideoDelete', variables);
      return result.data.mediaVideoDelete as DeleteMediaVideoResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `mediaVideoService(client)`.
 */
export class MediaVideoService {
  private readonly _svc: ReturnType<typeof mediaVideoService>;
  constructor(client: GraphQLClient) { this._svc = mediaVideoService(client); }
  /**
   * Creates a new media video
   * @param input Media video creation input
   */
  createMediaVideo(input: MediaVideoInput): Promise<MediaVideo> { return this._svc.createMediaVideo(input); }
  /**
   * Updates an existing media video
   * @param input Media video update input
   */
  updateMediaVideo(input: UpdateMediaVideoInput): Promise<MediaVideo> { return this._svc.updateMediaVideo(input); }
  /**
   * Deletes a media video
   * @param variables Media video ID
   */
  deleteMediaVideo(variables: MediaVideoDeleteVariables): Promise<DeleteMediaVideoResponse> { return this._svc.deleteMediaVideo(variables); }
}
