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
    return new Carrier(result.data.carrier);
  }
  /**
   Fetches a list of carriers with search criteria
   * @param input Carrier search input parameters
   * @returns Promise<CarriersResponse> The carriers response data
   */
  async getCarriers(input?: CarriersSearchInput): Promise<CarriersResponse> {
    const variables = { input };
    const result = await this.executeQuery('carriers', variables);
    return new CarriersResponse(result.data.carriers);
  }
  /**
   Creates a new carrier
   * @param input Carrier creation input data
   * @returns Promise<Carrier> The created carrier
   */
  async createCarrier(input: CarrierCreateInput): Promise<Carrier> {
    const variables = { input };
    const result = await this.executeMutation('carrierCreate', variables);
    return new Carrier(result.data.carrierCreate);
  }
  /**
   Updates an existing carrier
   * @param input Carrier update input data
   * @returns Promise<Carrier> The updated carrier
   */
  async updateCarrier(input: CarrierUpdateInput): Promise<Carrier> {
    const variables = { input };
    const result = await this.executeMutation('carrierUpdate', variables);
    return new Carrier(result.data.carrierUpdate);
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
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}