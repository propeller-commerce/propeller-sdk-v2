import { BaseService } from './BaseService';
import { SparePartsMachine } from '../type/SparePartsMachine';
import { SparePartsMachineResponse } from '../type/SparePartsMachineResponse';
import { SearchSparePartsMachineInput } from '../type/SearchSparePartsMachineInput';
import { CreateSparePartsMachineInput } from '../type/CreateSparePartsMachineInput';
import { UpsertSparePartsMachineInput } from '../type/UpsertSparePartsMachineInput';
/**
 Service for managing machines (spare parts machines)
 * @extends BaseService
 */
export class MachineService extends BaseService {
  /**
   Retrieves a specific machine
   * @param id Machine ID
   * @returns Promise<SparePartsMachine> Machine data
   */
  async getMachine(id: number): Promise<SparePartsMachine> {
    const variables = { id };
    const result = await this.executeQuery('machine', variables);
    return result.data.machine as SparePartsMachine;
  }
  /**
   Retrieves machines with search criteria
   * @param input Search input parameters
   * @returns Promise<SparePartsMachineResponse> Machines response
   */
  async getMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse> {
    const variables = { input };
    const result = await this.executeQuery('machines', variables);
    return result.data.machines as SparePartsMachineResponse;
  }
  /**
   Creates a new machine
   * @param input Machine creation input
   * @returns Promise<SparePartsMachine> The created machine
   */
  async createMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine> {
    const variables = { input };
    const result = await this.executeMutation('machineCreate', variables);
    return result.data.machineCreate as SparePartsMachine;
  }
  /**
   Updates an existing machine
   * @param input Machine update input
   * @returns Promise<SparePartsMachine> The updated machine
   */
  async updateMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine> {
    const variables = { input };
    const result = await this.executeMutation('machineUpdate', variables);
    return result.data.machineUpdate as SparePartsMachine;
  }
}