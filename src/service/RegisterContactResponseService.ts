import { BaseService } from './BaseService';
import { RegisterContactResponse } from '../type/RegisterContactResponse';
import { RegisterContactInput } from '../type/RegisterContactInput';
/**
 Service class for RegisterContactResponse-related GraphQL operations
 */
export class RegisterContactResponseService extends BaseService {
  /**
   Registers a new contact and returns response
   * @param input RegisterContact input data
   * @returns Promise<RegisterContactResponse> The register contact response data
   */
  async registerContact(input: RegisterContactInput): Promise<RegisterContactResponse> {
    const variables = { input };
    const result = await this.executeMutation('registerContact', variables);
    return result.data.registerContact as RegisterContactResponse;
  }
}