import { BaseService } from './BaseService';
import { SparePartsMachineMedia } from '../type/SparePartsMachineMedia';
/**
 Service for managing spare parts machine media
 * @extends BaseService
 */
export class SparePartsMachineMediaService extends BaseService {
  /**
   Retrieves a specific spare parts machine media
   * @param id Media ID
   * @returns Promise<SparePartsMachineMedia> Media data
   */
  async getSparePartsMachineMedia(id: number): Promise<SparePartsMachineMedia> {
    const variables = { id };
    const result = await this.executeQuery('sparePartsMachineMedia', variables);
    return new SparePartsMachineMedia(result.data.sparePartsMachineMedia);
  }
  /**
   Retrieves all spare parts machine media
   * @returns Promise<SparePartsMachineMedia[]> Array of media items
   */
  async getSparePartsMachineMedias(): Promise<SparePartsMachineMedia[]> {
    const variables = {};
    const result = await this.executeQuery('sparePartsMachineMedias', variables);
    return result.data.sparePartsMachineMedias.map((media: any) => new SparePartsMachineMedia(media));
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}