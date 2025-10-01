import { BaseService } from './BaseService';
import { VerifyTokenInput } from '../type/VerifyTokenInput';
/**
 Service class for VerifyToken-related GraphQL operations
 */
export class VerifyTokenService extends BaseService {
  /**
   Verifies a token and returns response
   * @param input VerifyToken input data
   * @returns Promise<any> The verify token response data
   */
  async verifyToken(input: VerifyTokenInput): Promise<any> {
    const variables = { input };
    const result = await this.executeMutation('verifyToken', variables);
    return result.data.verifyToken;
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}