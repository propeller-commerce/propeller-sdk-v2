import { BaseService } from './BaseService';
import { VerifyToken } from '../type/VerifyToken';
import { VerifyTokenInput } from '../type/VerifyTokenInput';
/**
 Service class for VerifyToken-related GraphQL operations
 */
export class VerifyTokenService extends BaseService {
  /**
   Verifies a token and returns response
   * @param input VerifyToken input data
   * @returns Promise<VerifyToken> The verify token response data
   */
  async verifyToken(input: VerifyTokenInput): Promise<VerifyToken> {
    const variables = { input };
    const result = await this.executeMutation('verifyToken', variables);
    return new VerifyToken(result.data.verifyToken);
  }
}