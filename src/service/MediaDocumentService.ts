import { DeleteMediaDocumentResponse } from '../type/DeleteMediaDocumentResponse';
import { MediaDocument } from '../type/MediaDocument';
import { PaginatedMediaDocumentResponse } from '../type/PaginatedMediaDocumentResponse';
import { MediaDocumentSearchInput } from '../type/MediaDocumentSearchInput';
import { MediaDocumentInput } from '../type/MediaDocumentInput';
import { UpdateMediaDocumentInput } from '../type/UpdateMediaDocumentInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as mediaDocumentCreateDoc } from '../generated/operations/mediaDocumentCreate';
import { document as mediaDocumentUpdateDoc } from '../generated/operations/mediaDocumentUpdate';
import { document as mediaDocumentDeleteDoc } from '../generated/operations/mediaDocumentDelete';
import type { MediaDocumentDeleteVariables } from '../generated/operationVariables';
/**
 Service for managing media documents
 */
export function mediaDocumentService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific media document
    /**
       Retrieves media documents with pagination
    /**
       Creates a new media document
       * @param input Media document creation input
       * @returns Promise<MediaDocument> The created media document
       */
    async createMediaDocument(input: MediaDocumentInput): Promise<MediaDocument> {
      const result = await runOperation<{ mediaDocumentCreate: MediaDocument }>(client, mediaDocumentCreateDoc, 'mediaDocumentCreate', { input });
      return result.data.mediaDocumentCreate as MediaDocument;
    },
    /**
       Updates an existing media document
       * @param input Media document update input
       * @returns Promise<MediaDocument> The updated media document
       */
    async updateMediaDocument(input: UpdateMediaDocumentInput): Promise<MediaDocument> {
      const result = await runOperation<{ mediaDocumentUpdate: MediaDocument }>(client, mediaDocumentUpdateDoc, 'mediaDocumentUpdate', { input });
      return result.data.mediaDocumentUpdate as MediaDocument;
    },
    /**
       Deletes a media document
       * @param variables Media document ID
       * @returns Promise<boolean> Success status
       */
    async deleteMediaDocument(variables: MediaDocumentDeleteVariables): Promise<DeleteMediaDocumentResponse> {
      const result = await runOperation<{ mediaDocumentDelete: DeleteMediaDocumentResponse }>(client, mediaDocumentDeleteDoc, 'mediaDocumentDelete', variables);
      return result.data.mediaDocumentDelete as DeleteMediaDocumentResponse;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `mediaDocumentService(client)`.
 */
export class MediaDocumentService {
  private readonly _svc: ReturnType<typeof mediaDocumentService>;
  constructor(client: GraphQLClient) { this._svc = mediaDocumentService(client); }
  /**
   * Creates a new media document
   * @param input Media document creation input
   */
  createMediaDocument(input: MediaDocumentInput): Promise<MediaDocument> { return this._svc.createMediaDocument(input); }
  /**
   * Updates an existing media document
   * @param input Media document update input
   */
  updateMediaDocument(input: UpdateMediaDocumentInput): Promise<MediaDocument> { return this._svc.updateMediaDocument(input); }
  /**
   * Deletes a media document
   * @param variables Media document ID
   */
  deleteMediaDocument(variables: MediaDocumentDeleteVariables): Promise<DeleteMediaDocumentResponse> { return this._svc.deleteMediaDocument(variables); }
}
