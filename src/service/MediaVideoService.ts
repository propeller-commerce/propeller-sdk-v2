import { DeleteMediaVideoResponse } from '../type/DeleteMediaVideoResponse';
import { MediaVideo } from '../type/MediaVideo';
import { PaginatedMediaVideoResponse } from '../type/PaginatedMediaVideoResponse';
import { MediaVideoSearchInput } from '../type/MediaVideoSearchInput';
import { MediaVideoInput } from '../type/MediaVideoInput';
import { UpdateMediaVideoInput } from '../type/UpdateMediaVideoInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as mediaVideoDoc } from '../generated/operations/mediaVideo';
import { document as mediaVideosDoc } from '../generated/operations/mediaVideos';
import { document as mediaVideoCreateDoc } from '../generated/operations/mediaVideoCreate';
import { document as mediaVideoUpdateDoc } from '../generated/operations/mediaVideoUpdate';
import { document as mediaVideoDeleteDoc } from '../generated/operations/mediaVideoDelete';
import type { MediaVideoDeleteVariables, MediaVideoVariables, MediaVideosVariables } from '../generated/operationVariables';
/**
 Service for managing media videos
 */
export function mediaVideoService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific media video
       * @deprecated The upstream `mediaVideo` query is deprecated; read via `media.video` from the parent resource instead.
       * @param id Media video ID
       * @returns Promise<MediaVideo> Media video data
       */
    async getMediaVideo(variables: MediaVideoVariables): Promise<MediaVideo> {
      const result = await runOperation(client, mediaVideoDoc, 'mediaVideo', variables);
      return result.data.mediaVideo as MediaVideo;
    },
    /**
       Retrieves media videos with pagination
       * @deprecated The upstream `mediaVideos` query is deprecated; read via `media.videos` from the parent resource instead.
       * @param input Search input parameters
       * @returns Promise<PaginatedMediaVideoResponse> Paginated media videos
       */
    async getMediaVideos(variables: MediaVideosVariables): Promise<PaginatedMediaVideoResponse> {
      const result = await runOperation(client, mediaVideosDoc, 'mediaVideos', variables);
      return result.data.mediaVideos as PaginatedMediaVideoResponse;
    },
    /**
       Creates a new media video
       * @param input Media video creation input
       * @returns Promise<MediaVideo> The created media video
       */
    async createMediaVideo(input: MediaVideoInput): Promise<MediaVideo> {
      const result = await runOperation(client, mediaVideoCreateDoc, 'mediaVideoCreate', { input });
      return result.data.mediaVideoCreate as MediaVideo;
    },
    /**
       Updates an existing media video
       * @param input Media video update input
       * @returns Promise<MediaVideo> The updated media video
       */
    async updateMediaVideo(input: UpdateMediaVideoInput): Promise<MediaVideo> {
      const result = await runOperation(client, mediaVideoUpdateDoc, 'mediaVideoUpdate', { input });
      return result.data.mediaVideoUpdate as MediaVideo;
    },
    /**
       Deletes a media video
       * @param id Media video ID
       * @returns Promise<boolean> Success status
       */
    async deleteMediaVideo(variables: MediaVideoDeleteVariables): Promise<DeleteMediaVideoResponse> {
      const result = await runOperation(client, mediaVideoDeleteDoc, 'mediaVideoDelete', variables);
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
   * Retrieves a specific media video
   * @param id Media video ID
   */
  getMediaVideo(variables: MediaVideoVariables): Promise<MediaVideo> { return this._svc.getMediaVideo(variables); }
  /**
   * Retrieves media videos with pagination
   * @param input Search input parameters
   */
  getMediaVideos(variables: MediaVideosVariables): Promise<PaginatedMediaVideoResponse> { return this._svc.getMediaVideos(variables); }
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
   * @param id Media video ID
   */
  deleteMediaVideo(variables: MediaVideoDeleteVariables): Promise<DeleteMediaVideoResponse> { return this._svc.deleteMediaVideo(variables); }
}
