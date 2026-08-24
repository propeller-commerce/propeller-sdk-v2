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
 Service for managing machines (spare parts machines)
 */
export function machineService(client: GraphQLClient) {
  return {
    /**
       Retrieves a specific machine
       * @param variables Variables for the machine query
       *  - id: string - Machine ID to fetch
       *  - slug: string - Machine slug to fetch
       *  - source / sourceId: string - External source / source identifier pair
       *  - language: string - Language for localized content
       *  - sparePartsMachineProductSearchInput: SparePartsMachineProductSearchInput -
       *    Search/filter/sort/paging input for the machine's `sparePartProducts`
       *  - priceCalculateProductInput: PriceCalculateProductInput - Price calculation input
       *  - imageSearchFilters: MediaImageProductSearchInput - Image search filters
       *  - imageVariantFilters: TransformationsInput! - Image transformation filters
       * @param fetchOptions Transport-level hints (e.g. cache tags). Never serialised
       *   into the request body.
       * @returns Promise<SparePartsMachine> Machine data
       */
    async getMachine(variables: MachineVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachine> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ machine: SparePartsMachine }>(client, machineDoc, 'machine', { ...variables, language }, fetchOptions);
      return result.data.machine as SparePartsMachine;
    },
    /**
       Retrieves machines with search criteria
       * @param variables Search input parameters
       * @param fetchOptions Transport-level hints (e.g. cache tags). Never serialised
       *   into the request body.
       * @returns Promise<SparePartsMachineResponse> Machines response
       */
    async getMachines(variables: MachinesVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachineResponse> {
      const language = variables.language ?? client.getDefaultLanguage();
      const result = await runOperation<{ machines: SparePartsMachineResponse }>(client, machinesDoc, 'machines', { ...variables, language }, fetchOptions);
      return result.data.machines as SparePartsMachineResponse;
    },
    /**
       Creates a new machine
       * @param variables Machine creation input
       * @returns Promise<SparePartsMachine> The created machine
       */
    async createMachine(variables: MachineCreateVariables): Promise<SparePartsMachine> {
      const result = await runOperation<{ machineCreate: SparePartsMachine }>(client, machineCreateDoc, 'machineCreate', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
      return result.data.machineCreate as SparePartsMachine;
    },
    /**
       Updates an existing machine
       * @param variables Machine update input
       * @returns Promise<SparePartsMachine> The updated machine
       */
    async updateMachine(variables: MachineUpsertVariables): Promise<SparePartsMachine> {
      const result = await runOperation<{ machineUpsert: SparePartsMachine }>(client, machineUpsertDoc, 'machineUpsert', { ...variables, language: variables.language ?? client.getDefaultLanguage() });
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
   * @param variables Variables for the machine query
   * @param fetchOptions Transport-level hints (e.g. cache tags)
   */
  getMachine(variables: MachineVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachine> { return this._svc.getMachine(variables, fetchOptions); }
  /**
   * Retrieves machines with search criteria
   * @param variables Search input parameters
   * @param fetchOptions Transport-level hints (e.g. cache tags)
   */
  getMachines(variables: MachinesVariables, fetchOptions?: GraphQLFetchOptions): Promise<SparePartsMachineResponse> { return this._svc.getMachines(variables, fetchOptions); }
  /**
   * Creates a new machine
   * @param variables Machine creation input
   */
  createMachine(variables: MachineCreateVariables): Promise<SparePartsMachine> { return this._svc.createMachine(variables); }
  /**
   * Updates an existing machine
   * @param variables Machine update input
   */
  updateMachine(variables: MachineUpsertVariables): Promise<SparePartsMachine> { return this._svc.updateMachine(variables); }
}
