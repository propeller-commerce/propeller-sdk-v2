import { SparePartsMachine } from '../type/SparePartsMachine';
import { SparePartsMachineResponse } from '../type/SparePartsMachineResponse';
import { SearchSparePartsMachineInput } from '../type/SearchSparePartsMachineInput';
import { CreateSparePartsMachineInput } from '../type/CreateSparePartsMachineInput';
import { UpsertSparePartsMachineInput } from '../type/UpsertSparePartsMachineInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as machineDoc } from '../generated/operations/machine';
import { document as machinesDoc } from '../generated/operations/machines';
import { document as machineCreateDoc } from '../generated/operations/machineCreate';
import { document as machineUpsertDoc } from '../generated/operations/machineUpsert';
/**
 Service for managing spare parts machines
 */
export function sparePartsMachineService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific spare parts machine
       * @param id Spare parts machine ID
       * @returns Promise<SparePartsMachine> Spare parts machine data
       */
    async getSparePartsMachine(id: number): Promise<SparePartsMachine> {
      const result = await runOperation(client, machineDoc, 'machine', { id });
      return result.data.machine as SparePartsMachine;
    },
    /**
       Retrieves spare parts machines with search criteria
       * @param input Search input parameters
       * @returns Promise<SparePartsMachineResponse> Spare parts machines response
       */
    async getSparePartsMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse> {
      const result = await runOperation(client, machinesDoc, 'machines', { input });
      return result.data.machines as SparePartsMachineResponse;
    },
    /**
       Creates a new spare parts machine
       * @param input Spare parts machine creation input
       * @returns Promise<SparePartsMachine> The created spare parts machine
       */
    async createSparePartsMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine> {
      const result = await runOperation(client, machineCreateDoc, 'machineCreate', { input });
      return result.data.machineCreate as SparePartsMachine;
    },
    /**
       Updates an existing spare parts machine
       * @param input Spare parts machine update input
       * @returns Promise<SparePartsMachine> The updated spare parts machine
       */
    async updateSparePartsMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine> {
      const result = await runOperation(client, machineUpsertDoc, 'machineUpsert', { input });
      return result.data.machineUpsert as SparePartsMachine;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `sparePartsMachineService(client)`.
 */
export class SparePartsMachineService {
  private readonly _svc: ReturnType<typeof sparePartsMachineService>;
  constructor(client: GraphQLClient) { this._svc = sparePartsMachineService(client); }
  /**
   * Retrieves a specific spare parts machine
   * @param id Spare parts machine ID
   */
  getSparePartsMachine(id: number): Promise<SparePartsMachine> { return this._svc.getSparePartsMachine(id); }
  /**
   * Retrieves spare parts machines with search criteria
   * @param input Search input parameters
   */
  getSparePartsMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse> { return this._svc.getSparePartsMachines(input); }
  /**
   * Creates a new spare parts machine
   * @param input Spare parts machine creation input
   */
  createSparePartsMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine> { return this._svc.createSparePartsMachine(input); }
  /**
   * Updates an existing spare parts machine
   * @param input Spare parts machine update input
   */
  updateSparePartsMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine> { return this._svc.updateSparePartsMachine(input); }
}
