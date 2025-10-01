import { BaseService } from './BaseService';
import { MediaImage } from '../type/MediaImage';
import { PaginatedMediaImageResponse } from '../type/PaginatedMediaImageResponse';
import { MediaImageSearchInput } from '../type/MediaImageSearchInput';
import { MediaImageInput } from '../type/MediaImageInput';
import { UpdateMediaImageInput } from '../type/UpdateMediaImageInput';
/**
 Service for managing media images
 * @extends BaseService
 */
export class MediaImageService extends BaseService {
  /**
   Retrieves a specific media image
   * @param id Media image ID
   * @returns Promise<MediaImage> Media image data
   */
  async getMediaImage(id: number): Promise<MediaImage> {
    const variables = { id };
    const result = await this.executeQuery('mediaImage', variables);
    return new MediaImage(result.data.mediaImage);
  }
  /**
   Retrieves media images with pagination
   * @param input Search input parameters
   * @returns Promise<PaginatedMediaImageResponse> Paginated media images
   */
  async getMediaImages(input?: MediaImageSearchInput): Promise<PaginatedMediaImageResponse> {
    const variables = { input };
    const result = await this.executeQuery('mediaImages', variables);
    return new PaginatedMediaImageResponse(result.data.mediaImages);
  }
  /**
   Creates a new media image
   * @param input Media image creation input
   * @returns Promise<MediaImage> The created media image
   */
  async createMediaImage(input: MediaImageInput): Promise<MediaImage> {
    const variables = { input };
    const result = await this.executeMutation('mediaImageCreate', variables);
    return new MediaImage(result.data.mediaImageCreate);
  }
  /**
   Updates an existing media image
   * @param input Media image update input
   * @returns Promise<MediaImage> The updated media image
   */
  async updateMediaImage(input: UpdateMediaImageInput): Promise<MediaImage> {
    const variables = { input };
    const result = await this.executeMutation('mediaImageUpdate', variables);
    return new MediaImage(result.data.mediaImageUpdate);
  }
  /**
   Deletes a media image
   * @param id Media image ID
   * @returns Promise<boolean> Success status
   */
  async deleteMediaImage(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('mediaImageDelete', variables);
    return result.data.mediaImageDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}