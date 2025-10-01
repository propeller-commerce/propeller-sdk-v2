import { BaseService } from './BaseService';
import { Media } from '../type/Media';
import { ObjectMediaSearchInput } from '../type/ObjectMediaSearchInput';
/**
 Service for managing media content
 * @extends BaseService
 */
export class MediaService extends BaseService {
  /**
   Retrieves a specific media item
   * @param id Media ID
   * @returns Promise<Media> Media data
   */
  async getMedia(id: number): Promise<Media> {
    const variables = { id };
    const result = await this.executeQuery('media', variables);
    return new Media(result.data.media);
  }
  /**
   Retrieves media items with optional search
   * @param input Search input parameters
   * @returns Promise<Media[]> List of media items
   */
  async getMediaList(input?: ObjectMediaSearchInput): Promise<Media[]> {
    const variables = { input };
    const result = await this.executeQuery('medias', variables);
    return result.data.medias.map((media: any) => new Media(media));
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}