import { BaseService } from './BaseService';
import { RegisterCustomerResponse } from '../type/RegisterCustomerResponse';
import { RegisterCustomerInput } from '../type/RegisterCustomerInput';
/**
 Service class for RegisterCustomerResponse-related GraphQL operations
 */
export class RegisterCustomerResponseService extends BaseService {
  /**
   Registers a new customer and returns response
   * @param input RegisterCustomer input data
   * @returns Promise<RegisterCustomerResponse> The register customer response data
   */
  async registerCustomer(input: RegisterCustomerInput): Promise<RegisterCustomerResponse> {
    const variables = { input };
    const result = await this.executeMutation('registerCustomer', variables);
    return new RegisterCustomerResponse(result.data.registerCustomer);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}