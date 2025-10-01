import { BaseService } from './BaseService';
import { SparePartsMachine } from '../type/SparePartsMachine';
import { SparePartsMachineResponse } from '../type/SparePartsMachineResponse';
import { SearchSparePartsMachineInput } from '../type/SearchSparePartsMachineInput';
import { CreateSparePartsMachineInput } from '../type/CreateSparePartsMachineInput';
import { UpsertSparePartsMachineInput } from '../type/UpsertSparePartsMachineInput';
/**
 Service for managing spare parts machines
 * @extends BaseService
 */
export class SparePartsMachineService extends BaseService {
  /**
   Retrieves a specific spare parts machine
   * @param id Spare parts machine ID
   * @returns Promise<SparePartsMachine> Spare parts machine data
   */
  async getSparePartsMachine(id: number): Promise<SparePartsMachine> {
    const variables = { id };
    const result = await this.executeQuery('sparePartsMachine', variables);
    return new SparePartsMachine(result.data.sparePartsMachine);
  }
  /**
   Retrieves spare parts machines with search criteria
   * @param input Search input parameters
   * @returns Promise<SparePartsMachineResponse> Spare parts machines response
   */
  async getSparePartsMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse> {
    const variables = { input };
    const result = await this.executeQuery('sparePartsMachines', variables);
    return new SparePartsMachineResponse(result.data.sparePartsMachines);
  }
  /**
   Creates a new spare parts machine
   * @param input Spare parts machine creation input
   * @returns Promise<SparePartsMachine> The created spare parts machine
   */
  async createSparePartsMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine> {
    const variables = { input };
    const result = await this.executeMutation('sparePartsMachineCreate', variables);
    return new SparePartsMachine(result.data.sparePartsMachineCreate);
  }
  /**
   Updates an existing spare parts machine
   * @param input Spare parts machine update input
   * @returns Promise<SparePartsMachine> The updated spare parts machine
   */
  async updateSparePartsMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine> {
    const variables = { input };
    const result = await this.executeMutation('sparePartsMachineUpdate', variables);
    return new SparePartsMachine(result.data.sparePartsMachineUpdate);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}