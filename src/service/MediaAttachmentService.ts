import { BaseService } from './BaseService';
import { MediaAttachment } from '../type/MediaAttachment';
import { PaginatedMediaAttachmentResponse } from '../type/PaginatedMediaAttachmentResponse';
import { MediaAttachmentSearchInput } from '../type/MediaAttachmentSearchInput';
import { MediaAttachmentInput } from '../type/MediaAttachmentInput';
import { UpdateMediaAttachmentInput } from '../type/UpdateMediaAttachmentInput';
/**
 Service for managing media attachments
 * @extends BaseService
 */
export class MediaAttachmentService extends BaseService {
  /**
   Retrieves a specific media attachment
   * @param id Media attachment ID
   * @returns Promise<MediaAttachment> Media attachment data
   */
  async getMediaAttachment(id: number): Promise<MediaAttachment> {
    const variables = { id };
    const result = await this.executeQuery('mediaAttachment', variables);
    return result.data.mediaAttachment as MediaAttachment;
  }
  /**
   Retrieves media attachments with pagination
   * @param input Search input parameters
   * @returns Promise<PaginatedMediaAttachmentResponse> Paginated media attachments
   */
  async getMediaAttachments(input?: MediaAttachmentSearchInput): Promise<PaginatedMediaAttachmentResponse> {
    const variables = { input };
    const result = await this.executeQuery('mediaAttachments', variables);
    return result.data.mediaAttachments as PaginatedMediaAttachmentResponse;
  }
  /**
   Creates a new media attachment
   * @param input Media attachment creation input
   * @returns Promise<MediaAttachment> The created media attachment
   */
  async createMediaAttachment(input: MediaAttachmentInput): Promise<MediaAttachment> {
    const variables = { input };
    const result = await this.executeMutation('mediaAttachmentCreate', variables);
    return result.data.mediaAttachmentCreate as MediaAttachment;
  }
  /**
   Updates an existing media attachment
   * @param input Media attachment update input
   * @returns Promise<MediaAttachment> The updated media attachment
   */
  async updateMediaAttachment(input: UpdateMediaAttachmentInput): Promise<MediaAttachment> {
    const variables = { input };
    const result = await this.executeMutation('mediaAttachmentUpdate', variables);
    return result.data.mediaAttachmentUpdate as MediaAttachment;
  }
  /**
   Deletes a media attachment
   * @param id MediaAttachment ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteMediaAttachment(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('mediaAttachmentDelete', variables);
    return result.data.mediaAttachmentDelete;
  }
}