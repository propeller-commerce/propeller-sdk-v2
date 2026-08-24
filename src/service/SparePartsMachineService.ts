import { SparePartsMachine } from '../type/SparePartsMachine';
import { SparePartsMachineResponse } from '../type/SparePartsMachineResponse';
import { GraphQLClient, GraphQLFetchOptions } from '../client/GraphQLClient';
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
       * @param variables Variables for the machine query — see `machineService.getMachine`
       * @param fetchOptions Transport-level hints (e.g. cache tags). Never serialised
       *   into the request body.
       * @returns Promise<SparePartsMachine> Spare parts machine data
       */
    async getSparePartsMachine(variables: MachineVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachine> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ machine: SparePartsMachine }>(client, machineDoc, 'machine', { ...variables, language }, fetchOptions);
      return result.data.machine as SparePartsMachine;
    },
    /**
       Retrieves spare parts machines with search criteria
       * @param variables Search input parameters
       * @param fetchOptions Transport-level hints (e.g. cache tags). Never serialised
       *   into the request body.
       * @returns Promise<SparePartsMachineResponse> Spare parts machines response
       */
    async getSparePartsMachines(variables: MachinesVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachineResponse> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ machines: SparePartsMachineResponse }>(client, machinesDoc, 'machines', { ...variables, language }, fetchOptions);
      return result.data.machines as SparePartsMachineResponse;
    },
    /**
       Creates a new spare parts machine
       * @param variables Spare parts machine creation input
       * @returns Promise<SparePartsMachine> The created spare parts machine
       */
    async createSparePartsMachine(variables: MachineCreateVariables): Promise<SparePartsMachine> {
      const result = await runOperation<{ machineCreate: SparePartsMachine }>(client, machineCreateDoc, 'machineCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.machineCreate as SparePartsMachine;
    },
    /**
       Updates an existing spare parts machine
       * @param variables Spare parts machine update input
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
   * @param variables Variables for the machine query
   * @param fetchOptions Transport-level hints (e.g. cache tags)
   */
  getSparePartsMachine(variables: MachineVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachine> { return this._svc.getSparePartsMachine(variables, fetchOptions); }
  /**
   * Retrieves spare parts machines with search criteria
   * @param variables Search input parameters
   * @param fetchOptions Transport-level hints (e.g. cache tags)
   */
  getSparePartsMachines(variables: MachinesVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachineResponse> { return this._svc.getSparePartsMachines(variables, fetchOptions); }
  /**
   * Creates a new spare parts machine
   * @param variables Spare parts machine creation input
   */
  createSparePartsMachine(variables: MachineCreateVariables): Promise<SparePartsMachine> { return this._svc.createSparePartsMachine(variables); }
  /**
   * Updates an existing spare parts machine
   * @param variables Spare parts machine update input
   */
  updateSparePartsMachine(variables: MachineUpsertVariables): Promise<SparePartsMachine> { return this._svc.updateSparePartsMachine(variables); }
}
