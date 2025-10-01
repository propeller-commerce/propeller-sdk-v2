import { BaseService } from './BaseService';
import { ExternalAddress } from '../type/ExternalAddress';
import { ExternalAddressCreateInput } from '../type/ExternalAddressCreateInput';
import { ExternalAddressUpdateInput } from '../type/ExternalAddressUpdateInput';
import { ExternalAddressDeleteInput } from '../type/ExternalAddressDeleteInput';
/**
 Service for managing external addresses
 * @extends BaseService
 */
export class ExternalAddressService extends BaseService {
  /**
   Retrieves a specific external address
   * @param id External address ID
   * @returns Promise<ExternalAddress> External address data
   */
  async getExternalAddress(id: number): Promise<ExternalAddress> {
    const variables = { id };
    const result = await this.executeQuery('externalAddress', variables);
    return new ExternalAddress(result.data.externalAddress);
  }
  /**
   Creates a new external address
   * @param input External address creation input
   * @returns Promise<ExternalAddress> The created external address
   */
  async createExternalAddress(input: ExternalAddressCreateInput): Promise<ExternalAddress> {
    const variables = { input };
    const result = await this.executeMutation('externalAddressCreate', variables);
    return new ExternalAddress(result.data.externalAddressCreate);
  }
  /**
   Updates an existing external address
   * @param input External address update input
   * @returns Promise<ExternalAddress> The updated external address
   */
  async updateExternalAddress(input: ExternalAddressUpdateInput): Promise<ExternalAddress> {
    const variables = { input };
    const result = await this.executeMutation('externalAddressUpdate', variables);
    return new ExternalAddress(result.data.externalAddressUpdate);
  }
  /**
   Deletes an external address
   * @param input External address delete input
   * @returns Promise<boolean> Success status
   */
  async deleteExternalAddress(input: ExternalAddressDeleteInput): Promise<boolean> {
    const variables = { input };
    const result = await this.executeMutation('externalAddressDelete', variables);
    return result.data.externalAddressDelete;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}