import { BaseService } from './BaseService';
import { MediaDocument } from '../type/MediaDocument';
import { PaginatedMediaDocumentResponse } from '../type/PaginatedMediaDocumentResponse';
import { MediaDocumentSearchInput } from '../type/MediaDocumentSearchInput';
import { MediaDocumentInput } from '../type/MediaDocumentInput';
import { UpdateMediaDocumentInput } from '../type/UpdateMediaDocumentInput';
/**
 Service for managing media documents
 * @extends BaseService
 */
export class MediaDocumentService extends BaseService {
  /**
   Retrieves a specific media document
   * @param id Media document ID
   * @returns Promise<MediaDocument> Media document data
   */
  async getMediaDocument(id: number): Promise<MediaDocument> {
    const variables = { id };
    const result = await this.executeQuery('mediaDocument', variables);
    return new MediaDocument(result.data.mediaDocument);
  }
  /**
   Retrieves media documents with pagination
   * @param input Search input parameters
   * @returns Promise<PaginatedMediaDocumentResponse> Paginated media documents
   */
  async getMediaDocuments(input?: MediaDocumentSearchInput): Promise<PaginatedMediaDocumentResponse> {
    const variables = { input };
    const result = await this.executeQuery('mediaDocuments', variables);
    return new PaginatedMediaDocumentResponse(result.data.mediaDocuments);
  }
  /**
   Creates a new media document
   * @param input Media document creation input
   * @returns Promise<MediaDocument> The created media document
   */
  async createMediaDocument(input: MediaDocumentInput): Promise<MediaDocument> {
    const variables = { input };
    const result = await this.executeMutation('mediaDocumentCreate', variables);
    return new MediaDocument(result.data.mediaDocumentCreate);
  }
  /**
   Updates an existing media document
   * @param input Media document update input
   * @returns Promise<MediaDocument> The updated media document
   */
  async updateMediaDocument(input: UpdateMediaDocumentInput): Promise<MediaDocument> {
    const variables = { input };
    const result = await this.executeMutation('mediaDocumentUpdate', variables);
    return new MediaDocument(result.data.mediaDocumentUpdate);
  }
  /**
   Deletes a media document
   * @param id Media document ID
   * @returns Promise<boolean> Success status
   */
  async deleteMediaDocument(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('mediaDocumentDelete', variables);
    return result.data.mediaDocumentDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}