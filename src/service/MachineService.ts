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
 Service for managing machines (spare parts machines)
 */
export function machineService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific machine
       * @param id Machine ID
       * @returns Promise<SparePartsMachine> Machine data
       */
    async getMachine(id: number): Promise<SparePartsMachine> {
      const result = await runOperation(client, machineDoc, 'machine', { id });
      return result.data.machine as SparePartsMachine;
    },
    /**
       Retrieves machines with search criteria
       * @param input Search input parameters
       * @returns Promise<SparePartsMachineResponse> Machines response
       */
    async getMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse> {
      const result = await runOperation(client, machinesDoc, 'machines', { input });
      return result.data.machines as SparePartsMachineResponse;
    },
    /**
       Creates a new machine
       * @param input Machine creation input
       * @returns Promise<SparePartsMachine> The created machine
       */
    async createMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine> {
      const result = await runOperation(client, machineCreateDoc, 'machineCreate', { input });
      return result.data.machineCreate as SparePartsMachine;
    },
    /**
       Updates an existing machine
       * @param input Machine update input
       * @returns Promise<SparePartsMachine> The updated machine
       */
    async updateMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine> {
      const result = await runOperation(client, machineUpsertDoc, 'machineUpsert', { input });
      return result.data.machineUpsert as SparePartsMachine;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `machineService(client)`.
 */
export class MachineService {
  private readonly _svc: ReturnType<typeof machineService>;
  constructor(client: GraphQLClient) { this._svc = machineService(client); }
  /**
   * Retrieves a specific machine
   * @param id Machine ID
   */
  getMachine(id: number): Promise<SparePartsMachine> { return this._svc.getMachine(id); }
  /**
   * Retrieves machines with search criteria
   * @param input Search input parameters
   */
  getMachines(input?: SearchSparePartsMachineInput): Promise<SparePartsMachineResponse> { return this._svc.getMachines(input); }
  /**
   * Creates a new machine
   * @param input Machine creation input
   */
  createMachine(input: CreateSparePartsMachineInput): Promise<SparePartsMachine> { return this._svc.createMachine(input); }
  /**
   * Updates an existing machine
   * @param input Machine update input
   */
  updateMachine(input: UpsertSparePartsMachineInput): Promise<SparePartsMachine> { return this._svc.updateMachine(input); }
}
