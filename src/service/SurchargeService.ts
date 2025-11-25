import { BaseService } from './BaseService';
import { Surcharge } from '../type/Surcharge';
import { SurchargesResponse } from '../type/SurchargesResponse';
import { SurchargeSearchInput } from '../type/SurchargeSearchInput';
import { SurchargeInput } from '../type/SurchargeInput';
import { UpdateSurchargeInput } from '../type/UpdateSurchargeInput';
import { CreateSurchargeInput } from '../type/CreateSurchargeInput';
/**
 Service class for Surcharge-related GraphQL operations
 */
export class SurchargeService extends BaseService {
  /**
   Fetches a single surcharge by ID
   * @param id Surcharge ID to fetch
   * @returns Promise<Surcharge> The surcharge data
   */
  async getSurcharge(id: number): Promise<Surcharge> {
    const variables = { id };
    const result = await this.executeQuery('surcharge', variables);
    return new Surcharge(result.data.surcharge);
  }
  /**
   Fetches a list of surcharges with search criteria
   * @param input Surcharge search input parameters
   * @returns Promise<SurchargesResponse> The surcharges response data
   */
  async getSurcharges(input?: SurchargeSearchInput): Promise<SurchargesResponse> {
    const variables = { input };
    const result = await this.executeQuery('surcharges', variables);
    return new SurchargesResponse(result.data.surcharges);
  }
  /**
   Creates a new surcharge
   * @param input Surcharge creation input data
   * @returns Promise<Surcharge> The created surcharge
   */
  async createSurcharge(input: CreateSurchargeInput): Promise<Surcharge> {
    const variables = { input };
    const result = await this.executeMutation('surchargeCreate', variables);
    return new Surcharge(result.data.surchargeCreate);
  }
  /**
   Updates an existing surcharge
   * @param input Surcharge update input data
   * @returns Promise<Surcharge> The updated surcharge
   */
  async updateSurcharge(input: UpdateSurchargeInput): Promise<Surcharge> {
    const variables = { input };
    const result = await this.executeMutation('surchargeUpdate', variables);
    return new Surcharge(result.data.surchargeUpdate);
  }
  /**
   Deletes a surcharge
   * @param id Surcharge ID to delete
   * @returns Promise<boolean> Success status
   */
  async deleteSurcharge(id: number): Promise<boolean> {
    const variables = { id };
    const result = await this.executeMutation('surchargeDelete', variables);
    return result.data.surchargeDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}