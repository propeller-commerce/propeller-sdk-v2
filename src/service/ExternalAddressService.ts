import { BaseService } from './BaseService';
/**
 Service for managing external addresses
 * @extends BaseService
 */
export class ExternalAddressService extends BaseService {
  /**
   Retrieves a specific external address
   * @param id External address ID
   * @returns Promise<any> External address data
   */
  async getExternalAddress(id: number): Promise<any> {
    const variables = { id };
    const result = await this.executeQuery('externalAddress', variables);
    return result.data.externalAddress;
  }
  /**
   Creates a new external address
   * @param input External address creation input
   * @returns Promise<any> The created external address
   */
  async createExternalAddress(input: any): Promise<any> {
    const variables = { input };
    const result = await this.executeMutation('externalAddressCreate', variables);
    return result.data.externalAddressCreate;
  }
  /**
   Updates an existing external address
   * @param input External address update input
   * @returns Promise<any> The updated external address
   */
  async updateExternalAddress(input: any): Promise<any> {
    const variables = { input };
    const result = await this.executeMutation('externalAddressUpdate', variables);
    return result.data.externalAddressUpdate;
  }
  /**
   Deletes an external address
   * @param input External address delete input
   * @returns Promise<boolean> Success status
   */
  async deleteExternalAddress(input: any): Promise<boolean> {
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