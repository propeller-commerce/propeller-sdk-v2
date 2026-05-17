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
import type { MachineCreateVariables, MachineUpsertVariables, MachineVariables, MachinesVariables } from '../generated/operationVariables';
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
    async getSparePartsMachine(variables: MachineVariables): Promise<SparePartsMachine> {
      const result = await runOperation<{ machine: SparePartsMachine }>(client, machineDoc, 'machine', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.machine as SparePartsMachine;
    },
    /**
       Retrieves spare parts machines with search criteria
       * @param input Search input parameters
       * @returns Promise<SparePartsMachineResponse> Spare parts machines response
       */
    async getSparePartsMachines(variables: MachinesVariables): Promise<SparePartsMachineResponse> {
      const result = await runOperation<{ machines: SparePartsMachineResponse }>(client, machinesDoc, 'machines', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.machines as SparePartsMachineResponse;
    },
    /**
       Creates a new spare parts machine
       * @param input Spare parts machine creation input
       * @returns Promise<SparePartsMachine> The created spare parts machine
       */
    async createSparePartsMachine(variables: MachineCreateVariables): Promise<SparePartsMachine> {
      const result = await runOperation<{ machineCreate: SparePartsMachine }>(client, machineCreateDoc, 'machineCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.machineCreate as SparePartsMachine;
    },
    /**
       Updates an existing spare parts machine
       * @param input Spare parts machine update input
       * @returns Promise<SparePartsMachine> The updated spare parts machine
       */
    async updateSparePartsMachine(variables: MachineUpsertVariables): Promise<SparePartsMachine> {
      const result = await runOperation<{ machineUpsert: SparePartsMachine }>(client, machineUpsertDoc, 'machineUpsert', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
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
  getSparePartsMachine(variables: MachineVariables): Promise<SparePartsMachine> { return this._svc.getSparePartsMachine(variables); }
  /**
   * Retrieves spare parts machines with search criteria
   * @param input Search input parameters
   */
  getSparePartsMachines(variables: MachinesVariables): Promise<SparePartsMachineResponse> { return this._svc.getSparePartsMachines(variables); }
  /**
   * Creates a new spare parts machine
   * @param input Spare parts machine creation input
   */
  createSparePartsMachine(variables: MachineCreateVariables): Promise<SparePartsMachine> { return this._svc.createSparePartsMachine(variables); }
  /**
   * Updates an existing spare parts machine
   * @param input Spare parts machine update input
   */
  updateSparePartsMachine(variables: MachineUpsertVariables): Promise<SparePartsMachine> { return this._svc.updateSparePartsMachine(variables); }
}
