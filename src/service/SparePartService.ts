import { BaseService } from './BaseService';
import { SparePart } from '../type/SparePart';
import { SparePartsResponse } from '../type/SparePartsResponse';
import { CreateSparePartInput } from '../type/CreateSparePartInput';
/**
 Service for managing spare parts
 * @extends BaseService
 */
export class SparePartService extends BaseService {
  /**
   Retrieves a specific spare part
   * @param id Spare part ID
   * @returns Promise<SparePart> Spare part data
   */
  async getSparePart(id: number): Promise<SparePart> {
    const variables = { id };
    const result = await this.executeQuery('sparePart', variables);
    return new SparePart(result.data.sparePart);
  }
  /**
   Retrieves all spare parts
   * @returns Promise<SparePartsResponse> Spare parts response
   */
  async getSpareParts(): Promise<SparePartsResponse> {
    const variables = {};
    const result = await this.executeQuery('spareParts', variables);
    return new SparePartsResponse(result.data.spareParts);
  }
  /**
   Creates a new spare part
   * @param input Spare part creation input
   * @returns Promise<SparePart> The created spare part
   */
  async createSparePart(input: CreateSparePartInput): Promise<SparePart> {
    const variables = { input };
    const result = await this.executeMutation('sparePartCreate', variables);
    return new SparePart(result.data.sparePartCreate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}