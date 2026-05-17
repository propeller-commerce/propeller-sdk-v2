import { DeleteMediaAttachmentResponse } from '../type/DeleteMediaAttachmentResponse';
import { MediaAttachment } from '../type/MediaAttachment';
import { MediaAttachmentInput } from '../type/MediaAttachmentInput';
import { UpdateMediaAttachmentInput } from '../type/UpdateMediaAttachmentInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as mediaAttachmentCreateDoc } from '../generated/operations/mediaAttachmentCreate';
import { document as mediaAttachmentUpdateDoc } from '../generated/operations/mediaAttachmentUpdate';
import { document as mediaAttachmentDeleteDoc } from '../generated/operations/mediaAttachmentDelete';
import type { MediaAttachmentUpdateVariables } from '../generated/operationVariables';
/**
 Service for managing media attachments
 */
export function mediaAttachmentService(client: GraphQLClient) {
  return {
    /**
       Creates a new media attachment
       * @param input Media attachment creation input
       * @returns Promise<MediaAttachment> The created media attachment
       */
    async createMediaAttachment(input: MediaAttachmentInput): Promise<MediaAttachment> {
      const result = await runOperation<{ mediaAttachmentCreate: MediaAttachment }>(client, mediaAttachmentCreateDoc, 'mediaAttachmentCreate', { input });
      return result.data.mediaAttachmentCreate as MediaAttachment;
    },
    /**
       Updates an existing media attachment
       * @param input Media attachment update input
       * @returns Promise<MediaAttachment> The updated media attachment
       */
    async updateMediaAttachment(variables: MediaAttachmentUpdateVariables): Promise<MediaAttachment> {
      const result = await runOperation<{ mediaAttachmentUpdate: MediaAttachment }>(client, mediaAttachmentUpdateDoc, 'mediaAttachmentUpdate', variables);
      return result.data.mediaAttachmentUpdate as MediaAttachment;
    },
    /**
       Deletes a media attachment
       * @param id MediaAttachment ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteMediaAttachment(id: number): Promise<DeleteMediaAttachmentResponse> {
      const result = await runOperation<{ mediaAttachmentDelete: DeleteMediaAttachmentResponse }>(client, mediaAttachmentDeleteDoc, 'mediaAttachmentDelete', { id });
      return result.data.mediaAttachmentDelete as DeleteMediaAttachmentResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `mediaAttachmentService(client)`.
 */
export class MediaAttachmentService {
  private readonly _svc: ReturnType<typeof mediaAttachmentService>;
  constructor(client: GraphQLClient) { this._svc = mediaAttachmentService(client); }
  /**
   * Creates a new media attachment
   * @param input Media attachment creation input
   */
  createMediaAttachment(input: MediaAttachmentInput): Promise<MediaAttachment> { return this._svc.createMediaAttachment(input); }
  /**
   * Updates an existing media attachment
   * @param input Media attachment update input
   */
  updateMediaAttachment(variables: MediaAttachmentUpdateVariables): Promise<MediaAttachment> { return this._svc.updateMediaAttachment(variables); }
  /**
   * Deletes a media attachment
   * @param id MediaAttachment ID to delete
   */
  deleteMediaAttachment(id: number): Promise<DeleteMediaAttachmentResponse> { return this._svc.deleteMediaAttachment(id); }
}
