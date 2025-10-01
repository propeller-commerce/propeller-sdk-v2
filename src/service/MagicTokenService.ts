import { BaseService } from './BaseService';
import { MagicToken } from '../type/MagicToken';
import { MagicTokenResponse } from '../type/MagicTokenResponse';
import { MagicTokenSearchInput } from '../type/MagicTokenSearchInput';
import { MagicTokenCreateInput } from '../type/MagicTokenCreateInput';
import { MagicTokenUpdateInput } from '../type/MagicTokenUpdateInput';
import { Login } from '../type/Login';
/**
 Service for magic token authentication
 * @extends BaseService
 */
export class MagicTokenService extends BaseService {
  /**
   Retrieves a specific magic token
   * @param id Magic token ID
   * @returns Promise<MagicToken> Magic token data
   */
  async getMagicToken(id: number): Promise<MagicToken> {
    const variables = { id };
    const result = await this.executeQuery('magicToken', variables);
    return new MagicToken(result.data.magicToken);
  }
  /**
   Retrieves magic tokens with search
   * @param input Search input parameters
   * @returns Promise<MagicTokenResponse> Magic tokens response
   */
  async getMagicTokens(input?: MagicTokenSearchInput): Promise<MagicTokenResponse> {
    const variables = { input };
    const result = await this.executeQuery('magicTokens', variables);
    return new MagicTokenResponse(result.data.magicTokens);
  }
  /**
   Creates a new magic token
   * @param input Magic token creation input
   * @returns Promise<MagicToken> The created magic token
   */
  async createMagicToken(input: MagicTokenCreateInput): Promise<MagicToken> {
    const variables = { input };
    const result = await this.executeMutation('magicTokenCreate', variables);
    return new MagicToken(result.data.magicTokenCreate);
  }
  /**
   Updates an existing magic token
   * @param id Magic token ID
   * @param input Magic token update input
   * @returns Promise<MagicToken> The updated magic token
   */
  async updateMagicToken(id: string, input: MagicTokenUpdateInput): Promise<MagicToken> {
    const variables = { id, input };
    const result = await this.executeMutation('magicTokenUpdate', variables);
    return new MagicToken(result.data.magicTokenUpdate);
  }
  /**
   Authenticates a user using a magic token
   * @param id Magic token ID
   * @returns Promise<Login> Login response with user data
   */
  async magicTokenLogin(id: string): Promise<Login> {
    const variables = { id };
    const result = await this.executeMutation('magicTokenLogin', variables);
    return new Login(result.data.magicTokenLogin);
  }
  /**
   Initializes the service by preloading common fragments
   */
  async initializeService(): Promise<void> {
  }
}