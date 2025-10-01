import { BaseService } from './BaseService';
import { MediaVideo } from '../type/MediaVideo';
import { PaginatedMediaVideoResponse } from '../type/PaginatedMediaVideoResponse';
import { MediaVideoSearchInput } from '../type/MediaVideoSearchInput';
import { MediaVideoInput } from '../type/MediaVideoInput';
import { UpdateMediaVideoInput } from '../type/UpdateMediaVideoInput';
/**
 Service for managing media videos
 * @extends BaseService
 */
export class MediaVideoService extends BaseService {
  /**
   Retrieves a specific media video
   * @param id Media video ID
   * @returns Promise<MediaVideo> Media video data
   */
  async getMediaVideo(id: number): Promise<MediaVideo> {
    const variables = { id };
    const result = await this.executeQuery('mediaVideo', variables);
    return new MediaVideo(result.data.mediaVideo);
  }
  /**
   Retrieves media videos with pagination
   * @param input Search input parameters
   * @returns Promise<PaginatedMediaVideoResponse> Paginated media videos
   */
  async getMediaVideos(input?: MediaVideoSearchInput): Promise<PaginatedMediaVideoResponse> {
    const variables = { input };
    const result = await this.executeQuery('mediaVideos', variables);
    return new PaginatedMediaVideoResponse(result.data.mediaVideos);
  }
  /**
   Creates a new media video
   * @param input Media video creation input
   * @returns Promise<MediaVideo> The created media video
   */
  async createMediaVideo(input: MediaVideoInput): Promise<MediaVideo> {
    const variables = { input };
    const result = await this.executeMutation('mediaVideoCreate', variables);
    return new MediaVideo(result.data.mediaVideoCreate);
  }
  /**
   Updates an existing media video
   * @param input Media video update input
   * @returns Promise<MediaVideo> The updated media video
   */
  async updateMediaVideo(input: UpdateMediaVideoInput): Promise<MediaVideo> {
    const variables = { input };
    const result = await this.executeMutation('mediaVideoUpdate', variables);
    return new MediaVideo(result.data.mediaVideoUpdate);
  }
  /**
   Deletes a media video
   * @param id Media video ID
   * @returns Promise<boolean> Success status
   */
  async deleteMediaVideo(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('mediaVideoDelete', variables);
    return result.data.mediaVideoDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}