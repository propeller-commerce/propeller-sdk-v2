import { BaseService } from './BaseService';
import { Carrier } from '../type/Carrier';
import { CarriersResponse } from '../type/CarriersResponse';
import { CarriersSearchInput } from '../type/CarriersSearchInput';
import { CarrierCreateInput } from '../type/CarrierCreateInput';
import { CarrierUpdateInput } from '../type/CarrierUpdateInput';
/**
 Service class for Carrier-related GraphQL operations
 */
export class CarrierService extends BaseService {
  /**
   Fetches a single carrier by ID
   * @param id Carrier ID to fetch
   * @returns Promise<Carrier> The carrier data
   */
  async getCarrier(id: number): Promise<Carrier> {
    const variables = { id };
    const result = await this.executeQuery('carrier', variables);
    return result.data.carrier as Carrier;
  }
  /**
   Fetches a list of carriers with search criteria
   * @param input Carrier search input parameters
   * @returns Promise<CarriersResponse> The carriers response data
   */
  async getCarriers(input?: CarriersSearchInput): Promise<CarriersResponse> {
    const variables = { input };
    const result = await this.executeQuery('carriers', variables);
    return result.data.carriers as CarriersResponse;
  }
  /**
   Creates a new carrier
   * @param input Carrier creation input data
   * @returns Promise<Carrier> The created carrier
   */
  async createCarrier(input: CarrierCreateInput): Promise<Carrier> {
    const variables = { input };
    const result = await this.executeMutation('carrierCreate', variables);
    return result.data.carrierCreate as Carrier;
  }
  /**
   Updates an existing carrier
   * @param input Carrier update input data
   * @returns Promise<Carrier> The updated carrier
   */
  async updateCarrier(input: CarrierUpdateInput): Promise<Carrier> {
    const variables = { input };
    const result = await this.executeMutation('carrierUpdate', variables);
    return result.data.carrierUpdate as Carrier;
  }
  /**
   Deletes a carrier
   * @param id Carrier ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteCarrier(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('carrierDelete', variables);
    return result.data.carrierDelete;
  }
}