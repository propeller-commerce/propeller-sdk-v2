import { Surcharge } from '../type/Surcharge';
import { SurchargesResponse } from '../type/SurchargesResponse';
import { SurchargeSearchInput } from '../type/SurchargeSearchInput';
import { UpdateSurchargeInput } from '../type/UpdateSurchargeInput';
import { CreateSurchargeInput } from '../type/CreateSurchargeInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as surchargeDoc } from '../generated/operations/surcharge';
import { document as surchargesDoc } from '../generated/operations/surcharges';
import { document as surchargeCreateDoc } from '../generated/operations/surchargeCreate';
import { document as surchargeUpdateDoc } from '../generated/operations/surchargeUpdate';
import { document as surchargeDeleteDoc } from '../generated/operations/surchargeDelete';
/**
 Service class for Surcharge-related GraphQL operations
 */
export function surchargeService(client: GraphQLClient) {
  return {
    /**
       Fetches a single surcharge by ID
       * @param id Surcharge ID to fetch
       * @returns Promise<Surcharge> The surcharge data
       */
    async getSurcharge(id: number): Promise<Surcharge> {
      const result = await runOperation<{ surcharge: Surcharge }>(client, surchargeDoc, 'surcharge', { id });
      return result.data.surcharge as Surcharge;
    },
    /**
       Fetches a list of surcharges with search criteria
       * @param input Surcharge search input parameters
       * @returns Promise<SurchargesResponse> The surcharges response data
       */
    async getSurcharges(input?: SurchargeSearchInput): Promise<SurchargesResponse> {
      const result = await runOperation<{ surcharges: SurchargesResponse }>(client, surchargesDoc, 'surcharges', { input });
      return result.data.surcharges as SurchargesResponse;
    },
    /**
       Creates a new surcharge
       * @param input Surcharge creation input data
       * @returns Promise<Surcharge> The created surcharge
       */
    async createSurcharge(input: CreateSurchargeInput): Promise<Surcharge> {
      const result = await runOperation<{ surchargeCreate: Surcharge }>(client, surchargeCreateDoc, 'surchargeCreate', { input });
      return result.data.surchargeCreate as Surcharge;
    },
    /**
       Updates an existing surcharge
       * @param input Surcharge update input data
       * @returns Promise<Surcharge> The updated surcharge
       */
    async updateSurcharge(id: string, input: UpdateSurchargeInput): Promise<Surcharge> {
      const result = await runOperation<{ surchargeUpdate: Surcharge }>(client, surchargeUpdateDoc, 'surchargeUpdate', { id, input });
      return result.data.surchargeUpdate as Surcharge;
    },
    /**
       Deletes a surcharge
       * @param id Surcharge ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteSurcharge(id: string): Promise<Surcharge> {
      const result = await runOperation<{ surchargeDelete: Surcharge }>(client, surchargeDeleteDoc, 'surchargeDelete', { id });
      return result.data.surchargeDelete as Surcharge;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `surchargeService(client)`.
 */
export class SurchargeService {
  private readonly _svc: ReturnType<typeof surchargeService>;
  constructor(client: GraphQLClient) { this._svc = surchargeService(client); }
  /**
   * Fetches a single surcharge by ID
   * @param id Surcharge ID to fetch
   */
  getSurcharge(id: number): Promise<Surcharge> { return this._svc.getSurcharge(id); }
  /**
   * Fetches a list of surcharges with search criteria
   * @param input Surcharge search input parameters
   */
  getSurcharges(input?: SurchargeSearchInput): Promise<SurchargesResponse> { return this._svc.getSurcharges(input); }
  /**
   * Creates a new surcharge
   * @param input Surcharge creation input data
   */
  createSurcharge(input: CreateSurchargeInput): Promise<Surcharge> { return this._svc.createSurcharge(input); }
  /**
   * Updates an existing surcharge
   * @param input Surcharge update input data
   */
  updateSurcharge(id: string, input: UpdateSurchargeInput): Promise<Surcharge> { return this._svc.updateSurcharge(id, input); }
  /**
   * Deletes a surcharge
   * @param id Surcharge ID to delete
   */
  deleteSurcharge(id: string): Promise<Surcharge> { return this._svc.deleteSurcharge(id); }
}
