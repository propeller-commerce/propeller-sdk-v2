import { Carrier } from '../type/Carrier';
import { CarriersResponse } from '../type/CarriersResponse';
import { CarriersSearchInput } from '../type/CarriersSearchInput';
import { CarrierCreateInput } from '../type/CarrierCreateInput';
import { CarrierUpdateInput } from '../type/CarrierUpdateInput';
import { GraphQLClient } from '../client/GraphQLClient';
import { runOperation } from './runOperation';
import { document as carrierDoc } from '../generated/operations/carrier';
import { document as carriersDoc } from '../generated/operations/carriers';
import { document as carrierCreateDoc } from '../generated/operations/carrierCreate';
import { document as carrierUpdateDoc } from '../generated/operations/carrierUpdate';
import { document as carrierDeleteDoc } from '../generated/operations/carrierDelete';
import type { CarrierUpdateVariables } from '../generated/operationVariables';
/**
 Service class for Carrier-related GraphQL operations
 */
export function carrierService(client: GraphQLClient) {
  return {
    /**
       Fetches a single carrier by ID
       * @param id Carrier ID to fetch
       * @returns Promise<Carrier> The carrier data
       */
    async getCarrier(id: number): Promise<Carrier> {
      const result = await runOperation(client, carrierDoc, 'carrier', { id });
      return result.data.carrier as Carrier;
    },
    /**
       Fetches a list of carriers with search criteria
       * @param input Carrier search input parameters
       * @returns Promise<CarriersResponse> The carriers response data
       */
    async getCarriers(input?: CarriersSearchInput): Promise<CarriersResponse> {
      const result = await runOperation(client, carriersDoc, 'carriers', { input });
      return result.data.carriers as CarriersResponse;
    },
    /**
       Creates a new carrier
       * @param input Carrier creation input data
       * @returns Promise<Carrier> The created carrier
       */
    async createCarrier(input: CarrierCreateInput): Promise<Carrier> {
      const result = await runOperation(client, carrierCreateDoc, 'carrierCreate', { input });
      return result.data.carrierCreate as Carrier;
    },
    /**
       Updates an existing carrier
       * @param input Carrier update input data
       * @returns Promise<Carrier> The updated carrier
       */
    async updateCarrier(variables: CarrierUpdateVariables): Promise<Carrier> {
      const result = await runOperation(client, carrierUpdateDoc, 'carrierUpdate', variables);
      return result.data.carrierUpdate as Carrier;
    },
    /**
       Deletes a carrier
       * @param id Carrier ID to delete
       * @returns Promise<boolean> Success status
       */
    async deleteCarrier(id: number): Promise<boolean> {
      const result = await runOperation(client, carrierDeleteDoc, 'carrierDelete', { id });
      return result.data.carrierDelete;
    },
  };
}

/**
 * Backwards-compatible class form. New code should call `carrierService(client)`.
 */
export class CarrierService {
  private readonly _svc: ReturnType<typeof carrierService>;
  constructor(client: GraphQLClient) { this._svc = carrierService(client); }
  /**
   * Fetches a single carrier by ID
   * @param id Carrier ID to fetch
   */
  getCarrier(id: number): Promise<Carrier> { return this._svc.getCarrier(id); }
  /**
   * Fetches a list of carriers with search criteria
   * @param input Carrier search input parameters
   */
  getCarriers(input?: CarriersSearchInput): Promise<CarriersResponse> { return this._svc.getCarriers(input); }
  /**
   * Creates a new carrier
   * @param input Carrier creation input data
   */
  createCarrier(input: CarrierCreateInput): Promise<Carrier> { return this._svc.createCarrier(input); }
  /**
   * Updates an existing carrier
   * @param input Carrier update input data
   */
  updateCarrier(variables: CarrierUpdateVariables): Promise<Carrier> { return this._svc.updateCarrier(variables); }
  /**
   * Deletes a carrier
   * @param id Carrier ID to delete
   */
  deleteCarrier(id: number): Promise<boolean> { return this._svc.deleteCarrier(id); }
}
