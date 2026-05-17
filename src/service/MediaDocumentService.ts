import { DeleteMediaDocumentResponse } from '../type/DeleteMediaDocumentResponse';
import { MediaDocument } from '../type/MediaDocument';
import { PaginatedMediaDocumentResponse } from '../type/PaginatedMediaDocumentResponse';
import { MediaDocumentSearchInput } from '../type/MediaDocumentSearchInput';
import { MediaDocumentInput } from '../type/MediaDocumentInput';
import { UpdateMediaDocumentInput } from '../type/UpdateMediaDocumentInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as mediaDocumentDoc } from '../generated/operations/mediaDocument';
import { document as mediaDocumentsDoc } from '../generated/operations/mediaDocuments';
import { document as mediaDocumentCreateDoc } from '../generated/operations/mediaDocumentCreate';
import { document as mediaDocumentUpdateDoc } from '../generated/operations/mediaDocumentUpdate';
import { document as mediaDocumentDeleteDoc } from '../generated/operations/mediaDocumentDelete';
import type { MediaDocumentDeleteVariables, MediaDocumentVariables, MediaDocumentsVariables } from '../generated/operationVariables';
/**
 Service for managing media documents
 */
export function mediaDocumentService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific media document
       * @deprecated The upstream `mediaDocument` query is deprecated; read via `media.document` from the parent resource instead.
       * @param id Media document ID
       * @returns Promise<MediaDocument> Media document data
       */
    async getMediaDocument(variables: MediaDocumentVariables): Promise<MediaDocument> {
      const result = await runOperation<{ mediaDocument: MediaDocument }>(client, mediaDocumentDoc, 'mediaDocument', variables);
      return result.data.mediaDocument as MediaDocument;
    },
    /**
       Retrieves media documents with pagination
       * @deprecated The upstream `mediaDocuments` query is deprecated; read via `media.documents` from the parent resource instead.
       * @param input Search input parameters
       * @returns Promise<PaginatedMediaDocumentResponse> Paginated media documents
       */
    async getMediaDocuments(variables: MediaDocumentsVariables): Promise<PaginatedMediaDocumentResponse> {
      const result = await runOperation<{ mediaDocuments: PaginatedMediaDocumentResponse }>(client, mediaDocumentsDoc, 'mediaDocuments', variables);
      return result.data.mediaDocuments as PaginatedMediaDocumentResponse;
    },
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
       * @param id Media document ID
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
   * Retrieves a specific media document
   * @param id Media document ID
   */
  getMediaDocument(variables: MediaDocumentVariables): Promise<MediaDocument> { return this._svc.getMediaDocument(variables); }
  /**
   * Retrieves media documents with pagination
   * @param input Search input parameters
   */
  getMediaDocuments(variables: MediaDocumentsVariables): Promise<PaginatedMediaDocumentResponse> { return this._svc.getMediaDocuments(variables); }
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
   * @param id Media document ID
   */
  deleteMediaDocument(variables: MediaDocumentDeleteVariables): Promise<DeleteMediaDocumentResponse> { return this._svc.deleteMediaDocument(variables); }
}
