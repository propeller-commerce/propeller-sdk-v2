import { BaseService } from './BaseService';
import { DeleteMediaAttachmentResponse } from '../type/DeleteMediaAttachmentResponse';
import { MediaAttachment } from '../type/MediaAttachment';
import { MediaAttachmentInput } from '../type/MediaAttachmentInput';
import { UpdateMediaAttachmentInput } from '../type/UpdateMediaAttachmentInput';
/**
 Service for managing media attachments
 * @extends BaseService
 */
export class MediaAttachmentService extends BaseService {
  /**
   Creates a new media attachment
   * @param input Media attachment creation input
   * @returns Promise<MediaAttachment> The created media attachment
   */
  async createMediaAttachment(input: MediaAttachmentInput): Promise<MediaAttachment> {
    const variables = { input };
    const result = await this.executeMutation('mediaAttachmentCreate', variables);
    return new MediaAttachment(result.data.mediaAttachmentCreate);
  }
  /**
   Updates an existing media attachment
   * @param input Media attachment update input
   * @returns Promise<MediaAttachment> The updated media attachment
   */
  async updateMediaAttachment(input: UpdateMediaAttachmentInput): Promise<MediaAttachment> {
    const variables = { input };
    const result = await this.executeMutation('mediaAttachmentUpdate', variables);
    return new MediaAttachment(result.data.mediaAttachmentUpdate);
  }
  /**
   Deletes a media attachment
   * @param id MediaAttachment ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteMediaAttachment(id: number): Promise<DeleteMediaAttachmentResponse> {
    const variables = { id };
    const result = await this.executeMutation('mediaAttachmentDelete', variables);
    return new DeleteMediaAttachmentResponse(result.data.mediaAttachmentDelete);
  }
}